export type ProjectCategory = 'web' | 'rust';

export const projectsConfig = {
  youtubeToSlides: {
    staticData: {
      href: "https://www.youtubetoslides.com",
      thumbnail: "https://res.cloudinary.com/damqrrryq/image/upload/v1727964836/youtube-to-slides_uuecan.png",
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
      category: 'web' as ProjectCategory
    },
    translations: {
      en: {
        title: "YouTubeToSlides",
        description: "Convert YouTube videos into presentations for educational purposes. Users can purchase gems to generate presentations. So far users from all over the world have generated over 200 presentations and the generated slides have been used by real teachers in real schools.",
        content: {
          paragraph1: "YouTubeToSlides is a tool that allows users to convert YouTube videos into presentations that can be used for educational purposes. I designed it with educators in mind, who want to create presentations for their students based on YouTube videos. Users can generate videos up to 20 minutes long and can purchase gems.",
          paragraph2: "There are many customers who are satisfied with the product and have used it to generate presentations for their students. The product is designed to be easy to use and user-friendly."
        }
      },
      es: {
        title: "YouTubeToSlides",
        description: "Convierte videos de YouTube en presentaciones con fines educativos. Los usuarios pueden comprar gemas para generar presentaciones. Hasta ahora, usuarios de todo el mundo han generado más de 200 presentaciones y las diapositivas se han utilizado en escuelas reales por profesores reales.",
        content: {
          paragraph1: "YouTubeToSlides es una herramienta que permite a los usuarios convertir videos de YouTube en presentaciones para uso educativo. La diseñé pensando en educadores que desean crear presentaciones para sus estudiantes basadas en videos de YouTube. Los usuarios pueden generar presentaciones de videos de hasta 20 minutos de duración y pueden comprar gemas para este fin.",
          paragraph2: "Contamos con numerosos clientes satisfechos que han utilizado la herramienta para generar presentaciones para sus estudiantes. El producto está diseñado para ser intuitivo y fácil de usar."
        }
      }
    }
  },
  linguaTrackr: {
    staticData: {
      href: "https://www.linguatrackr.com",
      thumbnail: "https://res.cloudinary.com/damqrrryq/image/upload/c_thumb,w_200,g_face/v1741258400/Screenshot_2025-03-06_115301_axhyhc.png",
      images: [
        "https://res.cloudinary.com/damqrrryq/image/upload/v1741258400/Screenshot_2025-03-06_115301_axhyhc.png",
        "https://res.cloudinary.com/damqrrryq/image/upload/v1741258655/Screenshot_2025-03-06_115715_vdrdi8.png",
        "https://res.cloudinary.com/damqrrryq/image/upload/v1741258717/Screenshot_2025-03-06_115817_lv8ecb.png",
        "https://res.cloudinary.com/damqrrryq/image/upload/v1741258848/Screenshot_2025-03-06_120031_gy32ej.png"
      ],
      stack: [
        "Nextjs",
        "Tailwindcss",
        "PostgreSQL",
        "Shadcn",
        "Prisma"
      ],
      category: 'web' as ProjectCategory
    },
    translations: {
      en: {
        title: "LinguaTrackr",
        description: "LinguaTrackr makes it easy to track your immersion in a target language and see your progress over time.",
        content: {
          paragraph1: "LinguaTrackr is a tool for language learners who are interested in immersion-based learning. Users can set goals for their languages, as well as track and analyse their progress over time.",
          paragraph2: "With Linguatrackr, users can see their study streak, study time, study suggestions and other useful metrics."
        }
      },
      es: {
        title: "LinguaTrackr",
        description: "LinguaTrackr hace que sea fácil rastrear tu inmersión en un el idioma que aprendes y ver tu progreso a lo largo del tiempo.",
        content: {
          paragraph1: "LinguaTrackr es una herramienta para aprendices de idiomas que están interesados en el aprendizaje inmersivo. Los usuarios pueden establecer objetivos para sus idiomas, así como rastrear y analizar su progreso a lo largo del tiempo.",
          paragraph2: "Con Linguatrackr, los usuarios pueden ver su racha de estudio, tiempo de estudio, sugerencias de estudio y otras métricas útiles."
        }
      }
    }
  },
  rustMusicVisualisation: {
    staticData: {
      href: "https://github.com/alfredonline/Rust-music-visualisation.git",
      thumbnail: "https://res.cloudinary.com/damqrrryq/image/upload/c_thumb,w_200,g_face/v1741272862/Screenshot_2025-03-06_155410_lbzsj2.png",
      images: [
        "https://res.cloudinary.com/damqrrryq/image/upload/v1741272862/Screenshot_2025-03-06_155410_lbzsj2.png"
      ],
      stack: ["Rust", "Sdl2", "cpal", "Symphonia"],
      category: 'rust' as ProjectCategory
    },
    translations: {
      en: {
        title: "Rust Music Visualisation",
            description: "A music visualisation tool built with Rust for visualising music data.",
        content: {
          paragraph1: "Load a song and watch the bars bounce up and down to the rhythm of the music.",
          paragraph2: "Features include parallel processing, memory efficiency, and a user-friendly interface. I built this project to learn more about Rust and audio processing."
        }
      },
      es: {
        title: "Visualización Musical con Rust",
        description: "Una herramienta de visualización musical construida con Rust para visualizar datos musicales.",
        content: {
          paragraph1: "Carga una canción y mira como saltan las barras según el ritmo de la música.",
          paragraph2: "Las características incluyen procesamiento paralelo, eficiencia de memoria y una interfaz fácil de usar."
        }
      }
    }
  }
} as const;

export type ProjectSlug = keyof typeof projectsConfig;
export type Language = 'en' | 'es';

export function getProject(slug: ProjectSlug, language: Language) {
  const config = projectsConfig[slug];
  return {
    ...config.staticData,
    ...config.translations[language],
    slug
  };
} 