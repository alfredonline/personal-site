"use client";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      
      <div id="about" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Heading className="font-black text-3xl md:text-4xl mb-6">
              <span className="text-yellow-500 font-normal">💬</span> About Me
            </Heading>
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              <Paragraph className="text-lg text-gray-600">
                My name is Alfie. I am a problem solver who enjoys building products that are both functional and aesthetically pleasing.
              </Paragraph>
              <Paragraph className="text-lg text-gray-600">
                I work as a full-stack developer and bootcamp instructor. I have experience with Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, Nest.js, and a variety of other tools (I am language agnostic and can pick up new languages quickly). I also have a{" "}
                <a href="https://www.youtube.com/@AlfieWebDev" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  YouTube Channel
                </a>{" "}
                where I post videos about web development and programming.
              </Paragraph>
              <Paragraph className="text-lg text-gray-600">
                I built <a href="https://linguatrackr.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">Linguatrackr.com</a>, a tool for language learners who want to keep track of their immersion time in their target language(s). 
                It also allows people to keep track of their study time in different areas in all of the languages they are learning. Linguatrackr hosts 
                a blog and a community page which aggregates study sessions and other metrics from the user base as a whole.
              </Paragraph>
              <Paragraph className="text-lg text-gray-600">
                I also created <a href="https://cognimon.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold">Cognimon</a>, a comprehensive learning tracker that helps users track study sessions, measure progress, and achieve their learning goals across any subject or skill.
              </Paragraph>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Building tools like Linguatrackr that help learners track their immersion time, study streaks, and progress over time.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Goal Achievement</h3>
              <p className="text-gray-600">
                Creating platforms like Cognimon that help learners set goals, track sessions, and stay motivated with analytics.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Building tools that support learners worldwide, from language learners to programming students and beyond.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16 bg-gray-50">
        <Container>
          <div className="mb-12">
            <Heading className="font-black text-3xl md:text-4xl mb-6 text-center">
              My Technical Expertise
            </Heading>
            <Paragraph className="max-w-3xl mx-auto text-lg text-gray-600 text-center">
              With 3+ years of commercial experience as a full-stack engineer and bootcamp instructor, 
              I specialise in building scalable, user-friendly applications that make a real difference in education and learning.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-900">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-gray-900">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Prisma'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Currently expanding my expertise in <Highlight>Python</Highlight>, <Highlight>Machine learning techniques</Highlight>, 
              and <Highlight>cloud technologies</Highlight> to build even more robust learning platforms and tools.
            </p>
          </div>
        </Container>
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects" className="py-16 bg-white">
        <Container>
          <Heading className="font-black text-3xl md:text-4xl mb-4 text-center">
            <span className="text-4xl text-primary">⚡</span> What I&apos;ve been working on
          </Heading>
          <Paragraph className="max-w-2xl mx-auto text-lg text-gray-600 text-center mb-12">
            Here are some of the language learning tools and educational platforms I&apos;ve built recently.
          </Paragraph>
          <FeaturedProjects />
        </Container>
      </div>

      <div id="contact" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-4xl">✉️</span>
            <Heading className="font-black mb-2 mt-2">Contact Me</Heading>
            <Paragraph className="mb-10 max-w-xl mx-auto">
              Reach out to me via email or fill out this contact form. I will get back to you as soon as possible. Do not hesitate to reach out!
            </Paragraph>
          </div>
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </Container>
      </div>
    </>
  );
}
