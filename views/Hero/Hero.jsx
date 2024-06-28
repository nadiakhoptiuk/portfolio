import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Section from 'components/Section/Section';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Hero = ({ heroData }) => {
  const { heroImage, profession, fullName } = heroData;

  useGSAP(
    () => {
      const floatBtns = gsap.utils.toArray('[data-speed]');
      gsap.set(floatBtns, { scale: 0.7, translateX: 0, opacity: 0.4 });

      floatBtns.forEach(floatBtn => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: floatBtns,
            start: 'top bottom',
            end: 'top 5%',
            // markers: true,
            scrub: 0,
          },
        });

        tl.to(floatBtn, {
          x: 1000,
          ease: 'none',
          scale: 1,
          duration: 1,
          opacity: 1,
        })
          .to(floatBtn, { opacity: 1 })
          .to(floatBtn, { opacity: 0 }, '+=1');
      });
    },

    //   gsap.to('[data-speed]', {
    //     // y: (i, el) =>
    //     //   (1 - parseFloat(el.getAttribute('data-speed'))) *
    //     //   ScrollTrigger.maxScroll(window),
    //     x: 1000,
    //     ease: 'none',
    //     rotate: 360,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: floatBtns,
    //       start: 'top bottom',
    //       end: 'top 80%',
    //       invalidateOnRefresh: true,
    //       scrub: 0,
    //       markers: true,
    //     },
    //   });
    // },
    { scope: document.body },
  );

  return (
    <Section
      titleClassName="visually-hidden !m-0 !-mt-1"
      className="mx-auto h-[274px] w-full overflow-hidden !pt-0 md:h-[414px] xl:h-[647px] xl:max-w-[1440px]"
      containerClassName="relative xl:h-[547px] md:h-[350px] top-0 h-[220px]"
      dataColor="#B9A38E #1A1A1A"
    >
      <div className="absolute left-1/2 h-[220px] w-[480px] !-translate-x-1/2 md:h-[350px] md:w-[768px] xl:h-[547px] xl:w-[1440px]">
        <Image
          alt="Nadiia Khoptiuk photo"
          src={heroImage.secure_url}
          width={1440}
          height={547}
          quality={100}
          priority
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div className="absolute left-5 top-0 z-10 pt-[62px] md:pt-[100px] xl:pt-[185px]">
        <h1 className="mb-3 flex w-max items-center font-playfair text-[22px] font-semibold leading-[24px] md:mb-4 md:text-[38px] md:leading-[64px] xl:mb-10 xl:text-[68px] xl:leading-[85px]">
          {fullName}
        </h1>

        <p className="font-sans text-middle font-light text-black xl:text-big xl:font-normal">
          {profession}
        </p>
      </div>
    </Section>
  );
};

export default Hero;
