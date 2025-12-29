import React from 'react';
import { Section, SectionHeader, Card, Badge, Button, Hero, MotionPage, FadeIn, Stagger } from '../components/ui';
import { BLOG_POSTS, INDUSTRIES, PARTNERS } from '../data';
import { FileText, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Blog = () => (
  <MotionPage>
  <Section>
    <SectionHeader title="Latest Insights" subtitle="Thoughts on the intersection of AI, education, and enterprise strategy." />
    <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {BLOG_POSTS.map((post) => (
        <Card key={post.id} className="p-0 overflow-hidden flex flex-col h-full hover:border-neutral-500 transition-colors">
          <div className="h-48 overflow-hidden bg-neutral-900 border-b border-border">
             <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all" 
             />
          </div>
          <div className="p-6 flex-1 flex flex-col">
             <div className="flex items-center text-xs font-mono text-muted mb-4 gap-4 uppercase tracking-wider">
                <span className="flex items-center"><Calendar size={12} className="mr-1"/> {post.date}</span>
                <span className="text-foreground">{post.category}</span>
             </div>
             <h3 className="text-lg font-bold text-foreground mb-3 hover:text-neutral-400 transition-colors cursor-pointer tracking-tight">{post.title}</h3>
             <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
             <div className="flex items-center mt-auto pt-4 border-t border-border">
                <div className="h-6 w-6 rounded-full bg-neutral-800 mr-3"></div>
                <span className="text-xs font-medium text-foreground">{post.author}</span>
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
      badge="Super-AI Labs"
      pattern="grid"
      align="left"
   />
   <Section className="pt-0">
         <Stagger className="space-y-4 max-w-4xl">
            {[1, 2, 3].map((i) => (
               <Card key={i} className="flex flex-col md:flex-row gap-6 p-6 items-start md:items-center hover:bg-neutral-900/50">
                  <div className="flex-1">
                     <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Optimizing Large Language Models for Low-Resource Hardware</h3>
                     <p className="text-muted mb-4">A novel approach to quantization that preserves 99% of reasoning capability.</p>
                     <div className="flex gap-3">
                        <span className="text-xs bg-neutral-900 px-2 py-1 rounded text-muted border border-border font-mono">Machine Learning</span>
                        <span className="text-xs bg-neutral-900 px-2 py-1 rounded text-muted border border-border font-mono">2024</span>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <Button variant="outline" className="text-xs">Download PDF</Button>
                  </div>
               </Card>
            ))}
         </Stagger>
   </Section>
   </MotionPage>
);

export const IndustriesPage = () => (
   <MotionPage>
   <Section>
      <SectionHeader title="Industries We Serve" subtitle="Vertical-specific AI solutions built on our core platform." />
      <Stagger className="grid md:grid-cols-2 gap-6">
         {INDUSTRIES.map((ind) => (
            <Card key={ind.title} className="p-8">
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-neutral-900 text-foreground rounded-md border border-border">
                     <ind.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{ind.title}</h3>
               </div>
               <p className="text-muted leading-relaxed mb-6 text-sm">
                  Specific, compliance-heavy solutions tailored for the unique challenges of the {ind.title.toLowerCase()} sector. 
                  We integrate with existing legacy systems while providing state-of-the-art inference.
               </p>
               <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1 h-1 rounded-full bg-foreground mr-2"></div> Specialized Data Models</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1 h-1 rounded-full bg-foreground mr-2"></div> Compliance & Audit Logs</li>
                  <li className="flex items-center text-xs text-muted font-mono"><div className="w-1 h-1 rounded-full bg-foreground mr-2"></div> 24/7 Expert Support</li>
               </ul>
               <Button variant="ghost" to="/contact" className="pl-0 hover:bg-transparent hover:text-foreground text-muted">Contact Sales <ArrowRight size={16} className="ml-2"/></Button>
            </Card>
         ))}
      </Stagger>
   </Section>
   </MotionPage>
);

export const PartnersPage = () => (
   <MotionPage>
   <Section>
      <SectionHeader title="Our Partners" center />
      <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {PARTNERS.map(p => (
            <Card key={p} className="h-32 flex items-center justify-center bg-black text-muted font-bold text-lg transition-all border-border hover:text-foreground hover:border-neutral-500 uppercase tracking-widest">
               {p}
            </Card>
         ))}
         {[1,2,3,4].map(i => (
             <Card key={i} className="h-32 flex items-center justify-center bg-black text-muted font-bold text-lg transition-all border-border hover:text-foreground hover:border-neutral-500 uppercase tracking-widest">
               Partner {i}
            </Card>
         ))}
      </Stagger>
      <FadeIn className="mt-20 bg-black border border-border rounded-md p-12 text-center">
         <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Become a Partner</h3>
         <p className="text-muted mb-8">Join the ecosystem and build on top of Super-AI.</p>
         <Button to="/contact" variant="primary">Apply Now</Button>
      </FadeIn>
   </Section>
   </MotionPage>
);