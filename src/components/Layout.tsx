import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Printer, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Layout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'hover:text-primary transition-colors';
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Printer className="h-8 w-8" style={{ color: '#DD087F' }} />
              <span className="text-xl font-bold">Pixel Print Studios</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`text-sm ${isActive('/about')}`}>About</Link>
            <Link to="/services" className={`text-sm ${isActive('/services')}`}>Services</Link>
            <Link to="/products" className={`text-sm ${isActive('/products')}`}>Products</Link>
            <Link to="/testimonials" className={`text-sm ${isActive('/testimonials')}`}>Testimonials</Link>
            <Link to="/contact" className={`text-sm ${isActive('/contact')}`}>Contact</Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden container py-4 bg-background border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`text-sm ${isActive('/')}`} onClick={toggleMenu}>Home</Link>
              <Link to="/about" className={`text-sm ${isActive('/about')}`} onClick={toggleMenu}>About</Link>
              <Link to="/services" className={`text-sm ${isActive('/services')}`} onClick={toggleMenu}>Services</Link>
              <Link to="/products" className={`text-sm ${isActive('/products')}`} onClick={toggleMenu}>Products</Link>
              <Link to="/testimonials" className={`text-sm ${isActive('/testimonials')}`} onClick={toggleMenu}>Testimonials</Link>
              <Link to="/contact" className={`text-sm ${isActive('/contact')}`} onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="h-6 w-6" style={{ color: '#DD087F' }} />
                <span className="text-lg font-bold">Pixel Print Studios</span>
              </div>
              <p className="text-muted-foreground">
                Transforming ideas into stunning prints and memorable corporate gifts since 2015.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Premium Printing</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Corporate Gifting</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Design Services</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Packaging Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Print Avenue, Design District, NY 10001</li>
                <li>hello@pixelprintstudios.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Pixel Print Studios. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}