import React, { useState } from 'react';
import { Section, Input, Button, Card, MotionPage, FadeIn, Hero, Badge } from '../components/ui';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MotionPage>
    <Hero 
      badge="Contact Us"
      title="Get in Touch"
      subtitle="Whether you are a university looking to partner or a student seeking an internship, we are here to help."
      className="text-center pb-20 md:pb-40"
    />
    
    <Section className="relative z-10 pt-0 mt-0 md:-mt-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <FadeIn className="space-y-8 lg:pt-12">
          <Card className="p-8 bg-neutral-900/50 hover:border-white/10">
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-8">
                <div className="flex items-start">
                <div className="p-3 bg-neutral-900 rounded-lg border border-white/10 text-accent mr-4">
                    <Mail size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-muted">info@superaip.com</p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="p-3 bg-neutral-900 rounded-lg border border-white/10 text-accent mr-4">
                    <Phone size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-muted">
                      +91 85959 12427<br/>
                      +91 85959 12425
                    </p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="p-3 bg-neutral-900 rounded-lg border border-white/10 text-accent mr-4">
                    <MapPin size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Registered Office</h3>
                    <p className="text-muted text-sm leading-relaxed">
                    Super AI Polaris Pvt. Ltd.<br />
                    Taj Vivanta Hotel, Upper Ground Floor,<br />
                    Sector-21, Metro Station Complex,<br />
                    Dwarka, New Delhi, Delhi, India – 110075
                    </p>
                </div>
                </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-accent/5 border-accent/20">
             <h4 className="font-bold text-foreground mb-2">CIN</h4>
             <p className="text-sm text-muted font-mono">U72900DL2020PTC372592</p>
          </Card>
        </FadeIn>

        <Card className="p-8 md:p-10 shadow-2xl bg-[#050505] border-white/10">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                 <h3 className="text-2xl font-bold text-foreground">Send us a message</h3>
                 <p className="text-muted text-sm mt-2">We typically respond within 24 hours.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Email" type="email" placeholder="jane@college.edu" />
              <Input label="Institution / Organization" placeholder="University Name" />
              <div className="mb-6">
                 <label className="block text-xs font-mono font-bold text-muted mb-2 uppercase tracking-widest">Inquiry Type</label>
                 <div className="relative">
                   <select className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground outline-none appearance-none">
                      <option>University Partnership</option>
                      <option>Internship Inquiry</option>
                      <option>Faculty Development</option>
                      <option>Corporate Training</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   </div>
                 </div>
              </div>
              <Input label="Message" rows={4} placeholder="Tell us about your requirements..." />
              <Button className="w-full" variant="gold">Send Message</Button>
            </form>
          ) : (
            <div className="text-center py-20">
               <div className="h-16 w-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/50">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <h3 className="text-2xl font-bold text-foreground mb-4">Message Received</h3>
               <p className="text-muted mb-10 max-w-sm mx-auto">Thank you for contacting Super AI Polaris. A member of our team will review your inquiry and reach out shortly.</p>
               <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
            </div>
          )}
        </Card>
      </div>
    </Section>
    </MotionPage>
  );
};