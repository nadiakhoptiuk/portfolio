import Markdown from 'markdown-to-jsx';
import Section from 'components/Section/Section';
import Image from 'next/image';
import ContactBtnList from 'components/ContactBtnList/ContactBtnList';

const Hero = ({ summaryData, contact }) => {
  const {
    photo: { secure_url },
    summary,
  } = summaryData;

  return (
    <Section h1="Nadiia Khoptiuk" titleClassName="visually-hidden">
      <div className="flex justify-between">
        <div>
          <p className="text-small text-black">Hello, I am</p>
          <p className="leading=[113px] main-gradient w-max font-alata text-[82px]">
            Nadiia Khoptiuk
          </p>
          <div className="markdown-wrapper text-small text-black prose-p:mb-6 xl:w-[600px]">
            <Markdown>{summary}</Markdown>
          </div>

          <ContactBtnList data={contact} />
        </div>

        <Image
          alt="Nadiia Khoptiuk photo"
          src={secure_url}
          width={498}
          height={773}
          priority
          className="flex-grow-1 xl:h-[773px] xl:w-[498px]"
        />
      </div>
    </Section>
  );
};

export default Hero;
