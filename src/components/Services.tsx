import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PencilRuler  , Building, Palette, Gift, Users, Star } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const individualHeaderRef = useScrollAnimation();
  const individualServicesRef = useStaggeredAnimation(200);
  const corporateHeaderRef = useScrollAnimation();
  const corporateServicesRef = useStaggeredAnimation(200);
  
  const individualServices = [{
    icon: <PencilRuler   className="w-8 h-8" />,
    title: "Custom Portraits",
    description: "Capture emotions, pets, and memories in timeless art styles",
    features: ["Colored", "Watercolor", "Pen Sketch", "Sizes: A4, A3, A2"],
    startingPrice: "₹1499"
  }, {
    icon: <Palette className="w-8 h-8" />,
    title: " Mini Creations",
    description: "Affordable & compact artworks – perfect for gifts & collections",
    features: ["Easy to display or gift", "Mini Digital Illustrations", "Budget-friendly & unique", "Mini Canvas Portraits (hand-painted)"],
    startingPrice: "₹899"
  }, {
    icon: <Gift className="w-8 h-8" />,
    title: "Memorial & Décor Art",
    description: "Premium large artworks for homes & special occasions",
    features: ["Memorial sizes: A2 & above", "Oil Paintings & Canvas Art", "Abstract, Classic & Orthodox Styles", "Perfect for décor & statement gifting"],
    startingPrice: "₹199"
  }];
  
  const corporateServices = [{
    icon: <Building className="w-8 h-8" />,
    title: "Corporate Portraits",
    description: "Professional artwork for offices, boardrooms, and executive spaces",
    features: ["Bulk & team orders available", "Consistent branding alignment", "Premium framing & finishing", "Adds elegance to professional spaces"],
    startingPrice: "₹299"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collections",
    description: "Coordinated artwork series for teams and departments",
    features: ["Customized themes (vision, mission, teamwork)", "Volume pricing & fast delivery", "Digital & canvas options", "Installation support for offices"],
    startingPrice: "₹499"
  }, {
    icon: <Star className="w-8 h-8" />,
    title: "Executive & Client Gifts",
    description: "Premium, personalized artworks for clients, executives & recognition events.",
    features: ["Branded & customized gifting options", "High-quality materials & packaging", "Bulk orders with gift wrapping", "Perfect for corporate milestones, retirements & awards"],
    startingPrice: "₹399"
  }];
  
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Individual Services */}
        <div id="individual" className="mb-20 rounded-xl bg-sketch-light p-8">
          <div ref={individualHeaderRef} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">For Individuals</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4"
             style={{
                fontFamily: '"Oswald", "Oswald Placeholder", sans-serif',
                letterSpacing: '-0.03em'
              }}
              >Personal Art Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your personal moments into lasting artistic treasures with our 
              personalized art services designed for individuals and families.
            </p>
          </div>

          <div ref={individualServicesRef} className="grid md:grid-cols-3 gap-8">
            {individualServices.map((service, index) => <Card key={index} className="card-animate bg-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.startingPrice}</span>
                    <Button size="sm" className="btn-animate">Get Started</Button>
                  </div> */}
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Corporate Services */}
        <div id="corporate" className="bg-sketch-light rounded-3xl p-8 lg:p-12">
          <div ref={corporateHeaderRef} className="text-center mb-16">
            <Badge className="mb-4">For Business</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4"
             style={{
                fontFamily: '"Oswald", "Oswald Placeholder", sans-serif',
                letterSpacing: '-0.03em'
              }}
              >Corporate Art Solutions</h2>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              Elevate your corporate environment with professional artwork and 
              custom pieces designed to reflect your company's values and culture.
            </p>
          </div>

          <div ref={corporateServicesRef} className="grid md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => <Card key={index} className="card-animate bg-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.startingPrice}</span>
                    <Button size="sm" variant="outline" className="btn-animate">Request Quote</Button>
                  </div> */}
                </CardContent>
              </Card>)}
          </div>
            

            {/* Schedule Consultation */}
          <div className="text-center mt-12">
            <a
              href="https://calendly.com/handisketch959/corporate-art-solutions-meet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-animate">
                Schedule Consultation
              </Button>
            </a>
            {/* <Button size="lg" className="btn-animate">Schedule Consultation</Button> */}
          </div>
        </div>
      </div>
    </section>;
};
export default Services;