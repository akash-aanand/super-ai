import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Button, CheckList } from '../components/ui';
import { SERVICES_DATA } from '../data';
import { Layers, ArrowRight, Zap, GraduationCap, Users } from 'lucide-react';

// Main Services Overview Page
export const ServicesMain = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Section className="pb-8">
         <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">Comprehensive solutions designed to integrate artificial intelligence into the core of your organization.</p>
         </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8">
           {/* Service 1 */}
           <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6"><Zap /></div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Learning Systems</h2>
                 <p className="text-slate-600 mb-6">Adaptive LMS platforms that evolve with your workforce.</p>
                 <Button to="/services/learning-systems" variant="outline">Learn more</Button>
              </div>
              <div className="flex-1 h-64 w-full bg-slate-100 rounded-xl overflow-hidden relative">
                 <img src="https://picsum.photos/seed/learn/800/400" className="object-cover w-full h-full opacity-90" alt="Learning" />
              </div>
           </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                 <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6"><GraduationCap /></div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Educational Tech Stack</h2>
                 <p className="text-slate-600 mb-6">The infrastructure backbone for modern universities and ed-tech startups.</p>
                 <Button to="/services/edtech" variant="outline">Learn more</Button>
              </div>
              <div className="flex-1 h-64 w-full bg-slate-100 rounded-xl overflow-hidden relative">
                 <img src="https://picsum.photos/seed/tech/800/400" className="object-cover w-full h-full opacity-90" alt="EdTech" />
              </div>
           </div>

           {/* Service 3 */}
           <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6"><Users /></div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Collaborative Success</h2>
                 <p className="text-slate-600 mb-6">Strategic consulting to ensure your AI adoption sticks.</p>
                 <Button to="/services/collaborative-success" variant="outline">Learn more</Button>
              </div>
              <div className="flex-1 h-64 w-full bg-slate-100 rounded-xl overflow-hidden relative">
                 <img src="https://picsum.photos/seed/collab/800/400" className="object-cover w-full h-full opacity-90" alt="Collaboration" />
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

// Dynamic Service Detail Page
export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? SERVICES_DATA[id] : null;

  if (!data) return <div className="p-20 text-center">Service not found</div>;

  return (
    <>
      <section className="bg-slate-900 py-20 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="text-slate-400 hover:text-white mb-8 inline-block">&larr; Back to Services</Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{data.subtitle}</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Overview</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              {data.description}
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
               {data.features.map((f, i) => (
                 <Card key={i} className="bg-slate-50 border-none">
                    <p className="font-semibold text-slate-900">{f}</p>
                 </Card>
               ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg sticky top-24">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose This?</h3>
               <div className="space-y-6">
                 {data.benefits.map((b, i) => (
                   <div key={i}>
                     <h4 className="font-semibold text-slate-900">{b.title}</h4>
                     <p className="text-sm text-slate-500 mt-1">{b.description}</p>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-slate-100">
                  <Button to="/contact" variant="primary" className="w-full">Request Demo</Button>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
