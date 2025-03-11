import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(221, 8, 127, 0.8), rgba(0, 142, 214, 0.8)), url('https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center/cover`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Pixel Print Studios
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforming ideas into stunning prints and memorable corporate gifts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#DD087F] hover:bg-[#DD087F]/90 text-white"
              asChild
            >
              <Link to="/contact">
                Get a Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to Pixel Print Studios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your premier destination for high-quality printing and corporate gifting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted/30 p-8 rounded-lg text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">Explore Our Services</h3>
            <p className="mb-6 text-muted-foreground">Discover our comprehensive range of printing and corporate gifting services.</p>
            <Button asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-lg text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">Browse Our Products</h3>
            <p className="mb-6 text-muted-foreground">Explore our catalog of high-quality printed products and corporate gifts.</p>
            <Button asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-lg text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-muted-foreground">Have a project in mind? Contact us for a quote or to discuss your requirements.</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}