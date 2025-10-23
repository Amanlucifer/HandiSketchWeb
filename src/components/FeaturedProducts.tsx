import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import BlackWhitePortrait from "@/assets/BlackWhitePortrait.png";
import VibrantColoredPortrait from "@/assets/VibrantColoredPortrait.png";
import SoftWatercolorPortrait from "@/assets/SoftWatercolorPortrait.png";
import PersonalizedCoupleArtwork from "@/assets/PersonalizedCoupleArtwork.png";
import RealisticDigitalPortrait from "@/assets/RealisticDigitalPortrait.png";
import StylizedSemiRealisticArt from "@/assets/StylizedSemiRealisticArt.png";
import DynamicAnimalDigitalIllustration from "@/assets/DynamicAnimalDigitalIllustration.png";
import CompactHandiArtDigitalPrint from "@/assets/CompactHandiArtDigitalPrint.png";
import VibrantCanvasAbstractArt from "@/assets/VibrantCanvasAbstractArt.png";
import MiniCanvasPortrait from "@/assets/MiniCanvasPortrait.png";
import ClassicOilPaintedPortrait from "@/assets/ClassicOilPaintedPortrait.png";

const FeaturedProducts = () => {
  const headerRef = useScrollAnimation();
  const productsRef = useStaggeredAnimation(150);
  
  const products = [{
    id: 1,
    title: "Elegant Black & White Portrait",
    description: "Timeless hand-drawn portrait capturing personality with exquisite detail, perfect for classic decor.",
    image: BlackWhitePortrait,
    price: "From ₹12,999",
    category: "Black and White Art",
    featured: false
  }, {
    id: 2,
    title: "Vibrant Colored Portrait",
    description: "Hand-drawn portrait with vibrant colored pencils, capturing lifelike details and personality.",
    image: VibrantColoredPortrait,
    price: "From ₹7,499",
    category: "Color Pencil Art",
    featured: false
  }, 
  // {
  //   id: 3,
  //   title: "Personalized Couple Artwork",
  //   description: "Custom couple portrait made to cherish special moments and shared memories.",
  //   image: PersonalizedCoupleArtwork,
  //   price: "From ₹16,999",
  //   category: "Water Color Art",
  //   featured: false
  // },
   {
    id: 4,
    title: "Realistic Digital Portrait",
    description: "High-detail digital portrait capturing lifelike features with smooth, precise artistry.",
    image: SoftWatercolorPortrait,
    price: "From ₹24,999",
    category: "Couple Portraits",
    featured: false
  },
   {
    id: 5,
    title: "Realistic Digital Portrait",
    description: "High-detail digital portrait capturing lifelike features with smooth, precise artistry.",
    image: RealisticDigitalPortrait,
    price: "From ₹8,999",
    category: "Digital Art - Realistic",
    featured: false
  },
   {
    id: 6,
    title: "Stylized Semi-Realistic Art",
    description: "Artistic digital portrait balancing detail and creativity with semi-realistic techniques.",
    image: StylizedSemiRealisticArt,
    price: "From ₹4,999",
    category: "Digital Art - semi-realistic",
    featured: false
  }, {
    id: 7,
    title: "Dynamic Animal Digital Illustration",
    description: "Bold and energetic digital art representing animals with vivid colors and details.",
    image: DynamicAnimalDigitalIllustration,
    price: "From ₹15,999",
    category: "Digital Art - Animal",
    featured: false
  }, {
    id: 8,
    title: "Compact Handi Art Digital Print",
    description: "Miniature digital illustration showcasing intricate Handi art techniques in vibrant colors.",
    image: CompactHandiArtDigitalPrint,
    price: "From ₹6,999",
    category: "Mini Digital Illustration",
    featured: false
  }, {
    id: 9,
    title: "Vibrant Canvas Abstract Art",
    description: "Bold abstract canvas painting with dynamic colors and shapes for modern decor.",
    image: VibrantCanvasAbstractArt,
    price: "From ₹5,999",
    category: "Canvas Art",
    featured: false
  }, {
    id: 10,
    title: "Mini Canvas Portrait",
    description: "Small-scale canvas portrait capturing intimate details with vibrant colors and fine brushwork.",
    image: MiniCanvasPortrait,
    price: "From ₹18,999",
    category: "Mini-sized canvas art",
    featured: false
  },{
    id: 10,
    title: "Classic Oil Painted Portrait",
    description: "Rich oil portrait with deep textures and vibrant colors showcasing timeless artistry.",
    image: ClassicOilPaintedPortrait,
    price: "From ₹18,999",
    category: "Oil Paint Portrait",
    featured: false
  }];
  
  return <section id="products" className="py-20 bg-sketch-light">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular artworks and custom creations, each piece 
            crafted with attention to detail and artistic excellence.
          </p>
        </div>

        <div ref={productsRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => <Card key={product.id} className="group card-animate border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img src={product.image} alt={product.title} className="w-full object-contain bg-white group-hover:scale-105 transition-transform duration-300" />
                  {product.featured && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>}
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-background/90 text-foreground">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <Button size="sm" variant="outline" className="btn-animate">
                      View Details
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-animate">
            View All Products
          </Button>
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;