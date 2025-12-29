import React, { useState } from 'react';
import { Section, Input, Button, Card } from '../components/ui';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in touch</h1>
          <p className="text-xl text-slate-600 mb-12">
            Ready to transform your organization? Our team is ready to help you architect your AI strategy.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">enterprise@super-ai.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-slate-900">Headquarters</h3>
                <p className="text-slate-600">
                  101 Innovation Dr.<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8 shadow-lg border-slate-200">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
              </div>
              <Input label="Work Email" type="email" placeholder="jane@company.com" />
              <Input label="Company" placeholder="Acme Corp" />
              <div className="mb-4">
                 <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                 <select className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3 border">
                    <option>Enterprise Sales</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Press</option>
                 </select>
              </div>
              <Input label="Message" rows={4} placeholder="Tell us about your project..." />
              <Button className="w-full" variant="primary">Send Message</Button>
            </form>
          ) : (
            <div className="text-center py-12">
               <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
               <p className="text-slate-600">Thank you for contacting us. A member of our team will reach out shortly.</p>
               <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send another</Button>
            </div>
          )}
        </Card>
      </div>
    </Section>
  );
};
