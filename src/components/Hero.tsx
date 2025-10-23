import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/imgNU/hero-portrait.jpg";
import HeroSection1 from "@/assets/HeroSection1.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
    {/* Sketch background pattern */}
    <div className="absolute inset-0 opacity-30 bg-[transpar#800080] bg-slate-200"></div>

    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight text-animate-1"
              style={{
                fontFamily: '"Oswald", "Oswald Placeholder", sans-serif',
                letterSpacing: '-0.03em'
              }}>
              Artistry in Every
              <span className="block text-primary-accent text-animate-2">Stroke</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg text-animate-3">
              Transform your memories into timeless art. Custom portraits, wooden crafts,
              and personalized gifts crafted by skilled artisans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{
            animationDelay: '0.7s',
            animationFillMode: 'both'
          }}>

            {/* Schedule a Call booking */}
            <a
              href="https://calendly.com/handisketch959/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 btn-animate">
                Schedule a Call
              </Button>
            </a>


            {/* //Download Catalogue */}
            <a href="/catalogue.pdf" download>
              <Button variant="outline" size="lg" className="text-lg px-8 btn-animate">
                Download Catalogue
              </Button>
            </a>

          </div>

          <div className="flex items-center space-x-8 text-sm text-muted-foreground animate-slide-up" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"></div>
              <span>Custom Portraits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" style={{
                animationDelay: '0.5s'
              }}></div>
              <span>Wooden Arts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" style={{
                animationDelay: '1s'
              }}></div>
              <span>Personalized Gifts</span>
            </div>
          </div>
        </div>

        {/* Right Content - Featured Artwork */}
        <div className="relative animate-slide-in-right">
          <div className="relative animate-float inline-block">
            <img
              src={HeroSection1}
              alt="Featured custom portrait artwork"
              className="
             w-[700px] h-[700px] 
             md:w-[600px] md:h-[600px] 
             sm:w-[400px] sm:h-[400px] 
             rounded-2xl shadow-strong object-cover
             transition-all duration-700 ease-in-out"
            />
            <div
              className="absolute bottom-6 right-6 bg-card p-6 rounded-2xl shadow-medium border border-border animate-scale-in"
              style={{
                animationDelay: "1.2s",
                animationFillMode: "both",
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary number-animate">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>;
};
export default Hero;