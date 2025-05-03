export type ProjectCategory = "web" | "rust";

export const projectsConfig = {
  eduviah: {
    href: "https://www.eduviah.com",
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264298/e1_swqalz.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264298/e4_vllc4p.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264301/e5_meo020.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264298/e3_mxfdfz.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264298/e2_w6odnk.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746264298/e1_swqalz.png"
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "PostgreSQL",
      "Shadcn",
      "Prisma",
      "Shadcn",
      "OpenAI",
      "UploadThing",
      "Stripe",
    ],
    category: "web" as ProjectCategory,
    title: "Eduviah",
    description:
      "Eduviah is a platform for teachers who want to generate resources for their classes with the help of AI. Users can generate lesson plans and worksheets for their classes; I am working on adding new features to the site.",
    content: {
      paragraph1:
        "Eduviah is a platform for teachers who want to generate resources for their classes with the help of AI. Users can generate lesson plans and worksheets for their classes; I am working on adding new features to the site. ",
    },
  },
  linguaTrackr: {
    href: "https://www.linguatrackr.com",
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746261904/lt1_o5hvj9.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746261904/lt3_tei5bf.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746261903/lt5_nwrzna.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746261903/lt4_hnjkjr.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1746261902/lt2_sab4jb.png",
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "PostgreSQL",
      "Shadcn",
      "Prisma",
      "Nestjs",
    ],
    category: "web" as ProjectCategory,
    title: "LinguaTrackr",
    description:
      "LinguaTrackr makes it easy to track your immersion in a target language and see your progress over time.",
    content: {
      paragraph1:
        "LinguaTrackr is a tool for language learners who are interested in immersion-based learning. Users can set goals for their languages, as well as track and analyse their progress over time.",
      paragraph2:
        "With Linguatrackr, users can see their study streak, study time, study suggestions and other useful metrics.",
    },
  },
  youtubeToSlides: {
    href: "https://www.youtubetoslides.com",
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
    category: "web" as ProjectCategory,
    title: "YouTubeToSlides",
    description:
      "Convert YouTube videos into presentations for educational purposes. Users can purchase gems to generate presentations. So far users from all over the world have generated over 200 presentations and the generated slides have been used by real teachers in real schools.",
    content: {
      paragraph1:
        "YouTubeToSlides is a tool that allows users to convert YouTube videos into presentations that can be used for educational purposes. I designed it with educators in mind, who want to create presentations for their students based on YouTube videos. Users can generate videos up to 20 minutes long and can purchase gems.",
      paragraph2:
        "There are many customers who are satisfied with the product and have used it to generate presentations for their students. The product is designed to be easy to use and user-friendly.",
    },
  },
  rustMusicVisualisation: {
    href: "https://github.com/alfredonline/Rust-music-visualisation.git",
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1741272862/Screenshot_2025-03-06_155410_lbzsj2.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1741272862/Screenshot_2025-03-06_155410_lbzsj2.png",
    ],
    stack: ["Rust", "Sdl2", "cpal", "Symphonia"],
    category: "rust" as ProjectCategory,
    title: "Rust Music Visualisation",
    description:
      "A music visualisation tool built with Rust for visualising music data.",
    content: {
      paragraph1:
        "Load a song and watch the bars bounce up and down to the rhythm of the music.",
      paragraph2:
        "Features include parallel processing, memory efficiency, and a user-friendly interface. I built this project to learn more about Rust and audio processing.",
    },
  },
} as const;

export type ProjectSlug = keyof typeof projectsConfig;

export function getProject(slug: ProjectSlug) {
  return {
    ...projectsConfig[slug],
    slug,
  };
}
