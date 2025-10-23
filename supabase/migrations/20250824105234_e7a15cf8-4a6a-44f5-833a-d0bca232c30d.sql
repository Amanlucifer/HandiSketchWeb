-- Create contact messages table
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_type TEXT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (authenticated users can view all messages)
CREATE POLICY "Authenticated users can view messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated
USING (true);

-- Allow anyone to insert contact messages (public form)
CREATE POLICY "Anyone can submit messages" 
ON public.contact_messages 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can update messages (mark as read)
CREATE POLICY "Authenticated users can update messages" 
ON public.contact_messages 
FOR UPDATE 
TO authenticated
USING (true);

-- Only authenticated users can delete messages
CREATE POLICY "Authenticated users can delete messages" 
ON public.contact_messages 
FOR DELETE 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();