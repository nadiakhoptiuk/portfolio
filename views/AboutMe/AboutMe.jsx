import Markdown from 'markdown-to-jsx';
import Section from 'components/Section/Section';
import Image from 'next/image';
import ContactBtnList from 'components/ContactBtnList/ContactBtnList';

const AboutMe = ({ summaryData, contact }) => {
  const {
    photo: { secure_url },
    summary,
    blockAnchorId,
    blockTitle,
  } = summaryData;

  return (
    <Section id={blockAnchorId} className="!pt-0">
      <div className="flex ">
        <Image
          alt="Nadiia Khoptiuk photo"
          src={secure_url}
          width={479}
          height={538}
          priority
          className="flex-grow-1 rounded xl:h-[538px] xl:w-[479px]"
        />

        <div className="ml-8 pt-[36px]">
          <h2 className="sectionTitle !mb-9">{blockTitle}</h2>

          <div className="markdown-wrapper mb-16 text-[20px] leading-[28px] text-black prose-p:mb-9 xl:w-[582px]">
            <Markdown>{summary}</Markdown>
          </div>

          <ContactBtnList data={contact} />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
