import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon, ArrowRight, Star, Plus, Minus, Check, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

// --- Motion Tokens ---

const EASE_PREMIUM: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // Smooth ease

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: EASE_PREMIUM }
  }
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// --- Layout Components ---

export const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-0 w-full ${className}`}>
    {children}
  </section>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  center = false,
  className = '',
  badge
}: { 
  title: string; 
  subtitle?: string; 
  center?: boolean;
  className?: string;
  badge?: string;
}) => (
  <FadeIn className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
    {badge && <Badge className="mb-4">{badge}</Badge>}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 bg-clip-text">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl text-muted leading-relaxed ${center ? 'mx-auto' : ''} max-w-2xl`}>
        {subtitle}
      </p>
    )}
  </FadeIn>
);

// --- Motion Wrappers ---

export const MotionPage = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: EASE_PREMIUM }}
    className="w-full relative overflow-x-hidden" // Guard against horizontal scroll
  >
    {children}
  </motion.div>
);

export const FadeIn: React.FC<{ children?: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Relaxed viewport trigger
    variants={{
      hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
      visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transition: { duration: 0.7, delay, ease: EASE_PREMIUM }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainerVariant}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScrollReveal3D: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <motion.div 
            ref={ref}
            style={{ 
                rotateX, 
                opacity,
                scale,
                transformPerspective: 1000 
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// --- Content Components ---

export const Badge = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-bold tracking-widest bg-accent/10 text-accent border border-accent/20 uppercase ${className}`}>
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
  pattern = 'grid',
  scene
}: {
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  badge?: string;
  pattern?: string;
  scene?: React.ReactNode;
}) => {
  const isLeft = align === 'left';
  return (
    <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-background w-full ${className}`}>
      {/* 3D Scene Background Layer */}
      {scene && (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none h-full w-full overflow-hidden">
          {scene}
        </div>
      )}

      {/* Background Effects (Fallback or Complementary) */}
      {!scene && pattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      )}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isLeft ? 'text-left' : 'text-center'}`}>
         {badge && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                className={`mb-6 md:mb-8 ${isLeft ? '' : 'flex justify-center'}`}
            >
                <Badge>{badge}</Badge>
            </motion.div>
         )}

         <motion.h1 
           className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-5xl text-foreground break-words ${isLeft ? '' : 'mx-auto'}`}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: EASE_PREMIUM }}
         >
           {title}
         </motion.h1>

         {subtitle && (
           <motion.p 
             className={`text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl leading-relaxed text-muted/80 ${isLeft ? '' : 'mx-auto'}`}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
           >
             {subtitle}
           </motion.p>
         )}

         <motion.div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-5 ${isLeft ? '' : 'justify-center items-center'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_PREMIUM }}
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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  className?: string;
  onClick?: () => void;
  to?: string;
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none tracking-wide";
  const variants = {
    primary: "bg-foreground text-background hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] px-6 py-3",
    secondary: "bg-background text-foreground border border-border hover:border-accent/50 hover:text-accent px-6 py-3",
    outline: "border border-border bg-transparent text-muted hover:text-foreground hover:border-foreground px-5 py-2",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-neutral-900 px-4 py-2",
    gold: "bg-accent text-black hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] px-6 py-3 font-semibold"
  };

  const content = (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (to) return <Link to={to} className="inline-block">{content}</Link>;
  return content;
};

export interface CardProps {
  children?: React.ReactNode; 
  className?: string; 
  hover?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, noPadding = false }) => (
  <motion.div 
    className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F]/80 backdrop-blur-md h-full flex flex-col ${noPadding ? 'p-0' : 'p-6 md:p-8'} ${className}`}
    variants={fadeInUpVariant}
    whileHover={hover ? { 
      y: -8, 
      scale: 1.01, 
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
      borderColor: "rgba(197,160,89, 0.4)",
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    } : {}}
    whileTap={hover ? { scale: 0.98 } : {}}
  >
    {hover && (
      <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 rounded-2xl transition-colors duration-500 pointer-events-none" />
    )}
    {hover && (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    )}
    
    <div className={`relative z-10 h-full w-full ${noPadding ? '' : 'flex flex-col'}`}>
      {children}
    </div>
  </motion.div>
);

// --- NEW COMPONENT: Spotlight 3D Card ---
interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  enableTilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  backgroundImage,
  enableTilt = true
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    
    // Tilt calculations
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal3D className="h-full">
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl ${className}`}
      style={{
         perspective: 1000,
      }}
    >
       <motion.div 
         className="h-full relative preserve-3d"
         style={{
            rotateX: enableTilt ? rotateX : 0,
            rotateY: enableTilt ? rotateY : 0,
            transformStyle: "preserve-3d"
         }}
       >
        <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(197, 160, 89, 0.15), transparent 40%)`,
            }}
        />
        
        {/* Background Image Layer */}
        {backgroundImage && (
            <div className="absolute inset-0 z-0">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col transform-gpu">
            {children}
        </div>

        {/* Border Glow */}
        <div
            className="pointer-events-none absolute inset-0 rounded-xl transition duration-300"
            style={{
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(197, 160, 89, 0.3), transparent 40%)`,
                opacity: opacity,
                maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px'
            }}
        />
      </motion.div>
    </motion.div>
    </ScrollReveal3D>
  );
};

