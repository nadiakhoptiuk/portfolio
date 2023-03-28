import Image from 'next/image';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';

const Projects = ({ data }) => {
  const { blockTitle, blockAnchorId, project: projects } = data;

  return (
    <Section h2={blockTitle} id={blockAnchorId}>
      <ul className="gap-y-18 grid grid-cols-3 gap-x-12 gap-y-24">
        {projects?.map(
          ({
            projectPreview,
            projectTitle,
            // role,
            // iscommand,
            stack,
            id,
            description,
            button,
          }) => {
            return (
              <li key={id}>
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

                <h3 className="mb-8 text-big">{projectTitle}</h3>

                <p className="mb-8 text-small">{description}</p>

                <p className="text-small text-navyBlue">{stack}</p>

                <ul>
                  {button?.map(({ id, link, title }) => {
                    return (
                      <li key={id}>
                        <Button isemail={false} title={title} link={link} />
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          },
        )}
      </ul>
    </Section>
  );
};

export default Projects;
