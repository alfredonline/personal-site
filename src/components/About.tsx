import { Paragraph } from "@/components/Paragraph";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          My name is Alfie. I am a problem solver who enjoys building products that are both functional and aesthetically pleasing.
        </Paragraph>
        <Paragraph className=" mt-4">
          I work as a full-stack developer and bootcamp instructor. I have experience with Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, Rust, Nest.js, and a variety of other tools (I am language agnostic and can pick up new languages quickly). I also have a{" "}
          <a href="https://www.youtube.com/@AlfieWebDev" className="underline text-blue-500">
            YouTube Channel
          </a>{" "}
          where I post videos about web development and programming.
        </Paragraph>
        <Paragraph className="mt-4">
          I built Eduviah.com, an all-in-one platform for teachers who want to generate resources for their classes with the help of AI. Teachers can generate lesson plans 
          based on their countries education system and on specific topics within the subjects they teach. Eduviah also has a powerpoint generator which I built specifically for teachers; 
          it uses the latest AI models to generate a powerpoint presentation based on the lesson plan. It is a successor to YouTubeToSlides.com.
        </Paragraph>
        <Paragraph className="mt-4">
          I also built LinguaTrackr.com, a tool for language learners who want to keep track of their immersion time in their target language(s);
          it also allows people to keep track of their study time in different areas in all of the languages they are learning. LinguaTrackr hosts 
          a blog, a community page which aggregates study sessions and other metrics from the user base as a whole.
        </Paragraph>
        <Paragraph className=" mt-4">
          I built YouTubeToSlides.com, a user-friendly application that allows people to convert YouTube videos into presentations for educational purposes. To date, users from around the world have generated over 500 presentations with this tool.
        </Paragraph>
        <Paragraph className="mt-4">
          If you&apos;d like to work with me or hire me, please reach out via{" "}
          <Link
            href={"/contact"}
            className="underline text-blue-500"
          >
            email
          </Link>
          .
        </Paragraph>
      </div>
    </div>
  );
}
