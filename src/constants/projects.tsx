import { projectsConfig } from './projectsConfig';

export const projects = [
  {
    title: projectsConfig.linguaTrackr.title,
    description: projectsConfig.linguaTrackr.description,
    href: projectsConfig.linguaTrackr.href,
    thumbnail: projectsConfig.linguaTrackr.thumbnail,
    content: (
      <div className="space-y-4">
        <p>{projectsConfig.linguaTrackr.content.paragraph1}</p>
        <p>{projectsConfig.linguaTrackr.content.paragraph2}</p>
      </div>
    ),
  },
  {
    title: projectsConfig.rustMusicVisualisation.title,
    description: projectsConfig.rustMusicVisualisation.description,
    href: projectsConfig.rustMusicVisualisation.href,
    thumbnail: projectsConfig.rustMusicVisualisation.thumbnail,
    content: (
      <div className="space-y-4">
        <p>{projectsConfig.rustMusicVisualisation.content.paragraph1}</p>
        <p>{projectsConfig.rustMusicVisualisation.content.paragraph2}</p>
      </div>
    ),
  },
];
