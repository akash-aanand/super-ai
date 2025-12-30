import React from 'react';
import { Section, SectionHeader, Button, Card, FeatureItem, Badge, CheckList, Hero, MotionPage, FadeIn, Stagger, Accordion, ReviewCard } from '../components/ui';
import { HeroScene, NetworkScene } from '../components/scene';
import { ArrowRight, Brain, Cpu, Globe, Sparkles, Layout, Zap, Users, BarChart } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MotionPage>
      {/* 1. Hero Section with 3D Core */}
      <Hero
        badge="AICTE Corporate Partner"
        title={<span>Transforming Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-muted">with AI.</span></span>}
        subtitle="Super AI Polaris bridges the gap between academia and industry. We empower students and faculty with domain-specific, scalable AI solutions and government-aligned internships."
        className="text-center"
        scene={<div className="w-full h-[600px] md:h-full md:absolute md:top-0 md:left-0 md:w-full md:z-0 opacity-100 mix-blend-lighten pointer-events-none"><HeroScene /></div>}
      >
        <Button to="/contact" variant="primary">For Institutions</Button>
        <Button to="/services" variant="secondary">For Students</Button>
      </Hero>

      {/* 2. Value Proposition - Responsive Overlap */}
      {/* Remove negative margin on mobile/tablet to prevent collisions. Apply overlap only on lg screens where vertical space exists. */}
      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
        <Stagger className="grid md:grid-cols-3 gap-6">
           <Card className="hover:border-accent/50 bg-neutral-900/80 backdrop-blur-xl border-white/10">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><Brain size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">AICTE Approved</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                 Recognized internships that provide valid academic credits and industry certification.
              </p>
           </Card>
           <Card className="hover:border-accent/50 bg-neutral-900/80 backdrop-blur-xl border-white/10">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><BarChart size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">Skill Analytics</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                 Data-driven insights into student performance to bridge the employability gap.
              </p>
           </Card>
           <Card className="hover:border-accent/50 bg-neutral-900/80 backdrop-blur-xl border-white/10">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-lg bg-neutral-900 border border-white/10 text-accent"><Globe size={24} /></div>
                 <h3 className="text-lg font-bold text-foreground">Nationwide Reach</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                 Partnering with universities across the country to deliver virtual labs and training.
              </p>
           </Card>
        </Stagger>
      </Section>

      {/* 3. Deep Dive - Interactive Layout with 3D Background */}
      <Section className="relative overflow-hidden">
        {/* 3D Network Background */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <NetworkScene />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <FadeIn>
            <Badge className="mb-6">The Platform</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A comprehensive ecosystem for <br/> <span className="text-accent">Future Skills.</span>
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Super AI Polaris goes beyond traditional e-learning. We provide a complete ecosystem comprising virtual labs, mentorship, and project-based learning to ensure job readiness.
            </p>
            <CheckList items={[
              "Virtual Internship Programs (VIP)",
              "Outcome-Based Education (OBE) alignment",
              "Faculty Development & Upskilling"
            ]} />
            <div className="mt-10">
              <Button to="/services" variant="outline" className="group">
                Explore Programs <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative mt-8 lg:mt-0">
             <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl opacity-30 rounded-full"></div>
             <Card noPadding className="aspect-square md:aspect-[4/3] relative flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm border-white/10 w-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-950 to-neutral-950 opacity-40"></div>
                {/* Abstract UI representation */}
                <div className="relative z-10 w-3/4 space-y-4">
                   <div className="h-2 w-1/3 bg-neutral-800 rounded-full mb-8"></div>
                   <div className="space-y-3">
                      <div className="h-16 w-full bg-neutral-900 border border-white/5 rounded-lg flex items-center px-4 gap-4">
                         <div className="h-8 w-8 rounded-full bg-accent/20"></div>
                         <div className="flex-1 h-2 bg-neutral-800 rounded-full"></div>
                      </div>
                      <div className="h-16 w-full bg-neutral-900 border border-white/5 rounded-lg flex items-center px-4 gap-4 ml-4 border-l-accent/50">
                         <div className="h-8 w-8 rounded-full bg-white/10"></div>
                         <div className="flex-1 h-2 bg-neutral-800 rounded-full"></div>
                      </div>
                      <div className="h-16 w-full bg-neutral-900 border border-white/5 rounded-lg flex items-center px-4 gap-4">
                         <div className="h-8 w-8 rounded-full bg-white/10"></div>
                         <div className="flex-1 h-2 bg-neutral-800 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </Card>
          </FadeIn>
        </div>
      </Section>

      {/* 4. Services Grid */}
      <Section className="bg-neutral-950/30 border-y border-white/5">
        <SectionHeader 
          badge="Capabilities"
          title="Empowering the Ecosystem" 
          subtitle="Tailored solutions for every stakeholder in the education value chain."
          center 
        />
        <Stagger className="grid md:grid-cols-3 gap-8">
          <Card hover={true}>
            <FeatureItem 
               icon={Cpu}
               title="Students"
               description="Gain industry-ready skills through AICTE-aligned internships and capstone projects."
            />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto">
               <Link to="/services/internships" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">View Internships <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </Card>

          <Card hover={true}>
            <FeatureItem 
               icon={Layout}
               title="Institutions"
               description="Set up Centers of Excellence and modernize curriculum with our FDPs."
            />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto">
               <Link to="/services/fdp" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">For Faculty <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </Card>

          <Card hover={true}>
            <FeatureItem 
               icon={Users}
               title="Corporate"
               description="Hire trained talent directly from our pool of certified graduates."
            />
            <div className="mt-6 pt-6 border-t border-white/5 mt-auto">
               <Link to="/services/corporate" className="text-xs font-mono font-bold text-accent hover:text-white uppercase tracking-wider flex items-center">Partner With Us <ArrowRight size={12} className="ml-2" /></Link>
            </div>
          </Card>
        </Stagger>
      </Section>

      {/* 5. Social Proof */}
      <Section>
        <SectionHeader 
          title="Success Stories" 
          subtitle="Hear from students and professors transforming their careers with Super AI Polaris."
          center 
        />
        <Stagger className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </Stagger>
      </Section>

      {/* 6. FAQ */}
      <Section className="max-w-4xl mx-auto">
         <SectionHeader title="Frequently Asked Questions" center />
         <Accordion items={FAQS} />
      </Section>

      {/* 7. CTA */}
      <Section>
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
             <div className="relative z-10 px-8 py-20 md:px-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to shape the future?</h2>
                <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                   Join thousands of students and institutions partnering with Super AI Polaris.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button to="/contact" variant="gold">Contact Us</Button>
                   <Button to="/services" variant="outline">Browse Programs</Button>
                </div>
             </div>
          </div>
        </FadeIn>
      </Section>
    </MotionPage>
  );
};

