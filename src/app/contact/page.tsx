import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 mt-2">{t('contact_title')}</Heading>
      <Paragraph className="mb-10 max-w-xl">
        {t('contact_description')}
      </Paragraph>
      <Contact />
    </Container>
  );
}
