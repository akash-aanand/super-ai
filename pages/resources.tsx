import React from 'react';
import { Section, SectionHeader, Card, Badge, Button } from '../components/ui';
import { BLOG_POSTS, INDUSTRIES, PARTNERS } from '../data';
import { FileText, Calendar, User, ArrowRight } from 'lucide-react';

export const Blog = () => (
  <Section>
    <SectionHeader title="Latest Insights" subtitle="Thoughts on the intersection of AI, education, and enterprise strategy." />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BLOG_POSTS.map((post) => (
        <article key={post.id} className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer">
          <div className="h-48 overflow-hidden">
             <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 flex-1 flex flex-col">
             <div className="flex items-center text-xs text-slate-500 mb-4 gap-4">
                <span className="flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                <span className="text-blue-600 font-medium">{post.category}</span>
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
             <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
             <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                <div className="h-8 w-8 rounded-full bg-slate-200 mr-3"></div>
                <span className="text-sm font-medium text-slate-900">{post.author}</span>
             </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export const Research = () => (
   <Section>
      <div className="max-w-4xl mx-auto">
         <Badge>Super-AI Labs</Badge>
         <h1 className="text-4xl font-bold text-slate-900 mb-12">Research Publications</h1>
         
         <div className="space-y-6">
            {[1, 2, 3].map((i) => (
               <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-1">
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Optimizing Large Language Models for Low-Resource Hardware</h3>
                     <p className="text-slate-600 mb-4">A novel approach to quantization that preserves 99% of reasoning capability.</p>
                     <div className="flex gap-3">
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Machine Learning</span>
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">2024</span>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <Button variant="outline" className="text-sm">Download PDF</Button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </Section>
);

export const IndustriesPage = () => (
   <Section>
      <SectionHeader title="Industries We Serve" subtitle="Vertical-specific AI solutions built on our core platform." />
      <div className="grid md:grid-cols-2 gap-8">
         {INDUSTRIES.map((ind) => (
            <Card key={ind.title} className="p-8">
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                     <ind.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{ind.title}</h3>
               </div>
               <p className="text-slate-600 leading-relaxed mb-6">
                  Specific, compliance-heavy solutions tailored for the unique challenges of the {ind.title.toLowerCase()} sector. 
                  We integrate with existing legacy systems while providing state-of-the-art inference.
               </p>
               <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div> Specialized Data Models</li>
                  <li className="flex items-center text-sm text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div> Compliance & Audit Logs</li>
                  <li className="flex items-center text-sm text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div> 24/7 Expert Support</li>
               </ul>
               <Button variant="ghost" to="/contact" className="pl-0 hover:bg-transparent hover:text-blue-600">Contact Sales <ArrowRight size={16} className="ml-2"/></Button>
            </Card>
         ))}
      </div>
   </Section>
);

export const PartnersPage = () => (
   <Section>
      <SectionHeader title="Our Partners" center />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {PARTNERS.map(p => (
            <div key={p} className="h-32 flex items-center justify-center border border-slate-200 rounded-lg bg-slate-50 text-slate-400 font-bold text-xl hover:bg-white hover:shadow-lg transition-all">
               {p}
            </div>
         ))}
         {/* More Placeholders */}
         {[1,2,3,4].map(i => (
             <div key={i} className="h-32 flex items-center justify-center border border-slate-200 rounded-lg bg-slate-50 text-slate-400 font-bold text-xl hover:bg-white hover:shadow-lg transition-all">
               Partner {i}
            </div>
         ))}
      </div>
      <div className="mt-20 bg-slate-900 rounded-2xl p-12 text-center">
         <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
         <p className="text-slate-400 mb-8">Join the ecosystem and build on top of Super-AI.</p>
         <Button to="/contact" className="bg-white text-slate-900">Apply Now</Button>
      </div>
   </Section>
);
