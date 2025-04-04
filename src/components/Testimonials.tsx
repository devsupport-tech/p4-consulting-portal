
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "P4 Consulting delivered exceptional results that exceeded our expectations. Their strategic insights transformed our operations and accelerated our growth.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc."
  },
  {
    quote: "Working with P4 was a game-changer for our organization. Their tailored approach and deep industry knowledge helped us navigate complex challenges with confidence.",
    author: "Michael Chen",
    position: "COO",
    company: "Global Innovations"
  },
  {
    quote: "The team at P4 brings unparalleled expertise and a fresh perspective. Their strategic recommendations created immediate impact and long-term value.",
    author: "Emily Rodriguez",
    position: "VP of Operations",
    company: "Nexus Group"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-rotate testimonials
    timerRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Discover how our consulting expertise has helped organizations
            achieve remarkable results and sustainable growth.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-12 -translate-y-12 text-primary/10 select-none">
            <svg width="120" height="120" viewBox="0 0 48 48" fill="currentColor">
              <path d="M21,38H9c-1.1,0-2-0.9-2-2V20c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v16C21,37.1,20.1,38,21,38z M41,38H29 c-1.1,0-2-0.9-2-2V20c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v16C41,37.1,40.1,38,41,38z" />
            </svg>
          </div>
          
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="relative h-[280px] md:h-[240px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 flex flex-col justify-between h-full",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0" 
                      : index < activeIndex 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  )}
                >
                  <p className="text-lg md:text-xl text-foreground font-medium italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  )}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
