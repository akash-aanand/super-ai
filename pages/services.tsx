import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Button, CheckList, Hero, MotionPage, FadeIn, Stagger, Badge } from '../components/ui';
import { SERVICES_DATA } from '../data';
import { ArrowRight, Zap, GraduationCap, Users } from 'lucide-react';

// Main Services Overview Page
export const ServicesMain = () => {
  return (
    <MotionPage>
      {/* Hero */}
      <Hero
        title="Elevate Your Learning Experience"
        subtitle="AI-powered services redefining education. Innovative, collaborative, and results-driven."
        className="text-center"
      >
        <Button to="/contact" variant="primary">Contact Us</Button>
      </Hero>

      {/* Services List - Matching CSV Structure */}
      <Section className="border-b border-border">
        <SectionHeader title="Our Core Services" center />
        <div className="grid gap-12">
           {/* Service 1 */}
           <FadeIn>
           <div className="grid md:grid-cols-2 gap-8 items-center border border-border rounded-md p-8 bg-black">
              <div>
                 <Badge>Systems</Badge>
                 <h2 className="text-2xl font-bold text-foreground mt-4 mb-4 tracking-tight">AI-Powered Learning Systems</h2>
                 <p className="text-muted mb-6">Immersive, AI-powered learning systems that enhance engagement and academic success through personalization.</p>
                 <CheckList items={["Personalized paths", "Engagement tracking", "Adaptive content"]} />
                 <div className="mt-8">
                    <Button to="/services/learning-systems" variant="outline">Learn more</Button>
                 </div>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-md border border-border flex items-center justify-center">
                 <Zap size={48} className="text-neutral-700" />
              </div>
           </div>
           </FadeIn>

            {/* Service 2 */}
            <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-center border border-border rounded-md p-8 bg-black">
              <div className="md:order-2">
                 <Badge>Technology</Badge>
                 <h2 className="text-2xl font-bold text-foreground mt-4 mb-4 tracking-tight">Advanced Educational Technology</h2>
                 <p className="text-muted mb-6">Advanced tools including AI platforms and virtual classrooms to support student growth and educator effectiveness.</p>
                 <CheckList items={["Virtual classrooms", "Data analytics", "Secure infrastructure"]} />
                 <div className="mt-8">
                    <Button to="/services/edtech" variant="outline">Learn more</Button>
                 </div>
              </div>
              <div className="md:order-1 aspect-video bg-neutral-900 rounded-md border border-border flex items-center justify-center">
                 <GraduationCap size={48} className="text-neutral-700" />
              </div>
           </div>
           </FadeIn>

           {/* Service 3 */}
           <FadeIn>
           <div className="grid md:grid-cols-2 gap-8 items-center border border-border rounded-md p-8 bg-black">
              <div>
                 <Badge>Partnership</Badge>
                 <h2 className="text-2xl font-bold text-foreground mt-4 mb-4 tracking-tight">Collaborative Success</h2>
                 <p className="text-muted mb-6">Partnership-driven solutions working closely with schools and educators for shared success.</p>
                 <CheckList items={["Strategic consulting", "Implementation support", "Ongoing training"]} />
                 <div className="mt-8">
                    <Button to="/services/collaborative-success" variant="outline">Learn more</Button>
                 </div>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-md border border-border flex items-center justify-center">
                 <Users size={48} className="text-neutral-700" />
              </div>
           </div>
           </FadeIn>
        </div>
      </Section>

      {/* Benefits Summary */}
      <Section>
        <SectionHeader title="Key Benefits" subtitle="Why institutions choose Super AI." center />
        <Stagger className="grid md:grid-cols-3 gap-6">
          <Card>
             <h3 className="font-bold text-foreground mb-2">Improved Outcomes</h3>
             <p className="text-sm text-muted">Consistent gains in student performance metrics.</p>
          </Card>
          <Card>
             <h3 className="font-bold text-foreground mb-2">Adaptable Solutions</h3>
             <p className="text-sm text-muted">Fits seamlessly into existing institutional frameworks.</p>
          </Card>
          <Card>
             <h3 className="font-bold text-foreground mb-2">Future-Ready Skills</h3>
             <p className="text-sm text-muted">Prepares students for a technology-driven world.</p>
          </Card>
        </Stagger>
      </Section>
    </MotionPage>
  );
};

// Dynamic Service Detail Page
export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? SERVICES_DATA[id] : null;

  if (!data) return <div className="p-20 text-center text-muted">Service not found</div>;

  return (
    <MotionPage>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        className="text-left"
      >
        <Link to="/services" className="text-muted hover:text-foreground mb-8 inline-block text-sm font-mono">&larr; Back to Services</Link>
      </Hero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeIn>
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Overview</h3>
              <p className="text-lg text-muted leading-relaxed mb-12">
                {data.description}
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Key Features</h3>
            </FadeIn>
            <Stagger className="grid sm:grid-cols-2 gap-4 mb-12">
               {data.features.map((f, i) => (
                 <Card key={i} className="hover:border-neutral-600">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
                      <p className="font-semibold text-foreground text-sm">{f}</p>
                    </div>
                 </Card>
               ))}
            </Stagger>
          </div>
          
          <div>
            <FadeIn delay={0.3}>
            <div className="bg-black border border-border rounded-md p-8 sticky top-24">
               <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">Why Choose This?</h3>
               <div className="space-y-6">
                 {data.benefits.map((b, i) => (
                   <div key={i}>
                     <h4 className="font-semibold text-foreground text-sm">{b.title}</h4>
                     <p className="text-sm text-muted mt-1">{b.description}</p>
                   </div>
                 ))}
               </div>
               <div className="mt-8 pt-8 border-t border-border">
                  <Button to="/contact" variant="primary" className="w-full">Request Demo</Button>
               </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </MotionPage>
  );
};