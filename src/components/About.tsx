import { Paragraph } from "@/components/Paragraph";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          {t('about_intro')}
        </Paragraph>
        <Paragraph className=" mt-4">
          {t('about_work')}{" "}
          <a href="https://www.youtube.com/@AlfieWebDev" className="underline text-blue-500">
            {t('youtube_channel')}
          </a>{" "}
          {t('about_youtube')}
        </Paragraph>
        <Paragraph className=" mt-4">
          {t('about_project')}
        </Paragraph>
        <Paragraph className="mt-4">
          {t('contact_me')}{" "}
          <Link
            href={"/contact"}
            className="underline text-blue-500"
          >
            {t('email')}
          </Link>
          .
        </Paragraph>
      </div>
    </div>
  );
}
