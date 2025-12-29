import { 
  Brain, 
  Cpu, 
  Globe, 
  GraduationCap, 
  Layout, 
  Lightbulb, 
  Users, 
  Zap,
  BarChart,
  ShieldCheck,
  Code
} from 'lucide-react';
import { BlogPost, ServicePageData } from './types';

export const NAV_ITEMS = [
  { label: 'Services', path: '/services', children: [
    { label: 'Learning Systems', path: '/services/learning-systems' },
    { label: 'EdTech', path: '/services/edtech' },
    { label: 'Collaborative Success', path: '/services/collaborative-success' },
  ]},
  { label: 'Industries', path: '/industries' },
  { label: 'Research', path: '/research' },
  { label: 'Partners', path: '/partners' },
  { label: 'Company', path: '/about', children: [
    { label: 'About Us', path: '/about' },
    { label: 'Founder', path: '/founder' },
    { label: 'Blog', path: '/blog' },
  ]},
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: ' The Future of Adaptive Learning Algorithms',
    excerpt: 'How neural networks are reshaping the personalized education landscape for enterprise workforce development.',
    date: 'Oct 12, 2023',
    author: 'Dr. Sarah Chen',
    category: 'Research',
    imageUrl: 'https://picsum.photos/seed/ai1/800/600'
  },
  {
    id: '2',
    title: 'Scaling AI Infrastructure in Higher Ed',
    excerpt: 'A case study on deploying large language models across multi-campus universities efficiently.',
    date: 'Nov 05, 2023',
    author: 'James Miller',
    category: 'Case Study',
    imageUrl: 'https://picsum.photos/seed/ai2/800/600'
  },
  {
    id: '3',
    title: 'Ethical AI: Beyond Compliance',
    excerpt: 'Establishing a framework for responsible AI governance in sensitive educational data environments.',
    date: 'Dec 10, 2023',
    author: 'Elena Rodriguez',
    category: 'Ethics',
    imageUrl: 'https://picsum.photos/seed/ai3/800/600'
  }
];

export const SERVICES_DATA: Record<string, ServicePageData> = {
  'learning-systems': {
    id: 'learning-systems',
    title: 'Intelligent Learning Systems',
    subtitle: 'Adaptive. Scalable. Personalized.',
    description: 'Our flagship LMS leverages real-time inference to adapt curriculum difficulty and content style to each learner\'s unique cognitive profile.',
    features: [
      'Real-time Knowledge Graph Mapping',
      'Automated Assessment Generation',
      'Predictive Performance Analytics',
      'Multi-modal Content Delivery'
    ],
    benefits: [
      { title: 'Reduce Onboarding Time', description: 'Cut employee training time by 40% with targeted learning paths.' },
      { title: 'Increase Retention', description: 'Active recall algorithms ensure knowledge sticks long-term.' }
    ]
  },
  'edtech': {
    id: 'edtech',
    title: 'Educational Technology Stack',
    subtitle: 'Infrastructure for the AI Era.',
    description: 'A comprehensive suite of APIs and SDKs designed for educational institutions to build their own AI-native applications.',
    features: [
      'Low-latency LLM Inference APIs',
      'Student Data Privacy Vaults',
      'Semantic Search & Retrieval RAG',
      'Interactive Voice Tutors'
    ],
    benefits: [
      { title: 'Seamless Integration', description: 'Plug-and-play with Canvas, Blackboard, and Moodle.' },
      { title: 'Enterprise Security', description: 'SOC2 Type II compliant infrastructure.' }
    ]
  },
  'collaborative-success': {
    id: 'collaborative-success',
    title: 'Collaborative Success Program',
    subtitle: 'Partnership, not just vending.',
    description: 'We work directly with your leadership to identify high-impact AI opportunities and drive organizational change.',
    features: [
      'Strategic AI Roadmapping',
      'Change Management Workshops',
      'Custom Model Fine-tuning',
      'Quarterly Impact Reviews'
    ],
    benefits: [
      { title: 'Aligned Incentives', description: 'Our success is tied to your adoption metrics.' },
      { title: 'Executive Coaching', description: 'Preparing your C-suite for the AI transition.' }
    ]
  }
};

export const PARTNERS = [
  'TechGlobal', 'EduCorp', 'FutureSystems', 'InnovateUniv', 'DataFlow', 'CloudScale'
];

export const INDUSTRIES = [
  { title: 'Healthcare', icon: ShieldCheck, desc: 'Compliance-ready training for medical staff.' },
  { title: 'Finance', icon: BarChart, desc: 'High-frequency trading algorithms education.' },
  { title: 'Public Sector', icon: Globe, desc: 'Upskilling for government modernization.' },
  { title: 'Manufacturing', icon: Cpu, desc: 'IoT and predictive maintenance workflows.' },
];
