import React, { useState } from 'react';
import { Section, Input, Button, Card, MotionPage, FadeIn } from '../components/ui';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MotionPage>
    <Section>
      <div className="grid lg:grid-cols-2 gap-16">
        <FadeIn>
          <h1 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Get in touch</h1>
          <p className="text-lg text-muted mb-12">
            Ready to transform your organization? Our team is ready to help you architect your AI strategy.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="text-foreground mt-1 mr-4" size={20} />
              <div>
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Email</h3>
                <p className="text-muted mt-1">enterprise@super-ai.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-foreground mt-1 mr-4" size={20} />
              <div>
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Phone</h3>
                <p className="text-muted mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-foreground mt-1 mr-4" size={20} />
              <div>
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Headquarters</h3>
                <p className="text-muted mt-1">
                  101 Innovation Dr.<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <Card className="p-8 shadow-none border-border bg-black">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Work Email" type="email" placeholder="jane@company.com" />
              <Input label="Company" placeholder="Acme Corp" />
              <div className="mb-4">
                 <label className="block text-xs font-mono font-medium text-muted mb-2 uppercase tracking-wide">Inquiry Type</label>
                 <div className="relative">
                   <select className="w-full rounded-md border border-border bg-background shadow-sm focus:border-white focus:ring-1 focus:ring-white sm:text-sm p-3 transition-colors duration-200 text-foreground outline-none appearance-none">
                      <option>Enterprise Sales</option>
                      <option>Partnership</option>
                      <option>Support</option>
                      <option>Press</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   </div>
                 </div>
              </div>
              <Input label="Message" rows={4} placeholder="Tell us about your project..." />
              <Button className="w-full" variant="primary">Send Message</Button>
            </form>
          ) : (
            <div className="text-center py-12">
               <div className="h-12 w-12 bg-neutral-900 text-foreground rounded-full flex items-center justify-center mx-auto mb-6 border border-border">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Message Sent</h3>
               <p className="text-muted mb-8">Thank you for contacting us. A member of our team will reach out shortly.</p>
               <Button variant="secondary" onClick={() => setSubmitted(false)}>Send another</Button>
            </div>
          )}
        </Card>
      </div>
    </Section>
    </MotionPage>
  );
};