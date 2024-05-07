import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

import Section from 'components/Section/Section';
import ContactBtnList from 'components/ContactBtnList/ContactBtnList';

const AboutMe = ({ summaryData, contact }) => {
  const {
    photo: { secure_url },
    summary,
    blockAnchorId,
    blockTitle,
  } = summaryData;

  return (
    <Section id={blockAnchorId} className="pt-6 md:pt-0">
      <div className="md:grid md:grid-cols-2 md:grid-rows-[56px_324px_80px] md:gap-x-8 md:gap-y-10 xl:grid-cols-[198px_248px_346px_198px] xl:grid-rows-[79px_408px_55px] xl:gap-y-[64px]">
        <h2 className="sectionTitle md:col-start-2 md:pt-6 md:after:top-0 xl:col-span-2 xl:col-start-3 xl:pt-[36px]">
          {blockTitle}
        </h2>

        <div className="markdown-wrapper mb-10 text-small font-light text-black prose-p:mb-4 md:col-start-2 md:row-start-2 md:mb-9 xl:col-span-2 xl:col-start-3 xl:mb-16 xl:w-[582px] xl:text-[20px] xl:leading-[28px] xl:prose-p:mb-9 xl:prose-p:font-normal">
          <Markdown>{summary}</Markdown>
        </div>

        <div className="flex-shrink-0 overflow-hidden rounded max-md:mb-10 md:col-start-1 md:row-start-1 md:h-[420px] md:w-[336px] xl:h-[538px] xl:w-[479px]">
          <Image
            alt="Nadiia Khoptiuk photo"
            src={secure_url}
            width={479}
            height={538}
            quality={100}
            priority
            className="h-full w-full object-cover object-left-bottom"
          />
        </div>

        <ContactBtnList
          data={contact}
          className="md:row-start-3 xl:col-span-2 xl:col-start-2"
        />
      </div>
    </Section>
  );
};

export default AboutMe;
