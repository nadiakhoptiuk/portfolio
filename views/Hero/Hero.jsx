import Markdown from 'markdown-to-jsx';
import Section from 'components/Section/Section';
import Image from 'next/image';
import ContactBtnList from 'components/ContactBtnList/ContactBtnList';

const Hero = ({ summaryData, contact }) => {
  const {
    photo: { secure_url },
    summary,
    blockAnchorId,
  } = summaryData;

  return (
    <Section
      h1="Nadiia Khoptiuk"
      titleClassName="visually-hidden"
      id={blockAnchorId}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-small text-black">
            Hello, I am a Full-Stack Developer
          </p>
          <p className="!leading=[113px] main-gradient mb-6 flex h-[113px] w-max items-center font-alata !text-[82px]">
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
