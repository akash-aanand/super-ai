import React from 'react';
import { Section, SectionHeader, Card, Badge, Button, Hero, MotionPage, FadeIn, Stagger } from '../components/ui';
import { BLOG_POSTS, INDUSTRIES, PARTNERS } from '../data';
import { FileText, Calendar, User, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Blog = () => (
  <MotionPage>
  <Hero 
    badge="Intelligence Hub"
    title="Latest Insights" 
    subtitle="Deep dives into cognitive architecture, pedagogy, and enterprise AI strategy."
    className="text-center"
  />
  
  <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
    <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BLOG_POSTS.map((post) => (
        <Card key={post.id} noPadding className="flex flex-col h-full group hover:border-accent/40 bg-neutral-900">
          <div className="h-56 overflow-hidden relative">
             <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
             <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 relative z-10" 
             />
             <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-black/50 backdrop-blur text-white border-white/20">{post.category}</Badge>
             </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
             <div className="flex items-center text-xs font-mono text-muted mb-4 gap-4 uppercase tracking-wider">
                <span className="flex items-center"><Calendar size={12} className="mr-2 text-accent"/> {post.date}</span>
             </div>
             <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
             <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
             <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center">
                   <div className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mr-3">{post.author.charAt(0)}</div>
                   <span className="text-xs font-medium text-muted">{post.author}</span>
                </div>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={16} /></span>
             </div>
          </div>
        </Card>
      ))}
    </Stagger>
  </Section>
  </MotionPage>
);

export const Research = () => (
   <MotionPage>
   <Hero
      title="Research Publications"
      subtitle="Exploring the frontiers of cognitive architecture and machine learning efficiency."
      badge="Super AIP Labs"
      pattern="grid"
      align="left"
   />
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
         <Stagger className="space-y-4 max-w-5xl">
            {[1, 2, 3].map((i) => (
               <Card key={i} className="flex flex-col md:flex-row gap-8 p-8 items-start md:items-center hover:bg-neutral-900/80 hover:border-accent/30 group">
                  <div className="flex-1">
                     <div className="flex gap-3 mb-3">
                        <span className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20 font-mono tracking-wider uppercase">Machine Learning</span>
                        <span className="text-[10px] bg-neutral-800 text-muted px-2 py-1 rounded border border-white/5 font-mono tracking-wider uppercase">Q4 2024</span>
                     </div>
                     <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Optimizing Large Language Models for Low-Resource Hardware</h3>
                     <p className="text-muted text-sm max-w-2xl">A novel approach to quantization that preserves 99% of reasoning capability while reducing VRAM usage by 60%.</p>
                  </div>
                  <div className="flex items-center">
                     <Button variant="outline" className="text-xs h-10 gap-2 hover:border-accent hover:text-accent">
                        <Download size={14} /> PDF
                     </Button>
                  </div>
               </Card>
            ))}
         </Stagger>
   </Section>
   </MotionPage>
);

export const IndustriesPage = () => (
   <MotionPage>
   <Hero
     badge="Verticals"
     title="Sector Specific Solutions"
     subtitle="Compliance-ready AI infrastructure tailored for highly regulated industries."
     className="text-center"
   />
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
      <Stagger className="grid md:grid-cols-2 gap-8">
         {INDUSTRIES.map((ind) => (
            <Card key={ind.title} className="p-10 hover:border-accent/50 group">
               <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-neutral-900/50 text-accent rounded-xl border border-white/10 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                     <ind.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{ind.title}</h3>
               </div>
               <p className="text-muted leading-relaxed mb-8 text-base">
                  Specific, compliance-heavy solutions tailored for the unique challenges of the {ind.title.toLowerCase()} sector. 
                  We integrate with existing legacy systems while providing state-of-the-art inference.
               </p>
               <div className="bg-neutral-950 rounded-lg p-6 border border-white/5 space-y-3 mb-8">
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> Specialized Data Models</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> SOC2 & HIPAA Compliance</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div> 24/7 Expert Support</li>
               </div>
               <Button variant="outline" to="/contact" className="w-full group-hover:border-accent group-hover:text-accent">Contact Sales Team</Button>
            </Card>
         ))}
      </Stagger>
   </Section>
   </MotionPage>
);

export const PartnersPage = () => (
   <MotionPage>
   <Hero
      badge="Ecosystem"
      title="Strategic Partners"
      subtitle="We collaborate with world-class organizations to build the future of AI."
      className="text-center"
   />
   <Section className="relative z-10 pt-0 mt-8 md:mt-12 lg:-mt-24">
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[...PARTNERS, "Partner 7", "Partner 8"].map(p => (
            <Card key={p} className="h-40 flex items-center justify-center bg-neutral-900/30 text-muted/50 font-bold text-xl transition-all border-white/5 hover:text-accent hover:border-accent/30 hover:bg-neutral-900 hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] uppercase tracking-widest">
               {p}
            </Card>
         ))}
      </Stagger>
      
      <FadeIn className="mt-24">
        <Card className="bg-gradient-to-r from-neutral-900 to-black border-accent/20 p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full"></div>
           <h3 className="text-3xl font-bold text-foreground mb-4 relative z-10">Become a Partner</h3>
           <p className="text-muted mb-10 max-w-2xl mx-auto relative z-10">Join the Super AIP ecosystem. Gain early access to our models, dedicated engineering support, and revenue sharing opportunities.</p>
           <Button to="/contact" variant="gold" className="relative z-10">Apply for Partnership</Button>
        </Card>
      </FadeIn>
   </Section>
   </MotionPage>
);