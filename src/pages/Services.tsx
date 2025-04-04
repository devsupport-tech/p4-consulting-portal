import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';
import ContactCTA from '@/components/ContactCTA';
import CTAButton from '@/components/CTAButton';
import { AlertCircle } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  const services = [
    {
      id: "strategy",
      title: "Business Strategy",
      tagline: "Strategic Planning",
      description: "Our strategic consulting services help you define clear business objectives, identify market opportunities, and develop comprehensive roadmaps for sustainable growth.",
      features: [
        "Comprehensive market analysis and competitive positioning",
        "Strategic planning and roadmap development",
        "Business model innovation and optimization",
        "Growth strategy and expansion planning"
      ],
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
      benefits: [
        {
          title: "Clear Strategic Direction",
          description: "Gain clarity on your organization's path forward with well-defined goals and actionable strategies."
        },
        {
          title: "Competitive Advantage",
          description: "Identify and leverage your unique strengths to differentiate your business in the marketplace."
        },
        {
          title: "Sustainable Growth",
          description: "Implement strategies that drive consistent, long-term growth and business success."
        }
      ]
    },
    {
      id: "financial",
      title: "Financial Consulting",
      tagline: "Financial Excellence",
      description: "Our financial consulting services help you optimize your financial operations, improve profitability, and make sound financial decisions to support your business goals.",
      features: [
        "Financial analysis and performance improvement",
        "Cost optimization and efficiency enhancements",
        "Financial forecasting and modeling",
        "Investment strategy and capital allocation"
      ],
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      benefits: [
        {
          title: "Improved Profitability",
          description: "Identify opportunities to increase revenue and reduce costs for enhanced financial performance."
        },
        {
          title: "Better Decision Making",
          description: "Access accurate financial insights to inform strategic business decisions."
        },
        {
          title: "Optimized Resources",
          description: "Ensure efficient allocation of financial resources to maximize return on investment."
        }
      ],
      isReversed: true
    },
    {
      id: "management",
      title: "Management Consulting",
      tagline: "Operational Excellence",
      description: "Our management consulting services focus on optimizing your organizational structure, processes, and leadership capabilities to drive operational excellence.",
      features: [
        "Organizational design and transformation",
        "Process optimization and efficiency improvement",
        "Change management and implementation support",
        "Leadership development and team effectiveness"
      ],
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
      benefits: [
        {
          title: "Enhanced Efficiency",
          description: "Streamline operations and eliminate bottlenecks to improve overall productivity."
        },
        {
          title: "Effective Leadership",
          description: "Develop strong leadership capabilities that inspire and drive high-performing teams."
        },
        {
          title: "Successful Transformation",
          description: "Navigate organizational change with minimal disruption and maximum adoption."
        }
      ]
    },
    {
      id: "hr",
      title: "Human Resources",
      tagline: "Talent Management",
      description: "Our HR consulting services help you build exceptional teams, develop effective talent management strategies, and create a positive organizational culture.",
      features: [
        "Talent acquisition and retention strategies",
        "Performance management systems",
        "Compensation and benefits optimization",
        "Employee engagement and culture development"
      ],
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      benefits: [
        {
          title: "Top Talent Acquisition",
          description: "Attract and retain high-performing professionals who drive business success."
        },
        {
          title: "Engaged Workforce",
          description: "Create a positive work environment that fosters engagement and productivity."
        },
        {
          title: "Strategic HR Alignment",
          description: "Align HR initiatives with business objectives for maximum organizational impact."
        }
      ],
      isReversed: true
    }
  ];

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && services.some(service => service.id === hash)) {
      setActiveService(hash);
      
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const generateServiceHeadings = (service: any) => (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2" id={service.id}>
        {service.title} - {service.tagline}
      </h2>
      <p className="text-lg text-muted-foreground">{service.description}</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="relative py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-gradient">Business Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto speakable">
                We offer a wide range of consulting services tailored to meet the specific
                needs of your organization and help you achieve exceptional results.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {services.map((service) => (
                  <a 
                    key={service.id}
                    href={`#${service.id}`}
                    className="bg-background px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveService(service.id);
                      const element = document.getElementById(service.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      window.history.pushState({}, '', `#${service.id}`);
                    }}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <CTAButton 
                  href="/contact" 
                  variant="primary"
                  className="group mx-auto"
                >
                  Schedule a Free Consultation
                </CTAButton>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {services.map((service, index) => (
          <article key={service.id} id={service.id} className="scroll-mt-24">
            <div className="sr-only">{generateServiceHeadings(service)}</div>
            
            <ServiceDetail 
              {...service}
            />
            
            <div className="container mb-16">
              <div className="max-w-xl mx-auto text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to enhance your {service.title.toLowerCase()} capabilities?
                </p>
                <CTAButton 
                  href="/contact" 
                  variant="primary"
                  className="group mx-auto"
                >
                  Get Started with {service.title}
                </CTAButton>
              </div>
            </div>
          </article>
        ))}
        
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-accent/50 rounded-full mb-4">
                <AlertCircle className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium">Custom Solutions</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Need a Specialized Service?</h2>
              <p className="text-muted-foreground mb-8">
                Don't see exactly what you're looking for? Our team can create customized 
                consulting solutions tailored to your specific business challenges.
              </p>
              
              <CTAButton 
                href="/contact" 
                variant="primary"
                className="group mx-auto"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact-cta');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Custom Service
              </CTAButton>
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
