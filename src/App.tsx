import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ProductsPage from '@/pages/ProductsPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/pixelprintstudios/about" element={<AboutPage />} />
        <Route path="/pixelprintstudios/services" element={<ServicesPage />} />
        <Route path="/pixelprintstudios/products" element={<ProductsPage />} />
        <Route path="/pixelprintstudios/testimonials" element={<TestimonialsPage />} />
        <Route path="/pixelprintstudios/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;