export const FeatureItem = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex flex-col items-start h-full w-full">
    <div className="h-12 w-12 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center mb-6 text-accent shadow-lg group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] transition-all duration-300">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{title}</h3>
    <p className="text-muted leading-relaxed text-sm">{description}</p>
  </div>
);

export const Accordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 w-full">
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={false}
          whileHover={{ x: 4, backgroundColor: 'rgba(23, 23, 23, 0.8)' }}
          className={`border rounded-lg bg-neutral-900/20 overflow-hidden transition-colors duration-300 ${activeIndex === idx ? 'border-accent/30 bg-neutral-900/40' : 'border-white/5 hover:border-white/10'}`}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className={`font-medium text-base md:text-lg pr-4 transition-colors ${activeIndex === idx ? 'text-accent' : 'text-foreground'}`}>{item.question}</span>
            {activeIndex === idx ? <Minus size={18} className="text-accent flex-shrink-0" /> : <Plus size={18} className="text-muted flex-shrink-0" />}
          </button>
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              >
                <div className="p-6 pt-0 text-muted text-sm md:text-base leading-relaxed max-w-3xl">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export const ReviewCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <Card className="h-full flex flex-col justify-between !bg-neutral-950/50">
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#C5A059" className="text-accent" />
        ))}
      </div>
      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-8 italic">"{quote}"</p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-sm font-bold text-accent border border-white/10">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{author}</p>
        <p className="text-xs text-muted uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </Card>
);

