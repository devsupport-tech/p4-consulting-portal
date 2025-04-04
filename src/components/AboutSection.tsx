
import { CheckCircle, Target, Users, Briefcase, ChartBar } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, delivering outcomes that exceed expectations.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Integrity",
      description: "We operate with unwavering integrity, building trust through honesty and ethical business practices.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Innovation",
      description: "We embrace innovation and creative thinking to develop unique solutions for complex challenges.",
      icon: <ChartBar className="h-6 w-6" />
    },
    {
      title: "Partnership",
      description: "We foster collaborative partnerships with our clients, working together toward shared success.",
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <div className="space-y-24">
      {/* Company Overview */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Business Excellence Through Strategic Partnership
            </h2>
            <p className="text-muted-foreground text-lg">
              P4 Companies and Services was founded with a vision to transform how businesses navigate complex challenges and seize opportunities. For over a decade, we've partnered with organizations across industries to deliver innovative solutions that drive sustainable growth.
            </p>
            <p className="text-muted-foreground">
              Our team of experienced consultants brings diverse expertise and a collaborative approach to every engagement. We're committed to understanding your unique needs and developing tailored strategies that align with your business objectives.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
                alt="P4 Consulting team" 
                className="w-full h-auto opacity-0 animate-img-reveal" 
              />
            </div>
            <div className="absolute top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower organizations through strategic guidance and innovative solutions that drive sustainable growth, operational excellence, and lasting impact. We are committed to delivering exceptional value by understanding our clients' unique challenges and leveraging our expertise to transform obstacles into opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the trusted partner of choice for businesses seeking transformative growth and operational excellence. We envision a future where our collaborative approach and innovative methodologies set new standards in the consulting industry, creating lasting positive change for our clients and their stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
            Our Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Values</h2>
          <p className="text-lg text-muted-foreground">
            Our values define how we work with our clients and each other, 
            guiding every decision and interaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className={cn(
                "p-8 bg-white rounded-xl shadow-sm border border-border h-full",
                "opacity-0"
              )}
              style={{
                animationName: 'fade-in-up',
                animationDuration: '0.8s',
                animationDelay: `${index * 100 + 200}ms`,
                animationFillMode: 'forwards',
                animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent text-primary mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Team */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
              Our Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet our experienced team of consultants who bring diverse expertise 
              and a passion for helping businesses succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((person, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 70}.jpg`} 
                    alt="Team member" 
                    className="w-full h-80 object-cover object-center transform transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {index === 0 ? "Emily Johnson" : index === 1 ? "Michael Chen" : "Sarah Rodriguez"}
                  </h3>
                  <p className="text-primary font-medium">
                    {index === 0 ? "CEO & Founder" : index === 1 ? "Chief Strategic Officer" : "Financial Consultant"}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    {index === 0 
                      ? "Emily brings over 20 years of experience in strategic consulting and business transformation." 
                      : index === 1 
                        ? "Michael specializes in operational excellence and organizational development." 
                        : "Sarah is an expert in financial restructuring and growth strategies."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
