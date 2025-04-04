
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.3;
      imageRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state for staggered animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-background min-h-[90vh] flex flex-col justify-center">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 top-1/3 right-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bottom-0 left-1/3 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          ref={imageRef}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069')] bg-cover bg-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            Business Consulting Excellence
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            Strategic Solutions for 
            <div className="relative inline-block mx-2">
              <span className="text-gradient relative">Business Growth</span>
              <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 origin-left transition-transform duration-1000 delay-1000" style={{ transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)' }}></div>
            </div>
          </h1>
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            P4 Companies and Services transforms businesses through expert consulting,
            strategic planning, and innovative solutions tailored to your unique challenges.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            <Link
              to="/services"
              className="group relative px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center transition-all hover:brightness-110 overflow-hidden"
            >
              <span className="relative z-10 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 hover:bg-secondary hover:scale-105 active:scale-95"
            >
              About Us
            </Link>
          </div>
          
          {/* Scroll down indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="#services" 
              className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="mb-2">Scroll to learn more</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-[10%] w-12 h-12 rounded-full border border-primary/30 animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-2/3 right-[15%] w-8 h-8 rounded-full border border-primary/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-[20%] w-16 h-16 rounded-full border border-primary/10 animate-pulse" style={{ animationDuration: '5s' }}></div>
    </section>
  );
};

export default HeroSection;
