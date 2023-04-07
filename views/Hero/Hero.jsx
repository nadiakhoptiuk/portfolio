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
        <div className="pt-[100px]">
          <p className="mb-9 text-big text-black">
            Hello, I am a Full-Stack Developer
          </p>

          <p className="!leading=[113px] main-gradient mb-9 flex h-[113px] w-max items-center font-alata !text-[82px]">
            Nadiia Khoptiuk
          </p>

          <div className="markdown-wrapper mb-16 text-[20px] leading-[28px] text-black prose-p:mb-9 xl:w-[600px]">
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
          className="flex-grow-1 relative top-[-4px] rounded xl:h-[757px] xl:w-[481px]"
        />
      </div>
    </Section>
  );
};

export default Hero;
