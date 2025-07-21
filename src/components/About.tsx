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
          I also built LinguaTrackr.com, a tool for language learners who want to keep track of their immersion time in their target language(s);
          it also allows people to keep track of their study time in different areas in all of the languages they are learning. LinguaTrackr hosts 
          a blog, a community page which aggregates study sessions and other metrics from the user base as a whole.
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
