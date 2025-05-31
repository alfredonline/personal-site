export type ProjectCategory = "web" | "rust";

export const projectsConfig = {
  linguaTrackr: {
    href: "https://www.linguatrackr.com",
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1748685780/lcb1l5sucibxorljndtx.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1748685780/lcb1l5sucibxorljndtx.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1748685779/h5nol0weelvxv0twojdn.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1748685779/u47h27or7sj7idmsdstz.png",
    ],
    stack: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "PostgreSQL",
      "Shadcn",
      "Prisma",
      "Nestjs",
      "Jest",
      "Redis",
      "Cypress"
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
    metrics: {
      impact: "Users have been able to track their progress over time and see their study streak, study time, study suggestions and other useful metrics.",
    },
  },
  youtubeToSlides: {
    href: "https://www.youtubetoslides.com",
    thumbnail:
      "https://res.cloudinary.com/damqrrryq/image/upload/v1747711050/yttoslides_lgzic0.png",
    images: [
      "https://res.cloudinary.com/damqrrryq/image/upload/v1747711121/yttoslides2_p0msyt.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1747711198/yttoslides3_ksbdgm.png",
      "https://res.cloudinary.com/damqrrryq/image/upload/v1747711281/yttoslides4_gxwd2m.png",
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Shadcn",
      "PostgreSQL",
      "OpenAI API",
      "UploadThing",
      "Stripe",
      "Typescript",
      "Redis",
      "Jest",
    ],
    category: "web" as ProjectCategory,
    title: "YouTubeToSlides",
    description:
      "Convert YouTube videos into presentations for educational purposes. Users can purchase gems to generate presentations. So far users from all over the world have generated over 1000 presentations and the generated slides have been used by real teachers in real schools.",
    content: {
      paragraph1:
        "YouTubeToSlides is a tool that allows users to convert YouTube videos into presentations that can be used for educational purposes. I designed it with educators in mind, who want to create presentations for their students based on YouTube videos. Users can generate videos up to 30 minutes long and can purchase gems.",
      paragraph2:
        "There are many customers who are satisfied with the product and have used it to generate presentations for their students. The product is designed to be easy to use and user-friendly.",
    },
    metrics: {
      impact: "Over 500 presentations generated, used in classrooms across 15 countries",
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
