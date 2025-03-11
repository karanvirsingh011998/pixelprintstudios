import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const allProducts = [
    {
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Business Cards",
      description: "Premium quality business cards with various finishes.",
      category: "printing"
    },
    {
      image: "https://images.unsplash.com/photo-1616070698578-e5e634af7e8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Corporate Gifts",
      description: "Customized gift sets for your valued clients and team.",
      category: "gifts"
    },
    {
      image: "https://images.unsplash.com/photo-1585559604830-9665c9a107af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Brochures",
      description: "Informative and eye-catching brochures for your marketing needs.",
      category: "printing"
    },
    {
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Custom Packaging",
      description: "Branded packaging solutions that enhance your product presentation.",
      category: "packaging"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Promotional Items",
      description: "Branded promotional items for events and marketing campaigns.",
      category: "gifts"
    },
    {
      image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Letterheads",
      description: "Professional letterheads that reflect your brand identity.",
      category: "printing"
    },
    {
      image: "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Corporate Notebooks",
      description: "Custom notebooks with your company logo and design.",
      category: "gifts"
    },
    {
      image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Banners & Signage",
      description: "High-quality banners and signage for events and promotions.",
      category: "printing"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">Explore our range of high-quality printed products and corporate gifts.</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 container">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList>
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="printing">Printing</TabsTrigger>
              <TabsTrigger value="gifts">Corporate Gifts</TabsTrigger>
              <TabsTrigger value="packaging">Packaging</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.map((product, index) => (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="printing" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.filter(p => p.category === "printing").map((product, index) => (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gifts" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.filter(p => p.category === "gifts").map((product, index) => (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="packaging" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.filter(p => p.category === "packaging").map((product, index) => (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", description: "We use only the highest quality materials and state-of-the-art printing technology." },
              { title: "Customization", description: "Every product can be fully customized to meet your specific requirements and brand guidelines." },
              { title: "Fast Turnaround", description: "We offer quick turnaround times without compromising on quality or attention to detail." }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative">
              <span className="relative z-10">Custom Orders</span>
              <span className="absolute bottom-0 left-0 h-3 w-24 bg-[#008ED6]/50 -z-0"></span>
            </h2>
            <p className="text-lg mb-6">
              Can't find exactly what you're looking for? We specialize in creating custom products tailored to your specific needs.
            </p>
            <p className="text-lg mb-8">
              Our team of designers and production specialists will work closely with you to bring your vision to life, 
              whether it's a unique corporate gift or a specialized printing project.
            </p>
            <Button className="bg-[#DD087F] hover:bg-[#DD087F]/90 text-white" size="lg" asChild>
              <Link to="/contact">Request a Custom Order</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 rounded-lg bg-[#FFE801]/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Custom printing" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}