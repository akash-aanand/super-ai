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
  Code,
  BookOpen,
  Bot,
  Terminal,
  Server
} from 'lucide-react';
import { BlogPost, ServicePageData } from './types';

export const NAV_ITEMS = [
  { label: 'About Us', path: '/about', children: [
    { label: 'Company Profile', path: '/about' },
    { label: 'Leadership Team', path: '/founder' },
    { label: 'Blog', path: '/blog' },
  ]},
  { label: 'Education Solutions', path: '/services', children: [
    { label: 'K-12 AI Programs', path: '/services/k12' },
    { label: 'Higher Education', path: '/services/higher-ed' },
    { label: 'Super AI Labs', path: '/services/labs' },
    { label: 'AI Textbooks', path: '/services/textbooks' },
    { label: 'Teacher Training', path: '/services/teacher-training' },
  ]},
  { label: 'Enterprise Solutions', path: '/services/corporate', children: [
    { label: 'AI Chatbots', path: '/services/chatbots' },
    { label: 'Sector Specific', path: '/industries' },
  ]},
  { label: 'Partners', path: '/partners' },
  { label: 'Research', path: '/research' },
  { label: 'Contact Us', path: '/contact' },
];

export const BOOK_SERIES = [
  {
    grade: "1st",
    title: "Tiny Techies",
    subtitle: "Coding and AI for Young Learners",
    color: "from-sky-300 via-cyan-400 to-blue-500",
    accent: "#ec4899" // Pink accent for circle
  },
  {
    grade: "2nd",
    title: "Smart Start",
    subtitle: "Coding and AI for Young Learners",
    color: "from-orange-200 via-orange-300 to-rose-400",
    accent: "#10b981" // Green accent
  },
  {
    grade: "3rd",
    title: "Digital Buddies",
    subtitle: "Computers and AI for Beginners",
    color: "from-yellow-300 via-amber-400 to-yellow-500",
    accent: "#ef4444" // Red accent
  },
  {
    grade: "4th",
    title: "Code Quest",
    subtitle: "Discovering AI and Computer",
    color: "from-green-300 via-emerald-400 to-green-600",
    accent: "#3b82f6" // Blue accent
  },
  {
    grade: "5th",
    title: "Tech Explorers",
    subtitle: "A Journey into Computers and AI",
    color: "from-purple-400 via-purple-500 to-indigo-600",
    accent: "#10b981" // Green accent
  },
  {
    grade: "6th",
    title: "Code Create Conquer",
    subtitle: "AI and Computer Application",
    color: "from-blue-500 via-cyan-600 to-blue-700",
    accent: "#84cc16" // Lime accent
  },
  {
    grade: "7th",
    title: "The Tech World",
    subtitle: "Exploring Computer With AI",
    color: "from-orange-400 via-red-500 to-red-600",
    accent: "#0ea5e9" // Sky accent
  },
  {
    grade: "8th",
    title: "Future Ready",
    subtitle: "AI and Computer Skills for Tomorrow",
    color: "from-violet-600 via-purple-700 to-purple-900",
    accent: "#f43f5e" // Rose accent
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Bridging the Academia-Industry Gap',
    excerpt: 'How AICTE-aligned virtual internships are solving the employability crisis for engineering graduates.',
    date: 'Oct 12, 2023',
    author: 'Editorial Team',
    category: 'Education Policy',
    imageUrl: 'https://picsum.photos/seed/ai1/800/600'
  },
  {
    id: '2',
    title: 'The Role of NEAT in Modern Education',
    excerpt: 'Understanding the National Educational Alliance for Technology and its impact on student skilling.',
    date: 'Nov 05, 2023',
    author: 'Tech Policy Desk',
    category: 'Government Initiatives',
    imageUrl: 'https://picsum.photos/seed/ai2/800/600'
  },
  {
    id: '3',
    title: 'AI in Faculty Development',
    excerpt: 'Why upskilling professors is the first step towards an AI-native campus environment.',
    date: 'Dec 10, 2023',
    author: 'Learning & Dev',
    category: 'FDP',
    imageUrl: 'https://picsum.photos/seed/ai3/800/600'
  }
];

