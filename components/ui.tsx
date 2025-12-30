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

export const FadeIn = ({ children, delay = 0, className = '' }: { children?: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
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
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    variants={staggerContainerVariant}
    className={className}
  >
    {children}
  </motion.div>
);

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
// Uses Framer Motion transform specifically for mouse-following 3D rotation
export const BookCard = ({ grade, title, subtitle, color, accent }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform logic: Map mouse -0.5/0.5 to rotation degrees
  // RotateY handles horizontal tilt (left/right)
  // RotateX handles vertical tilt (up/down)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate normalized position (-0.5 to 0.5)
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
      className="relative w-[280px] h-[400px] flex-shrink-0 perspective-1000 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }} // Ensure perspective is set for 3D children
    >
      {/* 3D Book Container */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ z: 20, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Front Cover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${color} rounded-r-md rounded-l-sm shadow-2xl backface-hidden z-20 overflow-hidden border-l border-white/20`}
        >
           {/* Texture Overlays */}
           <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 opacity-60"></div>
           
           {/* Circuit Lines Decorative Background */}
           <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           
           {/* Gold Border / Edge Highlight */}
           <div className="absolute inset-0 border border-white/10 rounded-r-md pointer-events-none group-hover:border-accent/40 transition-colors duration-500"></div>

           {/* Content Layout matching the image */}
           <div className="relative p-5 flex flex-col h-full z-30">
              
              {/* Header: Grade + UNICEF Tag */}
              <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <div 
                        className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10"
                        style={{ backgroundColor: accent || '#10b981' }}
                    >
                        <div className="text-center leading-none text-white drop-shadow-md">
                            <span className="block text-xl font-black">{grade.replace(/\D/g, '')}</span>
                            <span className="block text-[10px] font-bold uppercase">{grade.replace(/\d/g, '')}</span>
                        </div>
                    </div>
                    {/* Circle shadow/depth */}
                    <div className="absolute top-1 left-1 h-14 w-14 rounded-full bg-black/30 blur-sm -z-10"></div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm shadow-sm mt-1">
                      <p className="text-[6px] text-black font-bold uppercase tracking-wider">UNICEF OGIP-aligned content</p>
                  </div>
              </div>

              {/* Middle: Title */}
              <div className="mt-2 text-center relative">
                  <h3 className="text-3xl font-black text-white leading-[0.9] mb-2 uppercase tracking-tight drop-shadow-lg font-sans" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 opacity-90">
                      <div className="h-px w-4 bg-white/60"></div>
                      <p className="text-white text-[8px] font-bold uppercase tracking-widest">{subtitle}</p>
                      <div className="h-px w-4 bg-white/60"></div>
                  </div>
              </div>
              
              {/* Image Placeholder Area (Simulated with abstract tech shapes) */}
              <div className="flex-1 my-4 relative rounded-lg overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  {/* Abstract Hexagon Grid */}
                  <div className="w-full h-full opacity-30" style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l10 10-10 10L0 10z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center z-20">
                     <div className="inline-block p-1 bg-black/40 rounded-full border border-white/10">
                        <Cpu size={24} className="text-white opacity-80" />
                     </div>
                  </div>
              </div>

              {/* Bottom: NEP Badge & Website */}
              <div className="flex justify-between items-end mt-auto">
                   <div 
                      className="px-2 py-1.5 rounded bg-white shadow-lg flex flex-col items-center justify-center border border-gray-200"
                      style={{ borderLeft: `4px solid ${accent || '#10b981'}` }}
                   >
                        <span className="text-[6px] text-black font-bold uppercase mb-0.5">Aligned With</span>
                        <span className="text-sm font-black text-black leading-none" style={{ color: accent || '#10b981' }}>NEP</span>
                        <span className="text-[8px] font-bold text-gray-600">2020</span>
                   </div>
                   
                   <div className="text-right">
                       <div className="flex items-center justify-end gap-1 mb-1">
                           <div className="h-1 w-1 rounded-full bg-white"></div>
                           <div className="h-1 w-1 rounded-full bg-white opacity-50"></div>
                       </div>
                       <p className="text-[7px] text-white/80 font-mono tracking-widest uppercase">www.superaip.com</p>
                   </div>
              </div>
           </div>
           
           {/* Moving Shine Effect */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-[shine_1.5s_ease-in-out_infinite] pointer-events-none z-40 mix-blend-overlay"></div>
        </div>

        {/* Spine (Left Side) */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[16px] bg-neutral-900 origin-left border-l border-white/10"
          style={{ transform: "rotateY(-90deg) translateX(-8px)" }}
        >
          <div className="w-full h-full bg-gradient-to-b from-white/20 to-black/80 flex flex-col items-center justify-center py-4">
              <span className="text-[8px] text-white font-bold rotate-90 whitespace-nowrap opacity-70 tracking-widest">{title}</span>
          </div>
        </div>

        {/* Pages (Right Side Thickness) */}
        <div 
          className="absolute right-0 top-[2px] bottom-[2px] w-[14px] bg-white origin-right"
          style={{ transform: "rotateY(-90deg) translateX(7px)" }}
        >
           <div className="w-full h-full bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px)] bg-[size:2px_100%] opacity-80 box-border border-y border-gray-300"></div>
        </div>
        
        {/* Back Cover */}
        <div 
          className={`absolute inset-0 bg-neutral-900 rounded-l-md rounded-r-sm shadow-xl`}
          style={{ transform: "translateZ(-14px) rotateY(180deg)" }}
        ></div>

        {/* Shadow Drop (Dynamic) */}
        <div 
          className="absolute top-full left-4 right-4 h-4 bg-black/60 blur-xl rounded-[100%] transition-opacity duration-300 opacity-60 group-hover:opacity-40 group-hover:scale-110"
          style={{ transform: "translateZ(-30px)" }}
        ></div>

      </motion.div>
    </motion.div>
  );
}

// --- NEW COMPONENT: Horizontal 3D Book Shelf ---
export const BookShelf = ({ books }: { books: any[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 320; // Width of card + gap
            const targetScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Auto Scroll Effect
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;
                
                if (scrollLeft >= maxScroll - 20) { // Near end
                     // Scroll back to start for loop effect
                     scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                     scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
            }
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div 
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
        >
            {/* Navigation Buttons */}
            <AnimatePresence>
                {canScrollLeft && (
                    <motion.button 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={() => scroll('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300 shadow-xl"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {canScrollRight && (
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={() => scroll('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300 shadow-xl"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Scroll Container */}
            <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-12 overflow-x-auto pb-16 pt-10 px-10 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {books.map((book, idx) => (
                    <div key={idx} className="snap-center">
                        <BookCard {...book} />
                    </div>
                ))}
            </div>

            {/* Shelf Floor Effect */}
            <div className="absolute bottom-12 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            <div className="absolute bottom-12 left-0 right-0 h-20 bg-gradient-to-b from-white/5 to-transparent blur-xl z-0 pointer-events-none"></div>
        </div>
    );
};

// --- NEW COMPONENT: Interactive Feature Row (Zig-Zag) ---
export const InteractiveFeature = ({ 
  title, 
  subtitle, 
  description, 
  items, 
  image, 
  align = 'left',
  ctaText = "Learn More",
  ctaLink = "#"
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  items: string[]; 
  image: string; 
  align?: 'left' | 'right'; 
  ctaText?: string; 
  ctaLink?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });
  
  // 3D tilt specifically for the image card
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  // Parallax scroll effect
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div ref={ref} className="py-12 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Content Side */}
      <div className={`${align === 'right' ? 'lg:order-2' : ''}`}>
         <FadeIn>
            <Badge className="mb-4">{subtitle}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">{description}</p>
            <CheckList items={items} />
            <div className="mt-8">
               <Button to={ctaLink} variant="outline" className="group">
                  {ctaText} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
         </FadeIn>
      </div>

      {/* Interactive Image Side */}
      <motion.div 
         className={`relative ${align === 'right' ? 'lg:order-1' : ''}`}
         style={{ y: yParallax, perspective: 1000 }}
         onMouseMove={handleMouseMove}
         onMouseLeave={() => { x.set(0); y.set(0); }}
      >
          <motion.div
             style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-neutral-900"
          >
             {/* Background Image */}
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${image})` }}></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
             
             {/* Overlay Elements 3D */}
             <motion.div 
               className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
               style={{ transform: "translateZ(30px)" }}
             >
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Star size={18} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Featured Program</p>
                      <p className="text-white font-bold text-sm">AICTE & NEP 2020 Aligned</p>
                   </div>
                </div>
             </motion.div>
          </motion.div>

          {/* Decorative Back Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl opacity-30 -z-10 rounded-full"></div>
      </motion.div>
    </div>
  );
}

// --- Updated Component: Tech Card for Image-based Labs ---
export const TechCard = ({ title, description, icon: Icon, image }: any) => {
    return (
        <Card noPadding className="h-full min-h-[300px] group overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
                
                {/* Holographic Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent translate-y-[-100%] group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none z-10 border-b border-accent/20"></div>
            </div>
            
            <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                <div className="mb-auto p-3 bg-neutral-950/50 backdrop-blur-md rounded-lg w-fit border border-white/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
                <div className="flex items-center text-accent text-xs font-mono uppercase tracking-widest font-bold border-t border-white/10 pt-4 mt-auto">
                    Explore Specs <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Card>
    )
}

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <motion.li 
        key={idx} 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1, duration: 0.5, ease: EASE_PREMIUM }}
        className="flex items-start group"
      >
        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mt-0.5 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
          <Check size={12} strokeWidth={3} />
        </div>
        <span className="ml-3 text-muted group-hover:text-foreground transition-colors duration-300 text-sm md:text-base">{item}</span>
      </motion.li>
    ))}
  </ul>
);

export const Input = ({ label, type = "text", placeholder, rows }: { label: string; type?: string; placeholder?: string; rows?: number }) => (
  <motion.div className="mb-6 w-full" variants={fadeInUpVariant}>
    <label className="block text-xs font-mono font-bold text-muted mb-2 uppercase tracking-widest">{label}</label>
    {rows ? (
      <textarea rows={rows} className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground placeholder-neutral-700 outline-none resize-none font-sans" placeholder={placeholder}></textarea>
    ) : (
      <input type={type} className="w-full rounded-lg border border-white/10 bg-neutral-900/50 shadow-inner focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm p-4 transition-all duration-300 text-foreground placeholder-neutral-700 outline-none font-sans" placeholder={placeholder} />
    )}
  </motion.div>
);