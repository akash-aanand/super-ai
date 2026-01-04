import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Button, CheckList, Hero, MotionPage, FadeIn, Stagger, Badge, BookShelf, TechCard, InteractiveFeature, EnterpriseScrollSection, Accordion, SpotlightCard } from '../components/ui';
import { SERVICES_DATA, GLOBAL_PRESENCE, BOOK_SERIES, ENTERPRISE_CONTENT, INDUSTRIES, DEPLOYMENT_STATS, ECOSYSTEM_PARTNERS, CUSTOM_SOLUTIONS_DATA, NEURA_MODULES, LABS_DATA, NEURA_KEY_FEATURES, AGENT_SOLUTIONS_DETAILS, ROBOTICS_SOLUTIONS_DETAILS } from '../data';
import { ArrowRight, Zap, GraduationCap, Users, Bot, BookOpen, Cpu, Globe, Server, Terminal, MapPin, Search, ShieldCheck, Box, Layers, Factory } from 'lucide-react';
import { WorldGlobe } from '../components/scene';

// --- NEW: Enterprise Solutions Page (Redesigned) ---
export const EnterpriseSolutionsPage = () => {
    return (
        <MotionPage>
             {/* 1. Cinematic Hero */}
             <Hero
                badge="Enterprise Solutions"
                title={<span>Driving Industrial Innovation <span className="text-accent">with Scalable AI.</span></span>}
                subtitle="A unified suite for private, offline, and intelligent AI interactions. Transform the way your organization works with our secure, autonomous systems."
                className="text-center"
             >
                <div className="flex gap-4">
                    <Button to="/contact" variant="gold">Get Started Now</Button>
                </div>
             </Hero>

             {/* 2. Core Value Prop (The 3D Scroll Experience) - Neura, Agents, Robotics */}
             <div className="relative z-10">
                 <EnterpriseScrollSection items={ENTERPRISE_CONTENT} />
             </div>

             {/* 3. Product Modules (Deep Dive) & Key Features */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Product Modules"
                    title="Explore Our Product Modules"
                    subtitle="Advanced tools for document intelligence, edge processing, and automated support."
                    center
                />
                <Stagger className="grid md:grid-cols-3 gap-6 mb-16">
                    {NEURA_MODULES.map((mod, idx) => (
                        <SpotlightCard key={idx} backgroundImage={mod.image}>
                            <div className="p-4 w-fit bg-neutral-950 text-accent rounded-xl border border-white/10 mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                                <mod.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{mod.title}</h3>
                            <p className="text-muted text-sm mb-6 leading-relaxed min-h-[60px]">{mod.description}</p>
                            <div className="space-y-2 border-t border-white/5 pt-4">
                                {mod.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center text-xs text-muted/80">
                                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </Stagger>

                <FadeIn className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4">Unified Platform</Badge>
                            <h3 className="text-3xl font-bold text-white mb-6">Key Features of SUPER AI - NEURA</h3>
                            <p className="text-muted leading-relaxed mb-8">
                                A completely offline, secure, and multi-lingual platform designed for mission-critical environments where data privacy is paramount.
                            </p>
                            <Button to="/contact" variant="outline">Schedule Demo</Button>
                        </div>
                        <div className="bg-black/50 p-8 rounded-xl border border-white/5">
                            <CheckList items={NEURA_KEY_FEATURES} />
                        </div>
                    </div>
                </FadeIn>
             </Section>

             {/* 4. Enterprise AI Agent Solutions */}
             <Section>
                <SectionHeader 
                    badge="Workforce Automation"
                    title="Enterprise AI Agent Solutions"
                    subtitle="Deploy digital employees that act, learn, and adapt."
                    center
                />
                <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AGENT_SOLUTIONS_DETAILS.map((agent, idx) => (
                        <Card key={idx} className="bg-neutral-900 border-white/10 p-6 hover:border-accent/50">
                            <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                                <Bot size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">{agent.title}</h4>
                            <ul className="space-y-3">
                                {agent.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs text-muted leading-relaxed flex items-start">
                                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 mr-2 shrink-0"></div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </Stagger>
             </Section>

             {/* 5. Labs & Education Kits */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Education & R&D"
                    title="AI Agent Labs & Education Kits"
                    subtitle="Equipping schools and universities with hands-on AI and Robotics infrastructure."
                    center
                />
                <Stagger className="grid md:grid-cols-3 gap-8">
                    {LABS_DATA.map((lab, idx) => (
                        <SpotlightCard key={idx} backgroundImage={lab.image}>
                            <div className="mb-4 text-xs font-mono text-accent uppercase tracking-widest">{lab.category}</div>
                            <h3 className="text-xl font-bold text-white mb-6">{lab.title}</h3>
                            <ul className="space-y-4 relative z-10">
                                {lab.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-muted group-hover:text-white transition-colors">
                                        <span className="mr-3 text-accent mt-1">
                                            <Layers size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    ))}
                </Stagger>
             </Section>

             {/* 6. Enterprise Robotics Solutions */}
             <Section>
                 <SectionHeader 
                    badge="Physical AI"
                    title="Enterprise Robotics Solutions"
                    subtitle="Bridging the gap between digital intelligence and physical action."
                    center
                 />
                 <div className="grid md:grid-cols-3 gap-6">
                     {ROBOTICS_SOLUTIONS_DETAILS.map((robot, idx) => (
                         <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end p-8 border border-white/10">
                             <div className="absolute inset-0 bg-neutral-900 transition-colors group-hover:bg-neutral-800"></div>
                             {/* Placeholder for Robot Image - Using abstract gradient/pattern */}
                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
                             
                             <div className="relative z-10">
                                 <h4 className="text-2xl font-bold text-white mb-2">{robot.title}</h4>
                                 <p className="text-muted">{robot.desc}</p>
                             </div>
                             <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full border border-white/10 text-white/50 group-hover:text-accent transition-colors">
                                 <Cpu size={20} />
                             </div>
                         </div>
                     ))}
                 </div>
             </Section>

             {/* 7. Deployment & Ecosystem (Screenshot 8) */}
             <Section className="bg-[#050505] border-t border-white/10">
                <SectionHeader 
                    badge="Deployment"
                    title="Deployment & Partnerships"
                    subtitle="Seamlessly integrating with your existing infrastructure and legacy systems."
                    center
                />
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Stats Grid */}
                    <Stagger className="grid gap-6">
                        {DEPLOYMENT_STATS.map((stat, idx) => (
                             <SpotlightCard key={idx} enableTilt={false} className="flex items-center gap-6 p-6">
                                 <div className="p-4 bg-black border border-white/10 rounded-lg text-accent">
                                     <stat.icon size={24} />
                                 </div>
                                 <div>
                                     <div className="text-sm text-muted uppercase tracking-wider mb-1">{stat.label}</div>
                                     <div className="text-xl font-bold text-white">{stat.value}</div>
                                 </div>
                             </SpotlightCard>
                        ))}
                    </Stagger>

                    {/* Right: Partner Ecosystem */}
                    <FadeIn delay={0.2}>
                        <Card className="p-8 border-accent/20 bg-gradient-to-br from-neutral-900 to-black">
                             <h3 className="text-xl font-bold text-white mb-6">Strategic Partners</h3>
                             <p className="text-muted mb-8 leading-relaxed">
                                 We collaborate with global technology leaders to ensure your enterprise AI infrastructure is robust, scalable, and future-proof.
                             </p>
                             <div className="flex flex-wrap gap-3">
                                 {ECOSYSTEM_PARTNERS.map((p) => (
                                     <span key={p} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-mono text-white/80 uppercase tracking-wide hover:bg-white/10 hover:text-accent transition-colors cursor-default">
                                         {p}
                                     </span>
                                 ))}
                             </div>
                        </Card>
                    </FadeIn>
                </div>
             </Section>

             {/* 8. Custom Solutions (Screenshot 9) */}
             <Section className="relative overflow-hidden">
                 {/* Background Glow */}
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

                 <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                     <FadeIn>
                         <Badge className="mb-6">Custom Engineering</Badge>
                         <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                             Custom Enterprise <br/><span className="text-accent">AI Solutions</span>
                         </h2>
                         <p className="text-xl text-white font-medium mb-4">Your Vision. Our Intelligence.</p>
                         <p className="text-muted text-lg leading-relaxed mb-8">
                             We don't just offer products; we build tailored solutions. From predictive maintenance to smart logistics, our engineering team works as an extension of yours.
                         </p>
                         <Button to="/contact" variant="outline" className="group">
                             Discuss Your Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                         </Button>
                     </FadeIn>

                     <FadeIn delay={0.2}>
                         <div className="space-y-6">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-6">Types of Custom Solutions</h3>
                            <Accordion items={CUSTOM_SOLUTIONS_DATA} />
                         </div>
                     </FadeIn>
                 </div>
             </Section>

             {/* 9. Final CTA */}
             <Section className="pt-0">
                 <FadeIn>
                    <Card className="bg-gradient-to-r from-neutral-900 to-black border-accent/20 p-12 text-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full"></div>
                         
                         <div className="relative z-10 max-w-3xl mx-auto">
                             <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Transform?</h3>
                             <p className="text-muted mb-10 text-lg">
                                 Join leading organizations deploying Super AI Polaris solutions for secure, offline, and autonomous operations.
                             </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Button to="/contact" variant="gold" className="px-8 h-12">Contact Sales</Button>
                                 <Button to="/services/labs" variant="outline" className="px-8 h-12">View Labs</Button>
                             </div>
                         </div>
                    </Card>
                 </FadeIn>
             </Section>
        </MotionPage>
    );
};


// Main Education Solutions Overview Page
export const ServicesMain = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

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

      {/* Global Presence Map Section - FUTURISTIC DASHBOARD STYLE */}
      <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
         <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#020202] shadow-2xl flex flex-col lg:flex-row h-[700px] lg:h-[650px]">
               
               {/* Decorative Dashboard Elements */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 z-20"></div>
               <div className="absolute bottom-0 right-0 p-4 z-20 hidden md:block">
                  <div className="flex gap-4 text-[10px] font-mono text-muted/50 uppercase tracking-widest">
                     <span>SYS.ONLINE</span>
                     <span>NET.SECURE</span>
                     <span>LATENCY: 12ms</span>
                  </div>
               </div>

               {/* Left: Interactive Data Panel */}
               <div className="relative z-10 w-full lg:w-1/3 p-6 md:p-8 lg:p-10 flex flex-col bg-neutral-950/80 backdrop-blur-md border-r border-white/5">
                   <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                           <Globe size={16} className="text-accent animate-pulse" />
                           <span className="text-xs font-mono text-accent uppercase tracking-widest">Live Network</span>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">Global Presence</h2>
                        <p className="text-muted text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                            Super AI Polaris powers intelligent ecosystems across {GLOBAL_PRESENCE.length} key regions. Select a node to view status.
                        </p>
                   </div>

                   {/* Region Filter / List */}
                   <div className="flex-1 overflow-hidden flex flex-col">
                       <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                          <span className="text-xs font-mono text-muted uppercase">Active Nodes</span>
                          <span className="text-xs font-mono text-white">{GLOBAL_PRESENCE.length}</span>
                       </div>
                       
                       <div className="overflow-y-auto custom-scrollbar pr-2 flex-1 space-y-1">
                          {GLOBAL_PRESENCE.map((loc) => {
                             const isActive = selectedLocation === loc.name;
                             return (
                               <button 
                                 key={loc.name} 
                                 onClick={() => setSelectedLocation(loc.name)}
                                 className={`w-full flex items-center justify-between p-3 rounded text-left transition-all duration-300 group border ${isActive ? 'bg-white/10 border-accent/50' : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'}`}
                               >
                                  <div className="flex items-center gap-3">
                                      <div className={`h-1.5 w-1.5 rounded-full transition-all ${isActive ? 'bg-accent scale-150 shadow-[0_0_10px_#C5A059]' : 'bg-neutral-600 group-hover:bg-white'}`}></div>
                                      <div>
                                         <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-muted group-hover:text-white'}`}>{loc.name}</div>
                                         <div className="text-[10px] text-muted/50 font-mono uppercase">{loc.region}</div>
                                      </div>
                                  </div>
                                  {loc.isHub && <Badge className="text-[8px] py-0 px-1.5">HUB</Badge>}
                               </button>
                             );
                          })}
                       </div>
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-white/10">
                       <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white/5 rounded p-3 text-center">
                              <div className="text-lg font-bold text-white">50+</div>
                              <div className="text-[10px] text-muted uppercase font-mono">Institutions</div>
                           </div>
                           <div className="bg-white/5 rounded p-3 text-center">
                              <div className="text-lg font-bold text-white">10k+</div>
                              <div className="text-[10px] text-muted uppercase font-mono">Students</div>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Right: 3D Visualization */}
               <div className="relative w-full lg:w-2/3 h-[400px] lg:h-full bg-black overflow-hidden group">
                   {/* Vignette & Grids */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none"></div>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 z-0 pointer-events-none"></div>
                   
                   {/* 3D Scene */}
                   <div className="absolute inset-0 z-0">
                        <WorldGlobe selectedLocation={selectedLocation} />
                   </div>

                   {/* Overlay UI on Map */}
                   <div className="absolute top-6 right-6 z-20 flex flex-col items-end pointer-events-none">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                           <span className="text-xs font-mono text-green-500 font-bold uppercase tracking-wider">System Normal</span>
                        </div>
                        <div className="text-[10px] text-muted font-mono bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10">
                           PROJECTION: ORTHOGRAPHIC
                        </div>
                   </div>
                   
                   <div className="absolute bottom-6 left-6 z-20 pointer-events-none md:pointer-events-auto">
                        <div className="text-[10px] text-muted/50 font-mono mb-1 uppercase tracking-widest">Navigation</div>
                        <div className="flex gap-2">
                           <button onClick={() => setSelectedLocation(null)} className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded border border-white/10 transition-colors backdrop-blur-md pointer-events-auto">
                              Reset View
                           </button>
                        </div>
                   </div>
               </div>

            </div>
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