export const SERVICES_DATA: Record<string, ServicePageData> = {
  'k12': {
    id: 'k12',
    title: 'K-12 AI Programs',
    subtitle: 'Inspiring Young Innovators from Grade 1 to 12.',
    description: 'Our K-12 curriculum introduces students to the world of Artificial Intelligence through hands-on learning, coding, simulations, and real-world problem-solving. Aligned with NEP 2020 and global AI ethics standards.',
    features: [
      'AI Basics & Generative AI',
      'Block-based & Python Coding',
      'Math, Science & Language Tools',
      '21st Century Skill Development'
    ],
    benefits: [
      { title: 'Future Readiness', description: 'Prepares students for a tech-driven future from an early age.' },
      { title: 'Cognitive Growth', description: 'Enhances critical thinking and logical reasoning skills.' }
    ]
  },
  'higher-ed': {
    id: 'higher-ed',
    title: 'Higher Education Bridging',
    subtitle: 'AI Skill Development for Universities & Colleges.',
    description: 'Tailored for BCA, B.Sc, B.Tech, BBA, and MBA programs. We bridge the gap between academic theory and industry application through integrated modules and capstone projects.',
    features: [
      'Foundations of AI & ML',
      'Generative AI & LLM Tools',
      'Capstone Projects',
      'Internship & Placement Support'
    ],
    benefits: [
      { title: 'Employability', description: 'Produces AI-skilled graduates ready for high-growth careers.' },
      { title: 'Industry Relevance', description: 'Curriculum updated in real-time with industry trends.' }
    ]
  },
  'labs': {
    id: 'labs',
    title: 'Super AI Labs',
    subtitle: 'Next-Gen Robotics & AI Innovation Hub.',
    description: 'A future-ready innovation space that immerses students in AI, Robotics, and Automation. Features plug-and-play tools and ready curriculum to turn imagination into intelligent solutions.',
    features: [
      'AI Dog Robots (Gesture/Voice Control)',
      'Self-Driving Car Kits',
      'Modular Robot Arms',
      'Generative AI Stations',
      'Edge AI & Vision Tools'
    ],
    benefits: [
      { title: 'Hands-on Application', description: 'Students build smart waste sorters, emotion detectors, and more.' },
      { title: 'Infrastructure', description: 'Complete hardware and software ecosystem setup.' }
    ]
  },
  'textbooks': {
    id: 'textbooks',
    title: 'AI Textbooks (Grades 1-12)',
    subtitle: 'Making complex concepts simple and exciting.',
    description: 'Comprehensive AI textbooks aligned with NCERT, CBSE, and NEP guidelines. Titles include "Tech Explorers", "Code Create Conquer", and "Future Ready".',
    features: [
      'Interactive Stories & Visuals',
      'Integrated Coding Exercises',
      'Teacher Lesson Plans',
      'Assessments & Projects'
    ],
    benefits: [
      { title: 'Standardized Learning', description: 'Ensures consistent quality of AI education across grades.' },
      { title: 'Engagement', description: 'Gamified content keeps young learners interested.' }
    ]
  },
  'teacher-training': {
    id: 'teacher-training',
    title: 'AI for Teacher Training',
    subtitle: 'Empowering Educators to Lead with AI.',
    description: 'We equip teachers with the skills and confidence to integrate AI into their teaching practice, covering ethics, bias, and automated lesson planning.',
    features: [
      'AI Tools for Classroom',
      'Ethics & Responsible AI',
      'Automated Lesson Planning',
      'Student-facing Tool Training'
    ],
    benefits: [
      { title: 'Efficiency', description: 'Reduces administrative workload for teachers.' },
      { title: 'Modern Pedagogy', description: 'Enables tech-rich learning environments.' }
    ]
  },
  'chatbots': {
    id: 'chatbots',
    title: 'Enterprise AI Chatbots',
    subtitle: 'Intelligent Conversation Systems for Institutions.',
    description: 'Deploy advanced chatbots for administration, student support, and learning assistance. We offer SLM (Small Language Models) for cost-effective, fast responses.',
    features: [
      'SLM Chatbots (Fast, Offline-ready)',
      'Neura-AI Chatbots (Lightweight LLMs)',
      'WhatsApp Form-Based Bots',
      'FAQ Structured Bots'
    ],
    benefits: [
      { title: '24/7 Support', description: 'Instant answers for student and parent queries.' },
      { title: 'Data Collection', description: 'Structured data gathering via conversational flows.' }
    ]
  }
};

