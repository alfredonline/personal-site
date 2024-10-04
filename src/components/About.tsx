import { Paragraph } from "@/components/Paragraph";

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
          where I post coding-related videos.
        </Paragraph>

        {/* <Paragraph className=" mt-4">
          My latest project is Lingjo, a language learning platform with a focus
          on exam preparation for language exams. There is truly no other
          platform like it. It uses AI to grade the speaking and writing
          abilities of users and marks them against the exam criteria for the
          exam they are preparing for. It is a unique project which has many
          users who use it to improve their language skills.
        </Paragraph> */}
        <Paragraph className=" mt-4">
          I built YouTubeToSlides.com, a client-facing project that allows
          users to convert YouTube videos into presentations that can be used
          for educational purposes. So far users from all over the world have
          used it to generate over 200 presentations.
        </Paragraph>
        <Paragraph className="mt-4">
          I also built YouTubeToChapters, a tool for creators to automatically
          generate chapters for their YouTube videos. I built it for myself and
          my channel as a lightweight alternative to other tools on the market.
        </Paragraph>
        <Paragraph className="mt-4">
          If you want to work with me or hire me, please reach out to me via{" "}
          <a
            href={process.env.EMAIL_URL!}
            className="underline text-blue-500"
          >
            email
          </a>{" "}
          or on{" "}
          <a
            href={process.env.LINKEDIN_URL!}
            className="underline text-blue-500"
          >
            LinkedIn
          </a>
          .
        </Paragraph>
      </div>
    </div>
  );
}
