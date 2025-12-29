import React, { useState } from 'react';
import { LucideIcon, ArrowRight, Star, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- Motion Tokens ---

const EASE_EMPHASIZED = [0.2, 0, 0, 1];
const EASE_STANDARD = [0.4, 0, 0.2, 1];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: EASE_EMPHASIZED }
  }
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// --- Layout Components ---

export const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  center = false,
  className = '' 
}: { 
  title: string; 
  subtitle?: string; 
  center?: boolean;
  className?: string;
}) => (
  <FadeIn className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-muted max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
  </FadeIn>
);

// --- Motion Wrappers ---

export const MotionPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, ease: EASE_EMPHASIZED }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay, ease: EASE_STANDARD }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainerVariant}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Content Components ---

export const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-neutral-900 text-foreground border border-border uppercase">
    {children}
  </span>
);

export const Hero = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  align = 'center',
  badge,
  pattern = 'grid'
}: {
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  badge?: string;
  pattern?: string;
}) => {
  const isLeft = align === 'left';
  return (
    <section className={`relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-border bg-background ${className}`}>
      {pattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      )}
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isLeft ? 'text-left' : 'text-center'}`}>
         {badge && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_EMPHASIZED }}
                className={`mb-6 ${isLeft ? '' : 'flex justify-center'}`}
            >
                <Badge>{badge}</Badge>
            </motion.div>
         )}

         <motion.h1 
           className={`text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-5xl text-foreground ${isLeft ? '' : 'mx-auto'}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: EASE_EMPHASIZED }}
         >
           {title}
         </motion.h1>

         {subtitle && (
           <motion.p 
             className={`text-xl mb-10 max-w-2xl leading-relaxed text-muted ${isLeft ? '' : 'mx-auto'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1, ease: EASE_EMPHASIZED }}
           >
             {subtitle}
           </motion.p>
         )}

         <motion.div
            className={`flex flex-col sm:flex-row gap-4 ${isLeft ? '' : 'justify-center'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_EMPHASIZED }}
         >
            {children}
         </motion.div>
      </div>
    </section>
  );
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  to
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  to?: string;
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-foreground text-background hover:bg-neutral-300 px-6 py-3",
    secondary: "bg-background text-foreground border border-border hover:bg-neutral-900 px-6 py-3",
    outline: "border border-border bg-transparent text-muted hover:text-foreground hover:border-neutral-500 px-5 py-2",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-neutral-900 px-4 py-2"
  };

  const content = (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );

  if (to) return <Link to={to} className="inline-block">{content}</Link>;
  return content;
};

export const Card = ({ children, className = '', hover = true }: { children?: React.ReactNode; className?: string; hover?: boolean }) => (
  <motion.div 
    className={`bg-background border border-border rounded-md p-6 ${className}`}
    variants={fadeInUpVariant}
    whileHover={hover ? { borderColor: "#555", transition: { duration: 0.2 } } : {}}
  >
    {children}
  </motion.div>
);

export const FeatureItem = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex flex-col items-start h-full">
    <div className="h-10 w-10 rounded-md bg-neutral-900 border border-border flex items-center justify-center mb-6 text-foreground">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">{title}</h3>
    <p className="text-muted leading-relaxed text-sm">{description}</p>
  </div>
);

export const Accordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-border rounded-md bg-background overflow-hidden">
          <button
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-900 transition-colors"
          >
            <span className="font-medium text-foreground text-sm md:text-base pr-4">{item.question}</span>
            {activeIndex === idx ? <Minus size={16} className="text-muted" /> : <Plus size={16} className="text-muted" />}
          </button>
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 pt-0 text-muted text-sm leading-relaxed border-t border-border bg-neutral-900/30">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export const ReviewCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <Card className="h-full flex flex-col justify-between bg-neutral-950">
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="white" className="text-foreground" />
        ))}
      </div>
      <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{quote}"</p>
    </div>
    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
      <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-muted border border-border">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-xs font-bold text-foreground">{author}</p>
        <p className="text-[10px] text-muted uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </Card>
);

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neutral-900 border border-border text-foreground flex items-center justify-center mt-0.5">
          <ArrowRight size={12} />
        </div>
        <span className="ml-3 text-muted text-sm">{item}</span>
      </li>
    ))}
  </ul>
);

export const Input = ({ label, type = "text", placeholder, rows }: { label: string; type?: string; placeholder?: string; rows?: number }) => (
  <motion.div className="mb-4" variants={fadeInUpVariant}>
    <label className="block text-xs font-mono font-medium text-muted mb-2 uppercase tracking-wide">{label}</label>
    {rows ? (
      <textarea rows={rows} className="w-full rounded-md border border-border bg-background shadow-sm focus:border-white focus:ring-1 focus:ring-white sm:text-sm p-3 transition-colors duration-200 text-foreground placeholder-neutral-700 outline-none resize-none font-sans" placeholder={placeholder}></textarea>
    ) : (
      <input type={type} className="w-full rounded-md border border-border bg-background shadow-sm focus:border-white focus:ring-1 focus:ring-white sm:text-sm p-3 transition-colors duration-200 text-foreground placeholder-neutral-700 outline-none font-sans" placeholder={placeholder} />
    )}
  </motion.div>
);