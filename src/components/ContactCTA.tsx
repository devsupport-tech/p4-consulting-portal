
import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactCTA = () => {
  const [hoverState, setHoverState] = useState({
    consultation: false,
    phone: false
  });
  
  // Function to handle consultation scheduling
  const handleScheduleConsultation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // In a real implementation, this would open a scheduling modal or redirect to a form
    console.log("Schedule consultation clicked");
    toast.success("Thanks for your interest!", {
      description: "Our scheduling system will be available soon."
    });
  };

  // Function to handle phone call
  const handlePhoneCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = 'tel:+1234567890';
  };

  return (
    <section 
      className="relative py-20 overflow-hidden" 
      id="contact-cta"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)/90) 0%, hsl(225, 100%, 60%)/90 100%)",
      }}
    >
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069')] bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ 
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-out" 
        }}
      ></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-300/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-white/20 text-white mb-4 animate-fade-in">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Partner with P4 Companies and Services to unlock your organization's
            full potential. Our team of experts is ready to guide you through your
            next phase of growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <a
              href="#"
              onClick={handleScheduleConsultation}
              onMouseEnter={() => setHoverState({...hoverState, consultation: true})}
              onMouseLeave={() => setHoverState({...hoverState, consultation: false})}
              className={cn(
                "group px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all w-full sm:w-auto relative overflow-hidden",
                "bg-white text-primary hover:text-white"
              )}
              aria-label="Schedule a free business consultation"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary transform origin-left 
                transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Consultation
                <ArrowRight className={cn(
                  "ml-2 h-4 w-4 transform transition-transform",
                  hoverState.consultation ? "translate-x-1" : ""
                )} />
              </span>
            </a>
            <a
              href="#"
              onClick={handlePhoneCall}
              onMouseEnter={() => setHoverState({...hoverState, phone: true})}
              onMouseLeave={() => setHoverState({...hoverState, phone: false})}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-colors hover:bg-white/10 flex items-center justify-center w-full sm:w-auto",
                "backdrop-blur-sm border border-white/30 text-white"
              )}
              aria-label="Call P4 Consulting at (234) 567-890"
            >
              <PhoneCall className={cn(
                "mr-2 h-4 w-4 transform transition-transform",
                hoverState.phone ? "rotate-12" : ""
              )} />
              Call Us: (234) 567-890
            </a>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <p className="text-white/80 mb-4">Trusted by businesses across industries</p>
            <div className="flex flex-wrap justify-center gap-8">
              <span className="text-white/70 font-medium hover:text-white transition-colors">Enterprise Co.</span>
              <span className="text-white/70 font-medium hover:text-white transition-colors">GrowthTech</span>
              <span className="text-white/70 font-medium hover:text-white transition-colors">FutureFinance</span>
              <span className="text-white/70 font-medium hover:text-white transition-colors">InnovateIQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
