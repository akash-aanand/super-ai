import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Github, Twitter, Linkedin, Command } from 'lucide-react';
import { Button } from './ui';
import { NAV_ITEMS } from '../data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1 rounded-md">
                <Command size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Super-AI</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link to={item.path} className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors">
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                </Link>
                {/* Dropdown for desktop */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left bg-white border border-slate-200 rounded-lg shadow-xl p-2">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log in</Link>
            <Button variant="primary" to="/contact" className="!py-2 !px-4 !text-sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full px-4 pt-2 pb-6 shadow-lg h-screen overflow-y-auto">
          <div className="space-y-4">
             {NAV_ITEMS.map((item) => (
               <div key={item.label}>
                 <Link to={item.path} className="block py-2 text-base font-medium text-slate-900 border-b border-slate-100">{item.label}</Link>
                 {item.children && (
                   <div className="pl-4 space-y-2 mt-2">
                     {item.children.map((child) => (
                       <Link key={child.label} to={child.path} className="block py-2 text-sm text-slate-600">
                         {child.label}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
             ))}
             <div className="pt-4 flex flex-col space-y-3">
                <Button to="/contact" variant="primary" className="w-full">Get Started</Button>
                <Button to="/contact" variant="outline" className="w-full">Log In</Button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 lg:col-span-2 pr-8">
          <Link to="/" className="flex items-center gap-2 mb-4">
             <div className="bg-slate-900 text-white p-1 rounded-md">
                <Command size={20} />
              </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Super-AI</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
            Empowering the next generation of intelligence through scalable learning systems, advanced research, and enterprise-grade infrastructure.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/services/learning-systems" className="hover:text-slate-900">Learning Systems</Link></li>
            <li><Link to="/services/edtech" className="hover:text-slate-900">EdTech Stack</Link></li>
            <li><Link to="/services/collaborative-success" className="hover:text-slate-900">Collaboration</Link></li>
            <li><Link to="/research" className="hover:text-slate-900">Research</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/about" className="hover:text-slate-900">About Us</Link></li>
            <li><Link to="/founder" className="hover:text-slate-900">Founder</Link></li>
            <li><Link to="/blog" className="hover:text-slate-900">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="#" className="hover:text-slate-900">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-slate-900">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-slate-900">Security</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-slate-500">© 2024 Super-AI Inc. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-medium text-slate-600">Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};