// --- 3D INTERACTIVE BOOK CARD ---
// Updated to match specific 2:3 vertical layout with torn paper effect
export const BookCard = ({ grade, title, subtitle, color, gradeColor, nepColor, accent, image }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Fallback for older data structure if needed, though data.ts is updated.
  const finalGradeColor = gradeColor || accent || '#10b981';
  const finalNepColor = nepColor || accent || '#10b981';

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeInUpVariant}
      className="relative w-[300px] h-[450px] flex-shrink-0 perspective-1000 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ translateZ: 20, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Front Cover */}
        <div 
          className={`absolute inset-0 ${color} shadow-2xl backface-hidden z-20 overflow-hidden rounded-r-lg border-l-2 border-black/20`}
        >
           {/* Circuit Pattern Overlay */}
           <div className="absolute inset-0 opacity-30" style={{ 
               backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', 
               backgroundSize: '20px 20px, 40px 40px, 40px 40px' 
           }}>
              {/* Tech Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10,10 L50,10 L50,50" fill="none" stroke="black" strokeWidth="1" />
                 <circle cx="50" cy="50" r="3" fill="black" />
                 <path d="M280,400 L240,400 L240,350" fill="none" stroke="black" strokeWidth="1" />
                 <circle cx="240" cy="350" r="3" fill="black" />
              </svg>
           </div>
           
           <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 mix-blend-overlay"></div>
           
           {/* Top Content Layout */}
           <div className="relative p-6 flex flex-col h-full z-30">
              
              {/* Header: Grade + UNICEF Tag */}
              <div className="flex justify-between items-start mb-4 relative z-20">
                  {/* Circular Grade Badge - Top Left */}
                  <div className="relative -ml-4 -mt-4">
                    <div 
                        className="h-20 w-20 rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-[3px] border-white relative z-10 bg-white"
                    >
                        <div 
                          className="w-full h-full rounded-full flex flex-col items-center justify-center text-white"
                          style={{ backgroundColor: finalGradeColor }}
                        >
                            <span className="block text-3xl font-black leading-none drop-shadow-sm">{(grade || '').replace(/\D/g, '')}</span>
                            <span className="block text-[10px] font-bold uppercase leading-none mt-0.5 drop-shadow-sm">{(grade || '').replace(/\d/g, '')}</span>
                        </div>
                    </div>
                  </div>

                  {/* Top Strip Label - Enhanced to look like screenshot pill */}
                  <div className="bg-white px-3 py-1.5 rounded-full shadow-lg mt-0 border border-gray-100 relative -mr-4 flex items-center">
                      <p className="text-[7px] text-neutral-900 font-bold uppercase tracking-widest text-center">UNICEF OGIP-aligned content</p>
                  </div>
              </div>

              {/* Title Section - Centered */}
              <div className="text-center relative z-10 mb-6">
                  <h3 className="text-3xl font-black text-white leading-[0.9] mb-2 uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] font-sans">
                    {title}
                  </h3>
                  <div className="flex items-center justify-center gap-3 opacity-90">
                      <div className="h-px w-6 bg-white/80"></div>
                      <p className="text-white text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] drop-shadow-sm">{subtitle}</p>
                      <div className="h-px w-6 bg-white/80"></div>
                  </div>
              </div>
              
              {/* Central Image with Torn Paper Effect */}
              {/* FIX: Ensure min-height and proper clipping so image is visible */}
              <div className="relative flex-1 w-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-500 min-h-[150px]">
                  <div 
                    className="absolute inset-0 bg-white z-0 transform scale-[1.03]" 
                    style={{ 
                        clipPath: "polygon(0% 10%, 5% 5%, 10% 8%, 15% 3%, 20% 8%, 25% 4%, 30% 9%, 35% 2%, 40% 8%, 45% 3%, 50% 9%, 55% 4%, 60% 8%, 65% 3%, 70% 9%, 75% 2%, 80% 8%, 85% 3%, 90% 8%, 95% 4%, 100% 9%, 100% 90%, 95% 95%, 90% 92%, 85% 96%, 80% 91%, 75% 95%, 70% 90%, 65% 94%, 60% 91%, 55% 95%, 50% 90%, 45% 95%, 40% 90%, 35% 95%, 30% 91%, 25% 96%, 20% 92%, 15% 95%, 10% 90%, 5% 95%, 0% 90%)" 
                    }}
                  ></div>
                  <div 
                    className="relative w-full h-full overflow-hidden z-10 bg-neutral-800"
                    style={{ 
                        clipPath: "polygon(0% 10%, 5% 5%, 10% 8%, 15% 3%, 20% 8%, 25% 4%, 30% 9%, 35% 2%, 40% 8%, 45% 3%, 50% 9%, 55% 4%, 60% 8%, 65% 3%, 70% 9%, 75% 2%, 80% 8%, 85% 3%, 90% 8%, 95% 4%, 100% 9%, 100% 90%, 95% 95%, 90% 92%, 85% 96%, 80% 91%, 75% 95%, 70% 90%, 65% 94%, 60% 91%, 55% 95%, 50% 90%, 45% 95%, 40% 90%, 35% 95%, 30% 91%, 25% 96%, 20% 92%, 15% 95%, 10% 90%, 5% 95%, 0% 90%)" 
                    }}
                  >
                      {image ? (
                        <>
                          <img src={image} alt={title} className="w-full h-full object-cover opacity-90 relative z-20" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-30"></div>
                          {/* Tech Overlay Elements inside image */}
                          <div className="absolute top-3 right-3 flex gap-1 z-40">
                             <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                             <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                          </div>
                          <div className="absolute bottom-3 left-3 border border-white/40 rounded px-1.5 py-0.5 bg-black/40 backdrop-blur-sm z-40">
                             <div className="text-[6px] font-mono text-white/90 tracking-widest">AI.EDU.V1</div>
                          </div>
                        </>
                      ) : (
                         <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                            <Cpu className="text-white/20" size={48} />
                         </div>
                      )}
                  </div>
              </div>

              {/* Bottom: NEP Badge & Website */}
              <div className="flex justify-between items-end mt-auto z-10 pt-2">
                   {/* NEP Badge - Styled like the sticker in screenshot */}
                   <div 
                      className="bg-white rounded-lg shadow-lg p-[2px] transform -rotate-2 origin-bottom-left"
                   >
                        <div 
                            className="rounded-md px-2 py-1.5 flex flex-col items-center justify-center"
                            style={{ backgroundColor: finalNepColor }}
                        >
                            <span className="text-[5px] text-white font-bold uppercase leading-none mb-0.5 tracking-wider opacity-90">Aligned With</span>
                            <span className="text-[12px] font-black text-white leading-none tracking-wide">NEP</span>
                            <span className="text-[8px] font-bold text-white leading-none mt-0.5 tracking-wider">2020</span>
                        </div>
                   </div>
                   
                   {/* Branding */}
                   <div className="text-right">
                       <div className="flex items-center justify-end gap-1.5 mb-1.5">
                           <div className="h-1.5 w-1.5 rounded-full bg-white shadow-sm"></div>
                           <div className="h-1.5 w-1.5 rounded-full bg-white/50"></div>
                           <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-sm border border-white/20">
                          <p className="text-[7px] text-white font-bold font-mono tracking-widest uppercase">www.superaip.com</p>
                       </div>
                   </div>
              </div>
           </div>
        </div>

        {/* Spine */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[16px] bg-neutral-900 origin-left border-l border-white/10"
          style={{ transform: "rotateY(-90deg) translateX(-8px)" }}
        ></div>

        {/* Pages Thickness */}
        <div 
          className="absolute right-0 top-[2px] bottom-[2px] w-[14px] bg-white origin-right"
          style={{ transform: "rotateY(-90deg) translateX(7px)" }}
        >
           <div className="w-full h-full bg-[linear-gradient(to_right,#ccc_1px,transparent_1px)] bg-[size:2px_100%] opacity-50 box-border border-y border-gray-300"></div>
        </div>
        
        {/* Back Cover */}
        <div 
          className={`absolute inset-0 bg-neutral-800 rounded-l-lg`}
          style={{ transform: "translateZ(-14px) rotateY(180deg)" }}
        ></div>

      </motion.div>
    </motion.div>
  );
}

