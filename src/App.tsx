
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEOStructuredData from "./components/SEOStructuredData";

// Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Set page-specific SEO data
  let seoProps = {
    type: 'webpage' as const,
    title: 'P4 Companies and Services - Business Consulting',
    description: 'Premium business consulting services for strategy, finance, and management.',
  };
  
  // Update SEO data based on current route
  if (location.pathname === '/about') {
    seoProps = {
      ...seoProps,
      title: 'About P4 Companies and Services - Our Story & Expertise',
      description: 'Learn about P4 Companies and Services, our mission, values, and the expert team behind our business consulting solutions.',
    };
  } else if (location.pathname === '/services') {
    seoProps = {
      ...seoProps,
      title: 'Business Consulting Services - P4 Companies and Services',
      description: 'Explore our comprehensive business consulting services including strategy development, financial consulting, and management solutions.',
    };
  } else if (location.pathname === '/contact') {
    seoProps = {
      ...seoProps,
      title: 'Contact P4 Companies and Services - Get Expert Business Consulting',
      description: 'Connect with our business consulting experts. Schedule a consultation, request a service, or ask questions about how we can help your business grow.',
    };
  }
  
  // Set page title
  useEffect(() => {
    document.title = seoProps.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoProps.description);
    }
  }, [location.pathname, seoProps.title, seoProps.description]);
  
  return (
    <>
      <SEOStructuredData {...seoProps} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