export const PARTNERS = [
  'AICTE', 'Ministry of Education', 'NEAT', 'AWS', 'Google', 'Microsoft'
];

// Lat/Long approximate coordinates for 3D placement
export const GLOBAL_PRESENCE = [
  { name: "India", lat: 20.59, lng: 78.96 },
  { name: "Mexico", lat: 23.63, lng: -102.55 },
  { name: "United States (USA)", lat: 37.09, lng: -95.71 },
  { name: "Canada", lat: 56.13, lng: -106.34 },
  { name: "Italy", lat: 41.87, lng: 12.56 },
  { name: "Ghana", lat: 7.94, lng: -1.02 },
  { name: "Oman", lat: 21.47, lng: 55.97 },
  { name: "Bahrain", lat: 26.06, lng: 50.55 },
  { name: "Sri Lanka", lat: 7.87, lng: 80.77 },
  { name: "Malaysia", lat: 4.21, lng: 101.97 },
  { name: "United Kingdom (UK)", lat: 55.37, lng: -3.43 },
  { name: "Caribbean Islands", lat: 18.00, lng: -66.00 }, // Approximate center
  { name: "South Africa", lat: -30.55, lng: 22.93 },
  { name: "United Arab Emirates (Dubai)", lat: 23.42, lng: 53.84 }
];

export const INDUSTRIES = [
  { title: 'Higher Education', icon: GraduationCap, desc: 'Universities and Engineering Colleges.' },
  { title: 'Government', icon: Globe, desc: 'Public sector skilling initiatives.' },
  { title: 'Technology', icon: Cpu, desc: 'Corporate training and assessment.' },
  { title: 'Research', icon: Brain, desc: 'R&D labs and innovation hubs.' },
];

export const FAQS = [
  {
    question: "Is Super AI Polaris AICTE approved?",
    answer: "Yes, Super AI Polaris is a recognized corporate partner for AICTE Internships, ensuring our programs meet strict government quality standards."
  },
  {
    question: "How do the Virtual Internships work?",
    answer: "Students access our cloud-based platform to complete modules and projects. Mentorship is provided virtually, allowing students to learn from anywhere."
  },
  {
    question: "Do you offer certificates?",
    answer: "Yes, upon successful completion, students receive industry-recognized certificates that are valid for academic credits in many universities."
  },
  {
    question: "What is included in the Super AI Lab?",
    answer: "The lab includes hardware like AI Dog Robots, Self-Driving Car kits, and workstations, along with a complete software curriculum."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The internship provided me with real-world exposure that my textbooks never could. The project experience helped me land my first job.",
    author: "Aditya K.",
    role: "Engineering Graduate"
  },
  {
    quote: "Super AI Polaris's FDP program completely changed how our department approaches teaching Machine Learning.",
    author: "Dr. R. Sharma",
    role: "HOD, Computer Science"
  },
  {
    quote: "A seamless platform for fulfilling AICTE internship requirements. The support team was incredibly helpful.",
    author: "Priya M.",
    role: "B.Tech Student"
  }
];