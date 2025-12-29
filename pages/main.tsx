import React from 'react';
import { Section, SectionHeader, Button, Card, FeatureItem, Badge, CheckList, Hero, MotionPage, FadeIn, Stagger, Accordion, ReviewCard } from '../components/ui';
import { ArrowRight, Brain, Cpu, Globe, Sparkles, Layout, Zap, Users } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MotionPage>
      {/* 1. Hero Section */}
      <Hero
        title="AI-enhanced learning shapes tomorrow's leaders"
        subtitle="Welcome to Super AI, where artificial intelligence powers the future of education. We create transformative learning experiences by combining advanced technology with proven educational practices."
        className="text-center"
      >
        <Button to="/contact" variant="primary">Contact</Button>
        <Button to="/services" variant="secondary">Learn</Button>
      </Hero>

      {/* 2. Feature Section - AI Driven Education */}
      <Section className="border-b border-border">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Badge>Innovation</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-6 tracking-tight">
              AI-driven education for a smarter future
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              We integrate artificial intelligence into learning environments to help students become confident problem-solvers. Our approach combines technology with collaboration.
            </p>
            <CheckList items={[
              "Adaptive learning systems",
              "Intelligent student engagement tools",
              "Real-time academic progress tracking"
            ]} />
            <div className="mt-8 flex gap-4">
              <Button to="/services" variant="secondary" className="text-xs">Explore</Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative aspect-square md:aspect-[4/3] bg-neutral-900 rounded-md border border-border overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950 opacity-50"></div>
             <Brain size={64} className="text-neutral-700 relative z-10" />
          </FadeIn>
        </div>
      </Section>

      {/* 3. Services Grid - What we offer */}
      <Section className="border-b border-border">
        <SectionHeader 
          title="What we offer" 
          subtitle="Comprehensive AI-powered tools designed for modern education."
          center 
        />
        <Stagger className="grid md:grid-cols-3 gap-6">
          <Card className="hover:border-neutral-500 transition-colors">
            <div className="h-48 bg-neutral-900 border-b border-border -mx-6 -mt-6 mb-6 flex items-center justify-center">
               <Cpu size={32} className="text-neutral-700" />
            </div>
            <Badge>Systems</Badge>
            <h3 className="text-xl font-bold text-foreground mt-4 mb-2 tracking-tight">Learning systems</h3>
            <p className="text-sm text-muted mb-4">Immersive, AI-powered platforms that enhance engagement.</p>
            <Link to="/services/learning-systems" className="text-xs font-mono text-foreground hover:text-muted flex items-center">Arrow <ArrowRight size={10} className="ml-1" /></Link>
          </Card>

          <Card className="hover:border-neutral-500 transition-colors">
            <div className="h-48 bg-neutral-900 border-b border-border -mx-6 -mt-6 mb-6 flex items-center justify-center">
               <Layout size={32} className="text-neutral-700" />
            </div>
            <Badge>Technology</Badge>
            <h3 className="text-xl font-bold text-foreground mt-4 mb-2 tracking-tight">Educational technology</h3>
            <p className="text-sm text-muted mb-4">Advanced tools including AI platforms and virtual classrooms.</p>
            <Link to="/services/edtech" className="text-xs font-mono text-foreground hover:text-muted flex items-center">Arrow <ArrowRight size={10} className="ml-1" /></Link>
          </Card>

          <Card className="hover:border-neutral-500 transition-colors">
            <div className="h-48 bg-neutral-900 border-b border-border -mx-6 -mt-6 mb-6 flex items-center justify-center">
               <Users size={32} className="text-neutral-700" />
            </div>
            <Badge>Partnership</Badge>
            <h3 className="text-xl font-bold text-foreground mt-4 mb-2 tracking-tight">Collaborative success</h3>
            <p className="text-sm text-muted mb-4">Partnership-driven solutions working closely with schools.</p>
            <Link to="/services/collaborative-success" className="text-xs font-mono text-foreground hover:text-muted flex items-center">Arrow <ArrowRight size={10} className="ml-1" /></Link>
          </Card>
        </Stagger>
      </Section>

      {/* 4. Feature Split - Improved Engagement */}
      <Section className="border-b border-border bg-background">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
             <div className="relative aspect-square bg-neutral-900 rounded-md border border-border overflow-hidden flex items-center justify-center">
                <Zap size={64} className="text-neutral-700" />
             </div>
          </FadeIn>
          <FadeIn className="order-1 lg:order-2">
            <div className="text-xs font-mono text-muted mb-4 uppercase tracking-wider">01 Improved Engagement</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Students stay motivated and focused
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              AI-powered systems adapt to individual learning styles, keeping students engaged through personalized experiences. This approach transforms passive learning into active participation.
            </p>
            <Button to="/services" variant="outline">Discover</Button>
          </FadeIn>
        </div>
      </Section>

      {/* 5. Feature Split - Better Outcomes */}
      <Section className="border-b border-border">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-xs font-mono text-muted mb-4 uppercase tracking-wider">02 Better Outcomes</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Academic performance rises measurably
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Our intelligent systems identify learning gaps early and provide targeted support. Schools see consistent improvements in test scores and student advancement.
            </p>
            <Button to="/research" variant="outline">Discover</Button>
          </FadeIn>
          <FadeIn delay={0.2}>
             <div className="relative aspect-square bg-neutral-900 rounded-md border border-border overflow-hidden flex items-center justify-center">
                <div className="w-1/2 h-1/2 border border-neutral-700 rounded-full flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-neutral-800 rounded-full animate-pulse"></div>
                </div>
             </div>
          </FadeIn>
        </div>
      </Section>

      {/* 6. Feature Split - Future Ready */}
      <Section className="border-b border-border bg-background">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
             <div className="relative aspect-square bg-neutral-900 rounded-md border border-border overflow-hidden flex items-center justify-center">
                <Globe size={64} className="text-neutral-700" />
             </div>
          </FadeIn>
          <FadeIn className="order-1 lg:order-2">
            <div className="text-xs font-mono text-muted mb-4 uppercase tracking-wider">03 Future Ready</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Students develop essential leadership skills
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Beyond academics, our platform builds critical thinking and problem-solving abilities. Students graduate prepared for the demands of tomorrow's world.
            </p>
            <Button to="/about" variant="outline">Discover</Button>
          </FadeIn>
        </div>
      </Section>

      {/* 7. CTA Section */}
      <section className="bg-black border-b border-border py-32 px-4 relative overflow-hidden">
        <FadeIn className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Ready to transform education?
          </h2>
          <p className="text-muted text-xl mb-10">
            Let's work together to bring AI-powered learning to your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">Contact</Button>
            <Button to="/services" variant="secondary">Learn</Button>
          </div>
        </FadeIn>
      </section>

      {/* 8. Testimonials - Real Voices */}
      <Section className="border-b border-border">
        <SectionHeader title="Real voices" subtitle="Hear from educators and schools." center />
        <Stagger className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </Stagger>
      </Section>

      {/* 9. FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
           <SectionHeader title="Questions" subtitle="Find answers about AI education and how Super AI works." />
           <Accordion items={FAQS} />
        </div>
      </Section>

      {/* Newsletter - Stay Ahead */}
      <section className="py-24 px-4 bg-neutral-900/50 border-t border-border">
        <FadeIn className="max-w-4xl mx-auto bg-black border border-border rounded-md p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay ahead in education</h2>
            <p className="text-muted mb-8">Get insights on AI learning and education innovation.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
               <input type="email" placeholder="Enter your email" className="flex-1 bg-neutral-900 border border-border rounded-md px-4 py-2 text-foreground text-sm focus:outline-none focus:border-white" />
               <button className="bg-foreground text-background px-6 py-2 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors">Subscribe</button>
            </div>
            <p className="text-[10px] text-muted mt-4">By subscribing you agree to our Privacy Policy and Terms.</p>
          </div>
        </FadeIn>
      </section>
    </MotionPage>
  );
};

