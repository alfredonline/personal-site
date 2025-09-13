export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'language-learning' | 'ai-tools';
  liveUrl: string;
  status: 'live' | 'development' | 'planned';
  features: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'linguatrackr',
    title: 'Linguatrackr',
    description: 'A comprehensive language learning progress tracker that helps learners monitor their immersion and study habits.',
    longDescription: 'Linguatrackr makes it easy to track your immersion in a target language and see your progress over time. Users can set goals for their languages, track and analyse their progress, and see their study streak, study time, and study suggestions.',
    image: 'https://res.cloudinary.com/damqrrryq/image/upload/v1748685780/lcb1l5sucibxorljndtx.png',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Shadcn'],
    category: 'language-learning',
    liveUrl: 'https://www.linguatrackr.com',
    status: 'live',
    features: [
      'Immersion time tracking',
      'Study streak monitoring',
      'Goal setting and progress visualisation',
      'Study suggestions and recommendations',
      'Detailed progress analytics'
    ]
  },
  {
    id: 'cognimon',
    title: 'Cognimon',
    description: 'A comprehensive learning tracker that helps you track study sessions, measure progress, and achieve your learning goals across any subject.',
    longDescription: 'Cognimon provides all the tools you need to track, plan, and achieve your learning goals across any subject or skill. Whether you\'re learning programming, languages, or any skill, Cognimon helps you stay motivated and track your progress.',
    image: 'https://res.cloudinary.com/damqrrryq/image/upload/v1757783236/Screenshot_2025-09-13_180544_busaft.png',
    technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'EC2', 'S3', 'Shadcn', 'TailwindCSS', 'Prisma'],
    category: 'language-learning',
    liveUrl: 'https://cognimon.com',
    status: 'live',
    features: [
      'Smart session tracking across any subject',
      'Goal-driven learning with progress visualisation',
      'Topic management for programming, languages, and academics',
      'Progress analytics with streaks and metrics',
      'Community insights and data export'
    ]
  }
];
