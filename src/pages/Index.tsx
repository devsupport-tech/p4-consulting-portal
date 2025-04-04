
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import { ArrowRight, Target, ChartBar, Users, Briefcase } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Overview */}
        <ServicesOverview />
        
        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Partner with P4 for Exceptional Results
                </h2>
                <p className="text-muted-foreground text-lg">
                  At P4 Companies and Services, we bring a unique approach to business consulting that combines industry expertise, innovative thinking, and a commitment to client success.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Strategic Vision</h3>
                      <p className="text-muted-foreground">We develop clear, actionable strategies that align with your business goals and market position.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
                      <ChartBar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Data-Driven Approach</h3>
                      <p className="text-muted-foreground">Our recommendations are backed by thorough analysis and industry insights to drive informed decisions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Team</h3>
                      <p className="text-muted-foreground">Our consultants bring diverse expertise and deep industry knowledge to every client engagement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Proven Results</h3>
                      <p className="text-muted-foreground">We have a track record of delivering measurable outcomes and lasting value for our clients.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="pt-4">
                  <a 
                    href="/about" 
                    className="group inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974" 
                    alt="P4 Consulting team meeting" 
                    className="w-full h-auto opacity-0 animate-img-reveal" 
                  />
                </div>
                <div className="absolute top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-primary/95 to-blue-600/95 text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">10+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">150+</div>
                <div className="text-white/80">Clients Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">95%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">25+</div>
                <div className="text-white/80">Industries</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Contact CTA */}
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
