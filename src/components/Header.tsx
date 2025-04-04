
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 backdrop-blur-card shadow-md' : 'py-5 bg-transparent'
      )}
      role="banner"
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary relative overflow-hidden group flex items-center"
          onClick={closeMenu}
          aria-label="P4 Consulting - Home"
        >
          <span className="mr-1 text-foreground">P4</span>
          <span className="relative">
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Consulting
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-base font-medium relative transition-colors duration-300 hover:text-primary',
                'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100',
                location.pathname === link.path ? 'text-primary after:scale-x-100' : 'text-foreground'
              )}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">+123 456 7890</span>
          </button>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg hover:brightness-110 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            <span>Book a Call</span>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center space-y-8 py-8" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-medium transition-colors duration-300 hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-foreground'
              )}
              onClick={closeMenu}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col space-y-4 pt-6 w-full items-center">
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center gap-2 w-full max-w-xs px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+123 456 7890</span>
            </button>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full max-w-xs px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:brightness-110 active:scale-95"
              onClick={closeMenu}
            >
              <Calendar className="h-5 w-5" />
              <span>Book a Call</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
