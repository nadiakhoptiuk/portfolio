import Head from 'next/head';
import mainRequest from 'utils/request';
import Experience from 'views/Experience/Experience';
import Hero from 'views/Hero/Hero';
import Projects from 'views/Projects/Project';
import Reviews from 'views/Reviews/Reviews';

const Home = props => {
  // console.log(props);

  const { summaryData, contact, projects, works } = props;

  return (
    <>
      <Head>
        <title>Next App Template</title>
        {/* <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Hero summaryData={summaryData} contact={contact} />

      <Experience data={works} />

      <Projects data={projects} />

      <Reviews />
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
      projects: data.featuredProject,
      summaryData: data.summary,
      contact: data.contact,
      works: data.workExperience,
    },
  };
};
