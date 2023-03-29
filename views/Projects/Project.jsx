import Image from 'next/image';
import Section from 'components/Section/Section';
import ProjectBtnList from 'components/ProjectBtnList/ProjectBtnList';
import ProjectTypeInfo from 'components/ProjectTypeInfo/ProjectTypeInfo';

const Projects = ({ data }) => {
  const { blockTitle, blockAnchorId, project: projects } = data;

  return (
    <Section h2={blockTitle} id={blockAnchorId}>
      <ul className="gap-y-18 grid grid-cols-3 gap-x-12 gap-y-24">
        {projects?.map(
          ({
            projectPreview,
            projectTitle,
            role,
            isCommand,
            stack,
            id,
            description,
            button,
          }) => {
            return (
              <li key={id} className="flex flex-col justify-start">
                <div className="mb-9 h-[253px] w-full overflow-hidden rounded">
                  <Image
                    src={projectPreview.secure_url}
                    alt={`preview of ${projectTitle}`}
                    width={368}
                    height={253}
                    quality={100}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3 className="mb-6 text-big">{projectTitle}</h3>

                <p className="mb-6 text-small">{description}</p>

                <p className="mb-[30px] text-small text-navyBlue">{stack}</p>

                <ProjectTypeInfo role={role} isCommand={isCommand} />

                <ProjectBtnList buttonData={button} />
              </li>
            );
          },
        )}
      </ul>
    </Section>
  );
};

export default Projects;
