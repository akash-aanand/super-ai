import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Button, CheckList, Hero, MotionPage, FadeIn, Stagger, Badge, BookShelf, TechCard, InteractiveFeature } from '../components/ui';
import { SERVICES_DATA, GLOBAL_PRESENCE, BOOK_SERIES } from '../data';
import { ArrowRight, Zap, GraduationCap, Users, Bot, BookOpen, Cpu, Globe, Server, Terminal, MapPin } from 'lucide-react';
import { WorldGlobe } from '../components/scene';

// Main Education Solutions Overview Page
export const ServicesMain = () => {
  return (
    <MotionPage>
      {/* Hero */}
      <Hero
        badge="Education Solutions"
        title={<span>Revolutionizing <span className="text-accent">Learning</span></span>}
        subtitle="Transforming K-12, Higher Education, and Skill Development ecosystems through applied Artificial Intelligence."
        className="text-center"
      >
        <Button to="/contact" variant="primary">Partner With Us</Button>
        <Button to="/services/labs" variant="outline">View AI Labs</Button>
      </Hero>

      {/* Global Presence Map Section - UPDATED TO 3D */}
      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
         <FadeIn>
            <Card className="bg-[#050505] border-white/10 p-0 relative overflow-hidden h-auto lg:h-[600px] flex flex-col lg:flex-row">
               
               {/* Left: Content List */}
               <div className="relative z-10 w-full lg:w-1/3 p-8 md:p-10 flex flex-col bg-neutral-950/90 border-r border-white/5">
                   <div className="mb-auto">
                        <Badge className="mb-4">Global Impact</Badge>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Super AIP Global Presence</h2>
                        <p className="text-muted text-sm mb-8 leading-relaxed">
                            Our intelligent solutions are trusted globally, empowering enterprises, governments, and institutions across continents.
                        </p>
                        
                        <div className="h-[300px] lg:h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                             <ul className="space-y-3">
                                {GLOBAL_PRESENCE.map((loc) => (
                                   <li key={loc.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group cursor-default">
                                        <div className="h-2 w-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:scale-125 transition-all"></div>
                                        <span className="text-sm font-mono text-muted group-hover:text-white uppercase tracking-wider">{loc.name}</span>
                                   </li>
                                ))}
                             </ul>
                        </div>
                   </div>
                   
                   <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2">
                       <MapPin size={16} className="text-accent" />
                       <span className="text-xs text-muted">Active in {GLOBAL_PRESENCE.length}+ regions</span>
                   </div>
               </div>

               {/* Right: 3D Globe Visualization */}
               <div className="relative w-full lg:w-2/3 h-[400px] lg:h-full bg-black/50">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-80 z-0"></div>
                   <div className="absolute inset-0 z-10">
                        <WorldGlobe />
                   </div>
                   {/* Overlay Text */}
                   <div className="absolute bottom-6 right-6 z-20 text-right pointer-events-none">
                        <p className="text-[10px] text-accent/50 font-mono tracking-[0.2em] uppercase">Interactive Projection</p>
                   </div>
               </div>

            </Card>
         </FadeIn>
      </Section>

      {/* Interactive Academic Ecosystem */}
      <Section>
        <SectionHeader 
           badge="Core Programs"
           title="Academic Ecosystem"
           subtitle="Tailored AI curriculums ensuring continuity from Grade 1 to PhD."
           center
        />
        
        <div className="space-y-0">
           {/* K-12 Interactive Section */}
           <InteractiveFeature 
              title="K-12 AI Programs"
              subtitle="Grades 1-12"
              description="Inspiring young innovators aligned with NEP 2020. Our curriculum covers AI basics, coding, and real-world problem solving with gamified modules."
              items={["Aligned with NEP 2020", "Block-based & Python Coding", "Generative AI for Kids", "Robotics Integration"]}
              image="https://images.unsplash.com/photo-1509062522246-37559cc792f9?auto=format&fit=crop&q=80&w=1600"
              align="left"
              ctaLink="/services/k12"
              ctaText="Explore K-12"
           />

           {/* Higher Ed Interactive Section */}
           <InteractiveFeature 
              title="Higher Education Bridging"
              subtitle="University"
              description="Industry-integrated modules for BCA, B.Tech, and MBA students. We bridge the critical gap between academic theory and real-world industrial deployment."
              items={["Capstone Projects", "LLM & Chatbot Development", "Internship Placement Support", "Industry Certifications"]}
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
              align="right"
              ctaLink="/services/higher-ed"
              ctaText="Explore University"
           />
        </div>
      </Section>
      
      {/* 3D Curriculum Book Shelf - Replaced Grid with Horizontal Scroll */}
      <Section className="relative py-24 bg-neutral-950 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full"></div>
            <div className="w-full h-full bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         </div>

         <div className="relative z-10">
             <SectionHeader 
                 badge="Publications"
                 title="AI Curriculum Series"
                 subtitle="Standardized, interactive textbooks aligned with UNICEF OGIP and NEP 2020."
                 center
             />
             
             {/* Interactive Book Shelf */}
             <div className="mt-8">
                 <BookShelf books={BOOK_SERIES} />
             </div>
             
             <FadeIn className="text-center mt-20">
                <Button variant="outline" to="/services/textbooks">View All Publications <ArrowRight size={16} className="ml-2"/></Button>
             </FadeIn>
         </div>
      </Section>

      {/* Infrastructure & Labs - Visual Upgrade */}
      <Section className="border-y border-white/5 bg-[#050505]">
         <SectionHeader 
            badge="Hardware"
            title="Super AI Labs"
            subtitle="Next-Gen Robotics & Innovation Hubs."
            center
         />
         <Stagger className="grid md:grid-cols-3 gap-6 h-full">
            <TechCard 
               title="Robotics & Hardware"
               description="Includes AI Dog Robots, Self-Driving Car Kits, and Modular Robot Arms for kinetic learning."
               icon={Cpu}
               image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
            />
            <TechCard 
               title="GenAI Stations"
               description="Dedicated workstations equipped with NVIDIA GPUs for LLM fine-tuning and AI art generation."
               icon={Terminal}
               image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
            />
            <TechCard 
               title="Edge AI Tools"
               description="IoT-based control systems, face recognition modules, and computer vision intelligence tools."
               icon={Server}
               image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
            />
         </Stagger>
      </Section>

      {/* Admin AI Section - Bento Grid Style */}
      <Section>
         <SectionHeader 
            badge="Administration"
            title="Institution Management"
            subtitle="Empowering the ecosystem with administrative intelligence."
            center
         />
         <Stagger className="grid md:grid-cols-2 gap-8">
            <Card hover={true} className="flex flex-row items-center gap-6 p-8 group">
               <div className="h-20 w-20 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} />
               </div>
               <div>
                   <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Teacher Training</h3>
                   <p className="text-muted text-sm mb-4">Empowering educators to lead with AI, automated lesson planning, and ethics training.</p>
                   <Button to="/services/teacher-training" variant="ghost" className="pl-0 text-accent hover:bg-transparent hover:text-white">Learn More <ArrowRight size={16} className="ml-2"/></Button>
               </div>
            </Card>

            <Card hover={true} className="flex flex-row items-center gap-6 p-8 group">
               <div className="h-20 w-20 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10 text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Bot size={32} />
               </div>
               <div>
                   <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Enterprise Chatbots</h3>
                   <p className="text-muted text-sm mb-4">SLM and Neura-AI Chatbots for instant student support, admissions, and administration.</p>
                   <Button to="/services/chatbots" variant="ghost" className="pl-0 text-accent hover:bg-transparent hover:text-white">Learn More <ArrowRight size={16} className="ml-2"/></Button>
               </div>
            </Card>
         </Stagger>
      </Section>
    </MotionPage>
  );
};

// Dynamic Service Detail Page (Unchanged)
export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? SERVICES_DATA[id] : null;

  if (!data) return <div className="min-h-screen pt-40 text-center text-muted">Service not found</div>;

  return (
    <MotionPage>
      <Hero
        badge="Solution Detail"
        title={data.title}
        subtitle={data.subtitle}
        className="text-left"
        align="left"
      >
        <Link to="/services" className="text-muted hover:text-white mb-8 inline-block text-sm font-mono tracking-wider flex items-center group">
          <ArrowRight size={14} className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Ecosystem
        </Link>
      </Hero>

      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 md:p-12">
              <FadeIn>
                <h3 className="text-2xl font-bold text-foreground mb-6">Overview</h3>
                <p className="text-lg text-muted leading-relaxed">
                  {data.description}
                </p>
              </FadeIn>
            </Card>
            
            <FadeIn>
              <h3 className="text-xl font-bold text-foreground mb-6 ml-2">Core Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {data.features.map((f, i) => (
                   <Card key={i} className="bg-neutral-900/50 border-white/5 hover:border-accent/30 p-6 flex items-start gap-4">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <p className="font-medium text-foreground text-sm">{f}</p>
                   </Card>
                 ))}
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <FadeIn delay={0.2} className="sticky top-24">
              <Card className="bg-gradient-to-b from-neutral-900 to-black border-accent/20">
                 <h3 className="text-lg font-bold text-foreground mb-6 border-b border-white/10 pb-4">Key Benefits</h3>
                 <div className="space-y-8">
                   {data.benefits.map((b, i) => (
                     <div key={i}>
                       <h4 className="font-bold text-white text-sm mb-1">{b.title}</h4>
                       <p className="text-sm text-muted">{b.description}</p>
                     </div>
                   ))}
                 </div>
                 <div className="mt-8 pt-6 border-t border-white/10">
                    <Button to="/contact" variant="gold" className="w-full">Request Brochure</Button>
                    <p className="text-center text-xs text-muted mt-4">University/School accreditation required.</p>
                 </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>
    </MotionPage>
  );
};