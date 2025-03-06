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
};
