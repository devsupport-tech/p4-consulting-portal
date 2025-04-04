
import { Check, CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTAButton from './CTAButton';

type ServiceDetailProps = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageSrc: string;
  benefits: { title: string; description: string }[];
  isReversed?: boolean;
};

const ServiceDetail = ({ 
  id, 
  title, 
  tagline, 
  description, 
  features, 
  imageSrc, 
  benefits,
  isReversed = false
}: ServiceDetailProps) => {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 items-center",
          isReversed && "md:grid-flow-dense"
        )}>
          <div className={cn(
            "space-y-6",
            isReversed && "md:col-start-2"
          )}>
            <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary">
              {tagline}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Inline CTA */}
            <div className="pt-4">
              <CTAButton 
                href="/contact" 
                variant="primary"
                className="group mt-2"
              >
                Learn More About {title}
              </CTAButton>
            </div>
          </div>
          
          <div className={cn(
            "relative",
            isReversed && "md:col-start-1"
          )}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-auto opacity-0 animate-img-reveal" 
              />
            </div>
            <div className="absolute top-4 right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-sm border border-border h-full"
                style={{
                  opacity: 0,
                  animationName: 'fade-in-up',
                  animationDuration: '0.8s',
                  animationDelay: `${index * 100 + 200}ms`,
                  animationFillMode: 'forwards',
                  animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                <h4 className="text-lg font-semibold mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
