import Head from 'next/head';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

import mainRequest from 'utils/request';
import AboutMe from 'views/AboutMe/AboutMe';
import Experience from 'views/Experience/Experience';
import Hero from 'views/Hero/Hero';
import Projects from 'views/Projects/Projects';
import Reviews from 'views/Reviews/Reviews';
import ProjectsBlock from 'views/ProjectsBlock/ProjectsBlock';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Home = props => {
  const { hero, aboutMe, contact, projects, works, reviews } = props;
  const main = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isSmallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useGSAP(
    () => {
      gsap.to('.background', {
        x: isDesktop ? -1000 : isSmallDesktop ? -425 : isTablet ? -680 : -800,
        duration: 20000,
        ease: 'linear',
        scrollTrigger: {
          trigger: '.background',
          start: 'top 70px',
          end: 'bottom bottom',
          scrub: 5,
          toggleActions: 'restart reverse',
        },
      });
    },
    { scope: main },
  );

  useGSAP(
    () => {
      gsap.to(main, {
        scrollTrigger: {
          trigger: '.paralaxBox',
          start: 'top 70px',
          end: '+=300',
          pin: true,
        },
      });
    },
    { scope: document.body },
  );

  return (
    <>
      <Head>
        <title>N.KHOPTIUK - PORTFOLIO</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero heroData={hero} />
      <AboutMe summaryData={aboutMe} contact={contact} />
      <ProjectsBlock ref={main} />
      <Experience data={works} />
      <Projects data={projects} />
      <Reviews data={reviews} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await mainRequest();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hero: data.hero,
      projects: data.featuredProject,
      aboutMe: data.aboutMe,
      contact: data.contact,
      works: data.workExperience,
      reviews: data.review,
    },
  };
};
