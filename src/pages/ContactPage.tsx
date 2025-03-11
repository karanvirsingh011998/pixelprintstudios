import { useState } from 'react';
import { Printer, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with our team to discuss your project requirements.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-0 left-0 h-3 w-24 bg-[#008ED6]/50 -z-0"></span>
            </h2>
            <p className="text-lg mb-8">
              Have a project in mind or need a quote? Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(221, 8, 127, 0.1)', color: '#DD087F' }}>
                  <Printer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Our Studio</h4>
                  <p className="text-muted-foreground">123 Print Avenue, Design District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(0, 142, 214, 0.1)', color: '#008ED6' }}>
                  <Printer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">hello@pixelprintstudios.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 232, 1, 0.1)', color: '#FFE801' }}>
                  <Printer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your email" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Your phone number" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your company name" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="printing">Premium Printing</SelectItem>
                      <SelectItem value="corporate-gifts">Corporate Gifting</SelectItem>
                      <SelectItem value="design">Design Services</SelectItem>
                      <SelectItem value="packaging">Custom Packaging</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project" 
                    rows={4} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#DD087F] hover:bg-[#DD087F]/90 text-white"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Us</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623825884843!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Pixel Print Studios Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "What is the typical turnaround time for printing services?",
              answer: "Our standard turnaround time is 5-7 business days from approval of final design. Rush services are available for an additional fee."
            },
            {
              question: "Do you offer design services?",
              answer: "Yes, we have an in-house team of experienced designers who can help create custom designs for all your printing and corporate gifting needs."
            },
            {
              question: "What is the minimum order quantity?",
              answer: "Minimum order quantities vary by product. Please contact us for specific information about the products you're interested in."
            },
            {
              question: "Do you ship internationally?",
              answer: "Yes, we ship to most international locations. Shipping costs and delivery times vary by destination."
            },
            {
              question: "Can I see samples before placing a large order?",
              answer: "Absolutely! We offer sample kits for most of our products so you can assess the quality before committing to a larger order."
            },
            {
              question: "What file formats do you accept for printing?",
              answer: "We accept high-resolution PDF, AI, PSD, and EPS files. All files should be in CMYK color mode with at least 300 DPI resolution."
            }
          ].map((faq, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}