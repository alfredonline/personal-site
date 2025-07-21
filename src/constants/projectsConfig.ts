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
