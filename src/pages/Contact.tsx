
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, PhoneCall, MapPin, Send, Calendar } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@p4consulting.com';
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=123+Business+Avenue,+New+York,+NY+10001', '_blank');
  };

  const handleBookSessionClick = () => {
    console.log("Book session clicked");
    alert("Thanks for your interest! Our booking system will be available soon.");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 text-sm font-medium rounded-full bg-accent text-primary mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch <span className="text-gradient">With Our Experts</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or ready to start working with us? Our team is here to help
                you navigate your business challenges and achieve your goals.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Our team is available Monday-Friday from 9am to 5pm</p>
                <button 
                  onClick={handleCallClick}
                  className="text-primary font-medium hover:underline transition-all"
                >
                  +123 456 7890
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Our support team will get back to you within 24 hours</p>
                <button 
                  onClick={handleEmailClick}
                  className="text-primary font-medium hover:underline transition-all"
                >
                  contact@p4consulting.com
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">123 Business Avenue, New York, NY 10001</p>
                <button 
                  onClick={handleMapClick}
                  className="text-primary font-medium hover:underline transition-all"
                >
                  View on Map
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Have a specific question or request? Fill out the form below and one of our consultants will get back to you promptly.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="strategy">Business Strategy</option>
                        <option value="financial">Financial Consulting</option>
                        <option value="management">Management Consulting</option>
                        <option value="hr">Human Resources</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your business needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-center transition-all hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
              
              <div className="bg-secondary rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to speak with a consultant directly? Schedule a free 30-minute consultation to discuss your business needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">30-Minute Consultation</h4>
                      <p className="text-muted-foreground">Free business assessment with one of our senior consultants</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleBookSessionClick}
                    className="block w-full px-6 py-3 bg-white text-primary rounded-lg font-medium text-center transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Your Session
                  </button>
                </div>
                
                <div className="mt-10 pt-6 border-t border-border">
                  <p className="font-medium mb-4">Our Availability</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
