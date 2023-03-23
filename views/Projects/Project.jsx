import Section from 'components/Section/Section';
import Image from 'next/image';
// import LivePage from '../../public/icons/live_page_icon.svg';

const Projects = ({ data }) => {
  const { blockTitle, project: projects } = data;

  return (
    <Section h2={blockTitle}>
      <ul>
        {projects?.map(
          ({
            linkToGithub,
            linkToLivePage,
            linkToPresentation,
            projectPreview,
            projectTitle,
            // role,
            // iscommand,
            stack,
            id,
            description,
          }) => {
            return (
              <li key={id}>
                <Image
                  src={projectPreview.secure_url}
                  alt={`preview of ${projectTitle}`}
                  width={368}
                  height={253}
                />

                <h3>{projectTitle}</h3>

                <p>{description}</p>

                <p>{stack}</p>

                <a
                  href={linkToLivePage}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {/* <Image src={LivePage} alt="live page icon" /> */}
                  Live page
                </a>

                <a
                  href={linkToGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image src={}/> */}
                </a>

                {linkToPresentation && (
                  <a
                    href={linkToPresentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Image src={}/> */}
                  </a>
                )}
              </li>
            );
          },
        )}
      </ul>
    </Section>
  );
};

export default Projects;
