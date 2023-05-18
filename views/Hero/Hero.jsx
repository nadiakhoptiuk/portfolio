import Section from 'components/Section/Section';
import Image from 'next/image';

const Hero = ({ heroData }) => {
  const { heroImage, profession, fullName } = heroData;

  return (
    <Section
      h1="Nadiia Khoptiuk"
      titleClassName="visually-hidden !m-0 !-mt-1"
      className="mx-auto h-[274px] w-full overflow-hidden !pt-0 md:h-[414px] xl:h-[647px] xl:max-w-[1440px]"
      containerClassName="relative xl:h-[547px] md:h-[350px] top-[3px] h-[220px]"
    >
      <div className="absolute left-1/2 h-[220px] w-[480px] !-translate-x-1/2 md:h-[350px] md:w-[768px] xl:h-[547px] xl:w-[1440px]">
        <Image
          alt="Nadiia Khoptiuk photo"
          src={heroImage.secure_url}
          width={1440}
          height={547}
          priority
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div className="absolute top-0 left-5 z-10 pt-[62px] md:pt-[100px] xl:pt-[185px]">
        <p className="mb-3 flex w-max items-center font-playfair text-[22px] font-semibold leading-[24px] md:mb-4 md:text-[38px] md:leading-[64px] xl:mb-10 xl:text-[68px] xl:leading-[85px]">
          {fullName}
        </p>

        <p className="font-sans text-middle font-light text-black xl:text-big">
          {profession}
        </p>
      </div>
    </Section>
  );
};

export default Hero;
