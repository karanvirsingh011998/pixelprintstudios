import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "Pixel Print Studios delivered exceptional quality for our corporate event materials. Their attention to detail and quick turnaround time exceeded our expectations.",
      project: "Corporate Event Materials"
    },
    {
      name: "Michael Chen",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "The corporate gifts we ordered were a huge hit with our clients. The customization options and premium quality made our brand stand out.",
      project: "Corporate Gift Sets"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Designs Co.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "As a design agency, we have high standards for print quality. Pixel Print Studios consistently delivers exceptional results that impress our clients.",
      project: "Marketing Materials"
    },
    {
      name: "David Wilson",
      company: "Startup Ventures",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "Working with Pixel Print Studios has been a game-changer for our startup. Their business cards and brochures helped us make a professional first impression.",
      project: "Business Cards & Brochures"
    },
    {
      name: "Jennifer Lee",
      company: "Retail Innovations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "The custom packaging solutions provided by Pixel Print Studios have significantly enhanced our product presentation and customer experience.",
      project: "Custom Packaging"
    },
    {
      name: "Robert Martinez",
      company: "Event Management Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      quote: "The banners and signage created for our corporate events were of exceptional quality and delivered on time, even with our tight deadlines.",
      project: "Event Signage"
    }
  ];

  const featuredTestimonials = testimonials.slice(0, 3);
  
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">Hear what our clients have to say about their experience working with us.</p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#FFE801]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-[#FFE801]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Innovations Inc.",
              description: "How we helped Tech Innovations create a cohesive brand identity across all their printed materials and corporate gifts.",
              image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              title: "Global Solutions",
              description: "Creating custom corporate gift packages that helped Global Solutions strengthen client relationships.",
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              title: "Retail Innovations",
              description: "Developing premium packaging solutions that enhanced Retail Innovations' product presentation and customer experience.",
              image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          ].map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{caseStudy.description}</p>
                <Button variant="outline" size="sm" className="w-full">Read Case Study</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Quality?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and discover how our printing and corporate gifting solutions can help your business make a lasting impression.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}