// Input Component
export const Input = ({ label, type = "text", rows, placeholder, className = "" }: { label: string; type?: string; rows?: number; placeholder?: string; className?: string }) => (
  <div className={`mb-6 ${className}`}>
    <label className="block text-xs font-mono font-bold text-muted mb-2 uppercase tracking-widest">{label}</label>
    {rows ? (
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground outline-none placeholder-neutral-700 resize-none"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground outline-none placeholder-neutral-700"
      />
    )}
  </div>
);

// CheckList Component
export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start text-sm text-muted">
        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(197,160,89,0.5)]"></div>
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

// TechCard Component
export const TechCard = ({ title, description, icon: Icon, image }: { title: string; description: string; icon: any; image: string }) => (
    <SpotlightCard backgroundImage={image}>
        <div className="flex flex-col h-full relative z-10">
            <div className="h-12 w-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 text-accent backdrop-blur-md">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
        </div>
    </SpotlightCard>
);

// BookShelf Component
export const BookShelf = ({ books }: { books: any[] }) => {
    return (
        <div className="w-full overflow-x-auto pb-12 pt-4 px-4 custom-scrollbar">
            <div className="flex gap-8 w-max mx-auto">
                {books.map((book, idx) => (
                    <BookCard key={idx} {...book} accent={book.gradeColor} />
                ))}
            </div>
        </div>
    );
};

// InteractiveFeature Component
export const InteractiveFeature = ({ title, subtitle, description, items, image, align = 'left', ctaLink, ctaText }: any) => {
    const isLeft = align === 'left';
    return (
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-12 md:py-20 border-b border-white/5 last:border-0`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-r ${isLeft ? 'from-accent/20 to-transparent' : 'from-transparent to-accent/20'} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-full`}></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl bg-neutral-800" style={{ aspectRatio: '16/9' }}>
                    <img 
                        src={image} 
                        alt={title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" 
                    />
                    
                    {/* UI Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                             <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Active Module</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
                <div className="mb-2 flex items-center gap-3">
                    <span className="h-px w-8 bg-accent"></span>
                    <span className="text-accent font-mono text-xs uppercase tracking-widest">{subtitle}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">{description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {items.map((item: string, i: number) => (
                        <div key={i} className="flex items-center text-sm text-white/80">
                            <Check size={14} className="text-accent mr-2" />
                            {item}
                        </div>
                    ))}
                </div>

                <Button to={ctaLink} variant="outline" className="group">
                    {ctaText} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
};

// EnterpriseScrollSection Component
export const EnterpriseScrollSection = ({ items }: { items: any[] }) => {
    return (
        <div className="py-20 space-y-32">
            {items.map((item, idx) => (
                <div key={idx} className="relative group">
                    {/* Background number */}
                    <div className="absolute -top-20 -left-10 text-[200px] font-black text-white/5 select-none pointer-events-none z-0">
                        0{idx + 1}
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 px-4 max-w-7xl mx-auto">
                        <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                             <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl group-hover:border-accent/30 transition-colors duration-500">
                                 <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                             </div>
                        </div>
                        
                        <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                             <div className="flex items-center gap-4 mb-6">
                                 <div className="p-3 bg-neutral-900 border border-white/10 rounded-lg text-accent">
                                     <item.icon size={32} />
                                 </div>
                                 <span className="text-sm font-mono text-accent uppercase tracking-widest">{item.subtitle}</span>
                             </div>
                             
                             <h2 className="text-4xl font-bold text-white mb-6">{item.title}</h2>
                             <p className="text-lg text-muted leading-relaxed mb-8">{item.description}</p>
                             
                             <div className="space-y-4 border-t border-white/5 pt-8">
                                 {item.features.map((feat: string, fIdx: number) => (
                                     <div key={fIdx} className="flex items-center text-white/80">
                                         <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_5px_#C5A059]"></div>
                                         {feat}
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}