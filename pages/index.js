import Head from 'next/head';
import mainRequest from 'utils/request';
import AboutMe from 'views/AboutMe/AboutMe';
import Experience from 'views/Experience/Experience';
import Hero from 'views/Hero/Hero';
import Projects from 'views/Projects/Projects';
import Reviews from 'views/Reviews/Reviews';

const Home = props => {
  const { hero, aboutMe, contact, projects, works, reviews } = props;

  return (
    <>
      <Head>
        <title>N.KHOPTIUK - PORTFOLIO</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero heroData={hero} />

      <AboutMe summaryData={aboutMe} contact={contact} />

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
