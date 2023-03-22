import Head from 'next/head';
import mainRequest from 'utils/request';
import Hero from 'views/Hero/Hero';

const Home = props => {
  const { summary: summaryData, contact } = props;

  return (
    <>
      <Head>
        <title>Next App Template</title>
        {/* <meta name="description" content="Next app template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Hero summaryData={summaryData} contact={contact} />
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
      featuredProject: data.featuredProject,
      summary: data.summary,
      contact: data.contact,
    },
  };
};
