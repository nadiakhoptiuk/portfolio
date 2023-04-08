import Section from 'components/Section/Section';
import Image from 'next/image';

const Hero = ({ heroData }) => {
  const { heroImage, profession, fullName } = heroData;

  return (
    <Section
      h1="Nadiia Khoptiuk"
      titleClassName="visually-hidden !m-0 !-mt-1"
      className="mx-auto h-[647px] w-full max-w-[1440px] overflow-hidden !pt-0"
      containerClassName="relative h-[547px] top-[3px]"
    >
      <div className="absolute left-1/2 !-translate-x-1/2 xl:h-[547px] xl:w-[1440px]">
        <Image
          alt="Nadiia Khoptiuk photo"
          src={heroImage.secure_url}
          width={1440}
          height={547}
          priority
        />
      </div>

      <div className="absolute top-0 left-5 z-10 pt-[185px]">
        <p className="mb-10 flex w-max items-center font-playfair !text-[68px] font-black !leading-[85px]">
          {fullName}
        </p>
        <p className="font-sans text-big font-thin text-black">{profession}</p>
      </div>
    </Section>
  );
};

export default Hero;
