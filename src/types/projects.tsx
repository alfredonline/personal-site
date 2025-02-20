export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  images: string[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
