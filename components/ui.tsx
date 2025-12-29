import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Typography & Layout ---

export const Section = ({ children, className = '', id = '' }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const SectionHeader = ({ title, subtitle, center = false }: { title: string; subtitle?: string; center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

// --- Interactivity ---

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
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg focus:ring-slate-900 px-6 py-3 text-sm md:text-base",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 px-6 py-3 text-sm md:text-base",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900 px-6 py-3 text-sm md:text-base",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 px-4 py-2 text-sm"
  };

  const comp = (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );

  if (to) {
    return <Link to={to} className="inline-block">{comp}</Link>;
  }
  return comp;
};

export const Card = ({ children, className = '', hover = true }: { children?: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`bg-white border border-slate-200 rounded-xl p-6 md:p-8 ${hover ? 'hover:shadow-xl hover:border-slate-300 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-4">
    {children}
  </span>
);

// --- Functional Components ---

export const FeatureItem = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex flex-col items-start">
    <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-slate-900">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center mt-0.5 border border-green-100">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="ml-3 text-slate-600 text-sm md:text-base">{item}</span>
      </li>
    ))}
  </ul>
);

export const Input = ({ label, type = "text", placeholder, rows }: { label: string; type?: string; placeholder?: string; rows?: number }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    {rows ? (
      <textarea rows={rows} className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3 border" placeholder={placeholder}></textarea>
    ) : (
      <input type={type} className="w-full rounded-md border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-3 border" placeholder={placeholder} />
    )}
  </div>
);