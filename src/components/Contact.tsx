import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerRef = useScrollAnimation();
  const contactInfoRef = useStaggeredAnimation(200);
  // Contact form with scroll animations

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "handisketch959@gmail.com",
      action: "mailto:handisketch959@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 6207398003",
      action: "tel:+91 6207398003",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office",
      value: "Jharkhand",
      action: null,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon-Sun: 11AM-9PM",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-sketch-light">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">Start Your Art Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to commission your custom artwork? We'd love to hear about your project
            and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft card-animate">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{info.label}</div>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 inline-block duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Quick Quote</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Need a quick estimate? Call us directly or send us a message with your project details.
                </p>
                <a href="tel:+911234567890" className="w-full">
                  <Button variant="secondary" size="sm" className="w-full btn-animate">
                    Get Instant Quote
                  </Button>
                </a>

              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">FAQ</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-primary">How long does delivery take?</div>
                    <div className="text-muted-foreground">Typically 12-16 business days depending on complexity.</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">Do you offer revisions?</div>
                    <div className="text-muted-foreground">Yes, we include one round of revisions with every order.</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary">What payment methods do you accept?</div>
                    <div className="text-muted-foreground">We accept all major credit cards and PayPal.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;