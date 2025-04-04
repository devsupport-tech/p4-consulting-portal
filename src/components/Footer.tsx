
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone, Calendar, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'mailto:contact@p4consulting.com';
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'tel:+1234567890';
  };

  const handleBookConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Book consultation clicked");
    alert("Thanks for your interest! Our booking system will be available soon.");
  };
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    console.log("Newsletter subscription:", email);
    alert(`Thank you for subscribing with: ${email}`);
    form.reset();
  };
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-foreground inline-block">
              <span className="text-primary">P4</span> Consulting
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Delivering innovative business solutions 
              that transform organizations and drive sustainable growth.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#"
                onClick={handleEmailClick}
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="#"
                onClick={handlePhoneClick}
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <Link 
                to="/contact" 
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Contact us"
              >
                <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
            
            {/* Newsletter Signup - Footer CTA */}
            <div className="pt-4 mt-4 border-t border-border/50">
              <h3 className="font-semibold text-lg mb-3">Get Business Insights</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to receive our latest business tips and resources.
              </p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all flex items-center"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>123 Business Avenue</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="mt-4">
                <a 
                  href="#" 
                  onClick={handlePhoneClick}
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <a 
                  href="#" 
                  onClick={handleEmailClick}
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  contact@p4consulting.com
                </a>
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  onClick={handleBookConsultationClick}
                  className="flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} P4 Companies and Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
