import React from 'react';
import { Section, SectionHeader, Button, Card, FeatureItem, Badge, CheckList } from '../components/ui';
import { ArrowRight, Brain, Cpu, Globe, Zap, Users, ShieldCheck, Code, Sparkles, Building2, Linkedin, Twitter } from 'lucide-react';
import { PARTNERS, INDUSTRIES } from '../data';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge>Announcing Super-AI 2.0 Enterprise</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
            Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">intelligent systems.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The complete platform for enterprise AI adoption, adaptive learning, and scalable research infrastructure. Deployed at the speed of thought.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">Start Building <ArrowRight size={16} className="ml-2" /></Button>
            <Button to="/services" variant="secondary">Explore Services</Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {PARTNERS.slice(0, 5).map(p => (
                <span key={p} className="text-lg font-bold text-slate-400">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <Section className="bg-white">
        <SectionHeader title="Everything you need to scale AI" subtitle="From educational infrastructure to custom model deployment, we cover the full lifecycle of artificial intelligence integration." center />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <FeatureItem icon={Brain} title="Adaptive Learning" description="Deploy personalized learning experiences that adapt to every user's pace and style automatically." />
          </Card>
          <Card>
            <FeatureItem icon={Cpu} title="Infrastructure" description="Enterprise-grade APIs and compute orchestration for seamless model serving and fine-tuning." />
          </Card>
          <Card>
            <FeatureItem icon={Globe} title="Global Scale" description="Edge-deployed inference ensures low latency and compliance across all major geographies." />
          </Card>
        </div>
      </Section>

      {/* Feature Split - Research */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>Research-First Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built on breakthrough methodologies.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Super-AI isn't just a wrapper. We publish peer-reviewed research on efficient training, ethical alignment, and human-computer interaction.
            </p>
            <CheckList items={[
              "Proprietary cognitive architecture",
              "10x more efficient than standard transformers",
              "Ethical guardrails built-in at the kernel level"
            ]} />
            <div className="mt-8">
              <Button to="/research" variant="outline">Read our Research</Button>
            </div>
          </div>
          <div className="relative h-96 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
             <div className="relative z-10 text-center p-8">
                <Sparkles size={48} className="text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Neural Architecture Search</h3>
                <p className="text-sm text-slate-500 mt-2">Optimizing topology in real-time...</p>
                <div className="mt-6 flex justify-center gap-2">
                   <div className="h-12 w-2 bg-slate-900 rounded-full animate-[bounce_1s_infinite]"></div>
                   <div className="h-8 w-2 bg-slate-400 rounded-full animate-[bounce_1.2s_infinite]"></div>
                   <div className="h-10 w-2 bg-blue-500 rounded-full animate-[bounce_0.8s_infinite]"></div>
                </div>
             </div>
          </div>
        </div>
      </Section>

       {/* Industries */}
       <Section>
        <SectionHeader title="Transforming Industries" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
             <Link to="/industries" key={ind.title} className="group block">
                <Card className="h-full border-slate-200 group-hover:border-blue-500/50 transition-colors">
                  <ind.icon className="text-slate-400 group-hover:text-blue-600 mb-4 transition-colors" size={24} />
                  <h3 className="font-semibold text-slate-900">{ind.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{ind.desc}</p>
                </Card>
             </Link>
          ))}
        </div>
       </Section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to accelerate?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join the organizations defining the next decade of intelligent computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" className="bg-white text-slate-900 hover:bg-slate-100">Get in touch</Button>
            <Button to="/about" className="bg-slate-800 text-white hover:bg-slate-700">Read the Manifesto</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export const About = () => (
  <Section>
    <div className="max-w-3xl mx-auto">
      <Badge>About Us</Badge>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
        We are architects of the <br/><span className="text-slate-400">intelligence revolution.</span>
      </h1>
      <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
        <p className="mb-6">
          Founded in 2023, Super-AI emerged from a simple observation: While AI models were getting smarter, the systems to educate people and deploy these models effectively were lagging behind.
        </p>
        <p className="mb-6">
          We believe that the true potential of Artificial Intelligence lies not just in raw compute power, but in the interface between human cognition and machine intelligence. Our mission is to bridge this gap.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Core Values</h3>
        <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
          <Card hover={false}><h4 className="font-bold mb-2">Accessibility</h4><p className="text-sm">Democratizing access to SOTA models.</p></Card>
          <Card hover={false}><h4 className="font-bold mb-2">Safety</h4><p className="text-sm">Alignment is a feature, not an afterthought.</p></Card>
          <Card hover={false}><h4 className="font-bold mb-2">Rigor</h4><p className="text-sm">Scientific method applied to product development.</p></Card>
          <Card hover={false}><h4 className="font-bold mb-2">Collaboration</h4><p className="text-sm">Human + AI > AI alone.</p></Card>
        </div>
      </div>
      <div className="mt-12 pt-12 border-t border-slate-200">
         <div className="flex items-center justify-between">
            <div>
               <h3 className="text-2xl font-bold text-slate-900">Meet the Founder</h3>
               <p className="text-slate-600 mt-2">The visionary behind the platform.</p>
            </div>
            <Button to="/founder" variant="outline">Read Profile <ArrowRight size={16} className="ml-2"/></Button>
         </div>
      </div>
    </div>
  </Section>
);

export const Founder = () => (
   <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
         <div className="order-2 md:order-1">
            <Badge>Founder & CEO</Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Dr. Alex V. Mercer</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
               With over 15 years in computational neuroscience and machine learning, Dr. Mercer has dedicated his career to solving the "alignment problem" through education. 
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               Before Super-AI, he led the Adaptive Systems Group at TechGlobal and holds 12 patents in neural network architecture.
            </p>
            <div className="flex gap-4">
               <Button variant="outline"><Linkedin size={18} className="mr-2"/> LinkedIn</Button>
               <Button variant="outline"><Twitter size={18} className="mr-2"/> Twitter</Button>
            </div>
         </div>
         <div className="order-1 md:order-2">
            <div className="aspect-[3/4] rounded-2xl bg-slate-200 overflow-hidden relative shadow-2xl">
               <img src="https://picsum.photos/seed/founder/600/800" alt="Founder" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
         </div>
      </div>
   </Section>
);