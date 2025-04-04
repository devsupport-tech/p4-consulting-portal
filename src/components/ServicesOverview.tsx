
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, ChartBar, Users, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
};

const ServiceCard = ({ title, description, icon, index, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      to={link}
      className={cn(
        "group relative p-8 bg-white rounded-xl shadow-sm border border-border h-full transition-all duration-300",
        "hover:shadow-lg hover:border-primary/20 hover:translate-y-[-4px]",
        "opacity-0"
      )}
      style={{
        animationName: 'fade-in-up',
        animationDuration: '0.8s',
        animationDelay: `${index * 100 + 200}ms`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary/10">
          {icon}
        </div>
        <ChevronRight 
          className={cn(
            "h-5 w-5 text-primary transform transition-transform duration-300", 
            isHovered ? "translate-x-0" : "-translate-x-2 opacity-0"
          )} 
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      title: "Business Strategy",
      description: "Develop comprehensive business strategies that align with your goals and market position.",
      icon: <Target className="h-6 w-6" />,
      link: "/services#strategy"
    },
    {
      title: "Financial Consulting",
      description: "Optimize financial processes and maximize profitability with our expert financial guidance.",
      icon: <ChartBar className="h-6 w-6" />,
      link: "/services#financial"
    },
    {
      title: "Management Consulting",
      description: "Enhance operational efficiency and leadership effectiveness through tailored solutions.",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/services#management"
    },
    {
      title: "Human Resources",
      description: "Build exceptional teams and develop talent management strategies for organizational success.",
      icon: <Users className="h-6 w-6" />,
      link: "/services#hr"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Business Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We offer a wide range of specialized consulting services designed to address 
            your most complex business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 opacity-0 animate-fade-in animate-delay-500">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Services
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
