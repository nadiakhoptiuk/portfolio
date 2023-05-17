import Section from 'components/Section/Section';
import ProjectCardOverlay from 'components/ProjectCardOverlay/ProjectCardOverlay';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const Projects = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedModalId, setOpenedModalId] = useState(null);

  const { blockTitle, blockAnchorId, project: projects } = data;

  const handleModalOpen = id => {
    setIsModalOpen(true);
    setOpenedModalId(id);
  };

  return (
    <Section
      h2={blockTitle}
      id={blockAnchorId}
      titleClassName="md:text-center md:after:left-1/2 md:after:translate-x-[-50%]"
    >
      <ul className="grid md:grid-cols-2 md:gap-y-16 md:gap-x-[32px] xl:grid-cols-3 xl:gap-y-24 xl:gap-x-12">
        {projects?.map(project => {
          const { projectPreview, projectTitle, icon, tag, stack, id } =
            project;

          return (
            <li
              key={id}
              className="projectCard flex flex-col justify-start rounded"
            >
              <button
                type="button"
                onClick={() => handleModalOpen(id)}
                className="cardButton inline-block text-left"
              >
                <ProjectCardOverlay
                  projectPreview={projectPreview}
                  icon={icon}
                  tag={tag}
                  projectTitle={projectTitle}
                />

                <h3 className="cardTitle font-playfair !font-semibold md:mb-4 md:text-middle xl:mb-6 xl:text-big">
                  {projectTitle}
                </h3>

                <p className="text-small font-normal text-navyBlue">{stack}</p>
              </button>

              {isModalOpen && id === openedModalId && (
                <Modal
                  setIsModalOpen={setIsModalOpen}
                  isModalOpen={isModalOpen}
                  setOpenedModalId={setOpenedModalId}
                  projectInfo={project}
                />
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Projects;
