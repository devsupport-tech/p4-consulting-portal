
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ContactCTA from '@/components/ContactCTA';
import CTAButton from '@/components/CTAButton';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We Help Businesses <span className="text-gradient">Achieve Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                P4 Companies and Services is a premier business consulting firm dedicated to
                helping organizations navigate challenges, seize opportunities, and achieve
                sustainable growth.
              </p>
              
              {/* Hero CTA */}
              <div className="mt-12">
                <CTAButton 
                  href="/services" 
                  variant="primary"
                  className="group mx-auto"
                >
                  Explore Our Services
                </CTAButton>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* About Content */}
        <AboutSection />
        
        {/* Mid-page CTA */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-muted-foreground mb-8">
                Take the first step toward business transformation with P4 Companies and Services.
                Our expert consultants are ready to help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton 
                  href="/services" 
                  variant="primary"
                  className="group"
                >
                  View Our Services
                </CTAButton>
                <CTAButton 
                  href="/contact" 
                  variant="outline"
                >
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
