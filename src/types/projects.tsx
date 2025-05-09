export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  images: readonly string[] | string[];
  href: string;
  slug?: string;
  stack?: readonly string[] | string[];
  category: 'web' | 'rust';
  content?: {
    paragraph1: string;
    paragraph2?: string;
  } | React.ReactNode | string;
  metrics?: {
    activeUsers?: number;
    revenue?: string;
    impact?: string;
    testimonials?: Array<{
      quote: string;
      author: string;
      role?: string;
    }>;
  };
  challenges?: Array<{
    challenge: string;
    solution: string;
  }>;
};
