import { Paragraph } from "@/components/Paragraph";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          My name is Alfie. I am a problem solver who enjoys building products
          that are both functional and aesthetically pleasing.
        </Paragraph>
        <Paragraph className=" mt-4">
          I work as a full-stack developer and bootcamp instructor. I have
          experience with Next.js, React, Node.js / Express, MongoDB,
          PostgreSQL, Typescript, Git, and some Go. I also have a{" "}
          <a href="https://www.youtube.com/@AlfieWebDev">YouTube Channel</a>{" "}
          where I post videos about web development.
        </Paragraph>
        <Paragraph className=" mt-4">
          I built YouTubeToSlides.com, a client-facing project that allows
          users to convert YouTube videos into presentations that can be used
          for educational purposes. So far users from all over the world have
          used it to generate over 200 presentations.
        </Paragraph>
        <Paragraph className="mt-4">
          If you want to work with me or hire me, please reach out to me via{" "}
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
