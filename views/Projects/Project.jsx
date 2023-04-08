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
      titleClassName="text-center after:left-1/2 after:translate-x-[-50%]"
    >
      <ul className="gap-y-18 grid grid-cols-3 gap-x-12 gap-y-24">
        {projects?.map(project => {
          const { projectPreview, projectTitle, icon, tag, stack, id } =
            project;

          return (
            <li key={id} className="projectCard flex flex-col justify-start">
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

                <h3 className="cardTitle mb-6 font-playfair text-big">
                  {projectTitle}
                </h3>

                <p className="text-small font-thin text-navyBlue">{stack}</p>
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
