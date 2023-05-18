import Markdown from 'markdown-to-jsx';
import Section from 'components/Section/Section';
import Image from 'next/image';
import ContactBtnList from 'components/ContactBtnList/ContactBtnList';
import { useMediaQuery } from 'react-responsive';

const AboutMe = ({ summaryData, contact }) => {
  const {
    photo: { secure_url },
    summary,
    blockAnchorId,
    blockTitle,
  } = summaryData;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section id={blockAnchorId} className="!pt-0">
      <div className="md:flex md:flex-row-reverse xl:justify-end">
        <div className="pt-6 md:ml-8 xl:pt-[36px]">
          <h2 className="sectionTitle !xl:mb-9 !md:mb-6">{blockTitle}</h2>

          <div className="markdown-wrapper mb-10 text-small font-normal text-black prose-p:mb-4 md:mb-9 xl:mb-16 xl:w-[582px] xl:text-[20px] xl:leading-[28px] xl:prose-p:mb-9">
            <Markdown>{summary}</Markdown>
          </div>

          {!isMobile && <ContactBtnList data={contact} />}
        </div>

        <div className="flex-shrink-0 overflow-hidden rounded max-md:mb-10 md:h-[420px] md:w-[336px] xl:h-[538px] xl:w-[479px]">
          <Image
            alt="Nadiia Khoptiuk photo"
            src={secure_url}
            width={479}
            height={538}
            priority
            className="h-full w-full object-cover object-left-bottom"
          />
        </div>

        {isMobile && <ContactBtnList data={contact} />}
      </div>
    </Section>
  );
};

export default AboutMe;
