import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brush, Award, Clock, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const headerRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const statsRef = useStaggeredAnimation(150);
  const processRef = useScrollAnimation();
  
  const stats = [{
    icon: <Users className="w-6 h-6" />,
    value: "100+",
    label: "Happy Clients"
  }, {
    icon: <Brush className="w-6 h-6" />,
    value: "200+",
    label: "Artworks Created"
  }, {
    icon: <Award className="w-6 h-6" />,
    value: "1+",
    label: "Years Experience"
  }, {
    icon: <Clock className="w-6 h-6" />,
    value: "12-16",
    label: "Days Delivery"
  }];
  
  const values = [{
    title: "Artistic Excellence",
    description: "We maintain the highest standards in every piece we create, ensuring each artwork meets our rigorous quality criteria."
  }, {
    title: "Personal Touch",
    description: "Every commission receives individual attention, with our artists working closely with clients to capture their vision."
  }, {
    title: "Timely Delivery",
    description: "We respect your timeline and ensure all projects are completed within the agreed timeframe without compromising quality."
  }];
  
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div ref={headerRef}>
              <Badge variant="secondary" className="mb-4">About HandiSketch</Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Crafting Memories Through Art
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  HandiSketch was born from a passion for transforming precious moments 
                  into timeless artistic treasures. Our team of skilled artisans combines 
                  traditional techniques with modern craftsmanship to create pieces that 
                  tell your unique story.
                </p>
                <p className="leading-relaxed">
                  From intimate family portraits to grand corporate installations, we've 
                  built our reputation on delivering exceptional quality and personalized 
                  service. Each piece is carefully crafted to capture not just the image, 
                  but the emotion and essence of the subject.
                </p>
              </div>
            </div>

            {/* Values */}
            <div ref={valuesRef} className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Our Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => <div key={index} className="flex space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <Card key={index} className="card-animate bg-card border-0 shadow-soft text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Process */}
            <Card ref={processRef} className="bg-primary text-primary-foreground shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Consultation</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        We discuss your vision, requirements, and preferences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Creation</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Our artists begin crafting your custom piece with care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Delivery</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Your finished artwork is carefully packaged and delivered
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;