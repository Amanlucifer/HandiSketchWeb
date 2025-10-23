import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Trash2, Eye, EyeOff, Search, LogOut } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from 'date-fns';

interface ContactMessage {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  service_type: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    // Filter messages based on search term
    const filtered = messages.filter(message => 
      message.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (message.service_type && message.service_type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredMessages(filtered);
  }, [messages, searchTerm]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ is_read: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      setMessages(prev => 
        prev.map(msg => 
          msg.id === id ? { ...msg, is_read: !currentStatus } : msg
        )
      );

      toast({
        title: "Success",
        description: `Message marked as ${!currentStatus ? 'read' : 'unread'}.`
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Error",
        description: "Failed to update message status.",
        variant: "destructive"
      });
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setMessages(prev => prev.filter(msg => msg.id !== id));
      toast({
        title: "Success",
        description: "Message deleted successfully."
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Error",
        description: "Failed to delete message.",
        variant: "destructive"
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage contact messages</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              Total: {messages.length}
            </Badge>
            <Badge variant="destructive" className="px-3 py-1">
              Unread: {messages.filter(m => !m.is_read).length}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">
                  {searchTerm ? 'No messages match your search.' : 'No messages yet.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredMessages.map((message) => (
              <Card key={message.id} className={`${!message.is_read ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {message.first_name} {message.last_name}
                        {!message.is_read && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            New
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Email: {message.email}</p>
                        {message.phone && <p>Phone: {message.phone}</p>}
                        {message.service_type && (
                          <p>Service: {message.service_type}</p>
                        )}
                        <p>Date: {format(new Date(message.created_at), 'MMM dd, yyyy at h:mm a')}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleReadStatus(message.id, message.is_read)}
                      >
                        {message.is_read ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteMessage(message.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;