import { Printer, Gift, Sun, ChevronRight, Palette, Package, FileText, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Printer className="h-10 w-10" />,
      title: "Premium Printing",
      description: "High-quality printing services for all your business needs, from business cards to large format banners.",
      color: '#DD087F'
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Corporate Gifting",
      description: "Customized corporate gifts that leave a lasting impression on clients and employees.",
      color: '#008ED6'
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: "Design Services",
      description: "Professional design services to ensure your printed materials stand out from the competition.",
      color: '#FFE801'
    }
  ];

  const additionalServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Identity",
      description: "Comprehensive brand identity development including logos, color schemes, and brand guidelines."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Custom Packaging",
      description: "Bespoke packaging solutions that enhance your product presentation and brand experience."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Marketing Materials",
      description: "Effective marketing collateral including brochures, flyers, and promotional materials."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fulfillment Services",
      description: "End-to-end fulfillment services including storage, packaging, and distribution."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">Discover our comprehensive range of printing and corporate gifting services.</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-full w-fit" style={{ 
                  backgroundColor: `${service.color}10`,
                  color: service.color
                }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button 
                  variant="link" 
                  className="p-0 font-semibold"
                  style={{ color: service.color }}
                  asChild
                >
                  <Link to="/contact">
                    Request a quote <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "We begin with a thorough consultation to understand your needs and objectives." },
              { step: "2", title: "Design", description: "Our design team creates concepts that align with your brand and project requirements." },
              { step: "3", title: "Production", description: "We use state-of-the-art equipment to produce high-quality materials." },
              { step: "4", title: "Delivery", description: "Your finished products are carefully packaged and delivered on time." }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-primary/20"></div>
                )}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex gap-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-muted/50">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized quote.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">
              Contact Us Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}