export const About = () => (
  <MotionPage>
  <Hero 
    title="About Us"
    subtitle="Discover how Super AI is transforming education through intelligent, AI-driven solutions."
    className="text-center"
  />
  <Section>
    <div className="max-w-3xl mx-auto">
      <FadeIn className="prose prose-lg prose-invert text-muted leading-relaxed">
        <p className="mb-6">
          Super AI is committed to revolutionizing education for all learners. Our mission is to bridge the gap between traditional pedagogical methods and the limitless potential of artificial intelligence.
        </p>
        <p className="mb-6">
          We envision a world where every student has a personalized tutor, every teacher has an intelligent assistant, and every school operates with data-driven precision.
        </p>
      </FadeIn>
    </div>
  </Section>
  </MotionPage>
);

export const Founder = () => (
   <MotionPage>
   <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">
         <FadeIn className="order-2 md:order-1">
            <Badge>Founder & CEO</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6 tracking-tight mt-6">Alex V. Mercer</h1>
            <p className="text-lg text-muted mb-6 leading-relaxed">
               A visionary leader with a unique blend of expertise in education and technology. Alex founded Super AI to solve the scalability crisis in personalized education.
            </p>
            <div className="flex gap-4">
               <Button variant="secondary">Connect</Button>
            </div>
         </FadeIn>
         <FadeIn className="order-1 md:order-2">
            <div className="aspect-[3/4] rounded-md bg-neutral-900 border border-border"></div>
         </FadeIn>
      </div>
   </Section>
   </MotionPage>
);