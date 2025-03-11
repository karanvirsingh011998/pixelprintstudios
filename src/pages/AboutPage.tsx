import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground">Learn more about Pixel Print Studios and our journey.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative">
              <span className="relative z-10">About Pixel Print Studios</span>
              <span className="absolute bottom-0 left-0 h-3 w-24 bg-[#FFE801]/50 -z-0"></span>
            </h2>
            <p className="text-lg mb-6">
              Founded in 2015, Pixel Print Studios has been at the forefront of the printing and corporate gifting industry, 
              delivering exceptional quality and innovative solutions to businesses of all sizes.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced designers and print specialists work tirelessly to ensure that every project 
              exceeds expectations, from business cards to large-scale corporate events.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold" style={{ color: '#DD087F' }}>500+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold" style={{ color: '#008ED6' }}>1200+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold" style={{ color: '#FFE801' }}>10+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 rounded-lg bg-[#DD087F]/10 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-lg bg-[#008ED6]/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Printing workshop" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              At Pixel Print Studios, our mission is to provide exceptional printing and corporate gifting solutions that help businesses 
              make a lasting impression. We believe in the power of quality, creativity, and personalized service to transform ordinary 
              materials into extraordinary brand experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#DD087F]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#DD087F' }}>1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">We never compromise on the quality of our products and services.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-[#008ED6]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#008ED6' }}>2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">We constantly explore new techniques and materials to stay ahead.</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-[#FFE801]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#FFE801' }}>3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Service</h3>
                <p className="text-muted-foreground">We provide personalized service tailored to each client's unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
              name: "Michael Chen",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
              name: "Emily Rodriguez",
              role: "Production Manager",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
              name: "David Kim",
              role: "Client Relations",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}