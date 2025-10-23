import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="bg-charcoal py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="brand-text animate-slide-up font-extrabold">
              HANDISKETCH
            </h2>
          </div>
          {/* <div className="flex items-center justify-center space-x-2 mb-6 animate-slide-up" style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            <div className="w-6 h-6 bg-primary-accent rounded-lg flex items-center justify-center animate-bounce-gentle">
              <span className="text-charcoal font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-primary-accent">HandiSketch</span>
          </div> */}
          <p className="text-center text-primary-accent/80 text-sm animate-slide-up" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            © 2025 HandiSketch. All rights reserved. Crafting memories through art.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;