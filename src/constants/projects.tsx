import { translations } from './translations';

export const projects = [
  {
    href: "https://www.youtubetoslides.com",
    title: translations.en.projects.youtubeToSlides.title,
    description: translations.en.projects.youtubeToSlides.description,
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1727964836/youtube-to-slides_uuecan.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1727966112/youtube-to-slides-branding-3_ysicua.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1727966113/youtube-to-slides-branding-2_hmkku8.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1727966115/youtube-to-slides-branding-1_z6sqn3.png",
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Shadcn",
      "PostgreSQL",
      "OpenAI",
      "UploadThing",
      "Stripe",
    ],
    slug: "youtube-to-slides",
    content: (
      <div>
        <p>{translations.en.projects.youtubeToSlides.content.paragraph1}</p>
        <p>{translations.en.projects.youtubeToSlides.content.paragraph2}</p>
      </div>
    ),
  },
];
