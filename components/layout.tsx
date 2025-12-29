import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Command, Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from './ui';
import { NAV_ITEMS } from '../data';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      style={{ 
        borderColor: `rgba(51, 51, 51, ${borderOpacity.get()})`
      }}
      className="fixed top-0 w-full z-50 border-b border-transparent bg-background/80 backdrop-blur-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-foreground text-background p-1 rounded-sm transition-transform group-hover:scale-105">
                <Command size={18} />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">Super-AI</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link to={item.path} className="text-sm font-medium text-muted hover:text-foreground flex items-center gap-1 transition-colors relative py-2">
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                </Link>
                {/* Dropdown for desktop */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 bg-background border border-border rounded-md shadow-2xl p-1">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="block px-4 py-2 text-sm text-muted hover:bg-neutral-900 hover:text-foreground rounded-sm transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Log in</Link>
            <Button variant="primary" to="/contact" className="!h-9 !px-4 !text-sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted hover:text-foreground p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
               {NAV_ITEMS.map((item) => (
                 <div key={item.label}>
                   <Link to={item.path} className="block py-2 text-sm font-medium text-foreground border-b border-border">{item.label}</Link>
                   {item.children && (
                     <div className="pl-4 space-y-2 mt-2">
                       {item.children.map((child) => (
                         <Link key={child.label} to={child.path} className="block py-2 text-sm text-muted hover:text-foreground">
                           {child.label}
                         </Link>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
               <div className="pt-4 flex flex-col space-y-3">
                  <Button to="/contact" variant="primary" className="w-full">Get Started</Button>
                  <Button to="/contact" variant="secondary" className="w-full">Log In</Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export const Footer = () => (
  <footer className="bg-background border-t border-border pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 lg:col-span-2 pr-8">
          <Link to="/" className="flex items-center gap-2 mb-4">
             <div className="bg-foreground text-background p-1 rounded-sm">
                <Command size={16} />
              </div>
            <span className="font-bold text-lg tracking-tight text-foreground">Super-AI</span>
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
            Empowering the next generation of intelligence through scalable learning systems and research.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Github size={18} /></a>
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-sm mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/services/learning-systems" className="hover:text-foreground transition-colors">Learning Systems</Link></li>
            <li><Link to="/services/edtech" className="hover:text-foreground transition-colors">EdTech Stack</Link></li>
            <li><Link to="/services/collaborative-success" className="hover:text-foreground transition-colors">Collaboration</Link></li>
            <li><Link to="/research" className="hover:text-foreground transition-colors">Research</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/founder" className="hover:text-foreground transition-colors">Founder</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground text-sm mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Security</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-muted">© 2024 Super-AI Inc. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
          <span className="text-xs font-mono text-muted">SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};