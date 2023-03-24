import Section from 'components/Section/Section';
import Image from 'next/image';
// import LivePage from '../../public/icons/live_page_icon.svg';

const Projects = ({ data }) => {
  const { blockTitle, project: projects } = data;

  return (
    <Section h2={blockTitle}>
      <ul className="gap-y-18 grid grid-cols-3 gap-x-12">
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
                <div className="mb-9 h-[253px] w-full">
                  <Image
                    src={projectPreview.secure_url}
                    alt={`preview of ${projectTitle}`}
                    width={368}
                    height={253}
                    className="h-full w-full object-cover object-left-top"
                  />
                </div>

                <h3 className="mb-8 text-big">{projectTitle}</h3>

                <p className="mb-8 text-small">{description}</p>

                <p className="text-small text-navyBlue">{stack}</p>

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