export const About = () => (
  <MotionPage>
  <Hero 
    badge="Our Mission"
    title="Democratizing AI Education"
    subtitle="Super AI Polaris is driven by the belief that high-quality technical education should be accessible, affordable, and industry-aligned."
    className="text-center"
  />
  <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-20">
    <div className="max-w-4xl mx-auto">
      <Card className="p-10 md:p-16">
        <FadeIn className="prose prose-lg prose-invert text-muted leading-relaxed max-w-none">
          <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-4">
            We are a dedicated team of technologists and educators working in tandem with government bodies to revolutionize technical education in India.
          </p>
          <p className="mb-8">
            As an AICTE Corporate Partner, we bridge the critical gap between theoretical university curriculum and the practical demands of the AI industry.
          </p>
          <p className="mb-8">
            Our platform provides virtual labs, expert mentorship, and real-world project experience, ensuring that every student we certify is ready to contribute to the workforce from day one.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5">
             <div>
                <div className="text-4xl font-bold text-foreground mb-2">10k+</div>
                <div className="text-sm text-muted uppercase tracking-wider">Interns Certified</div>
             </div>
             <div>
                <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted uppercase tracking-wider">Partner Colleges</div>
             </div>
          </div>
        </FadeIn>
      </Card>
    </div>
  </Section>
  </MotionPage>
);

export const Founder = () => (
   <MotionPage>
   <Hero
     badge="Governance"
     title="Leadership Team"
     align="left"
   />
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-20">
      <Card className="overflow-hidden p-0 bg-neutral-900 border-white/10">
        <div className="grid md:grid-cols-2">
           <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
              <Badge className="self-start mb-6">Board of Directors</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">Visionary Leadership</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                 Super AI Polaris Private Limited is led by a distinguished board of directors with deep expertise in Artificial Intelligence, Educational Policy, and Corporate Governance.
              </p>
              
              <ul className="space-y-4 mb-10">
                 {[
                    "Rajat Sahai",
                    "Swapnashree Rath", 
                    "Sanjay Rajput",
                    "Dhirendra Kumar Khandelwal"
                 ].map((name) => (
                   <li key={name} className="flex items-center text-lg font-medium text-foreground border-b border-white/5 pb-2">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                      {name}
                   </li>
                 ))}
              </ul>
              
              <div className="flex items-center text-sm text-muted mt-4">
                  <span className="font-mono bg-white/5 px-2 py-1 rounded">CIN: U72900DL2020PTC372592</span>
              </div>
           </div>
           <div className="bg-neutral-800 relative min-h-[400px] order-1 md:order-2">
              {/* Placeholder for Team Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
                 <Users size={64} />
              </div>
           </div>
        </div>
      </Card>
   </Section>
   </MotionPage>
);