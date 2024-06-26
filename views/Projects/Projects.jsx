import { useState, useEffect } from 'react';

import Section from 'components/Section/Section';
import ProjectCardOverlay from 'components/ProjectCardOverlay/ProjectCardOverlay';
import Modal from 'components/Modal/Modal';

const Projects = ({ data }) => {
  const { blockTitle, blockAnchorId, project: projects } = data;
  const types = [...new Set(projects.map(({ projectType }) => projectType))];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedModalId, setOpenedModalId] = useState(null);
  const [shownProjects, setShownProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [isBtnShowMoreShown, setIsBtnShowMoreShown] = useState(false);
  const [filter, setFilter] = useState(null);

  const handleCheckQuantity = array => {
    if (array.length <= 6) {
      setShownProjects(array);
      setIsBtnShowMoreShown(false);
    } else {
      setShownProjects(array.slice(0, 6));
      setIsBtnShowMoreShown(true);
    }
  };

  useEffect(() => {
    if (filter === null) {
      setFilteredProjects(projects);
      handleCheckQuantity(projects);
    }

    if (filter !== null) {
      const projectsOfType = projects.filter(
        ({ projectType }) => projectType === filter,
      );
      setFilteredProjects(projectsOfType);
      handleCheckQuantity(projectsOfType);
    }
  }, [filter, projects]);

  const handleModalOpen = id => {
    setIsModalOpen(true);
    setOpenedModalId(id);
  };

  const handleShowMore = () => {
    setShownProjects(filteredProjects);
    setIsBtnShowMoreShown(false);
  };

  return (
    <Section
      h2={blockTitle}
      id={blockAnchorId}
      titleClassName="md:text-center md:after:left-1/2 md:after:translate-x-[-50%]"
    >
      <ul className="mb-6 ml-auto flex flex-wrap justify-end md:mb-10 md:max-w-max xl:mb-12 smOnly:max-w-[320px]">
        <li
          className={
            filter === null ? 'filterButtonActiveItem' : 'filterButtonItem'
          }
        >
          <button
            type="button"
            className="filterButton"
            onTouchStart={() => setFilter(null)}
            onClick={() => setFilter(null)}
          >
            All
          </button>
        </li>

        {types.map(type => {
          return (
            <li
              key={type}
              className={
                filter === type
                  ? 'filterButtonActiveItem ml-4'
                  : 'filterButtonItem ml-4'
              }
            >
              <button
                type="button"
                className="filterButton"
                onTouchStart={() => setFilter(type)}
                onClick={() => setFilter(type)}
              >
                {type}
              </button>
            </li>
          );
        })}
      </ul>

      {shownProjects && (
        <ul className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-[32px] md:gap-y-12 xl:grid-cols-3">
          {shownProjects?.map(project => {
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

                  <h3 className="cardTitle mb-3 font-playfair text-middle !font-semibold md:mb-4 xl:text-big">
                    {projectTitle}
                  </h3>

                  <p className="text-small font-light text-navyBlue xl:text-middle xl:font-normal">
                    {stack}
                  </p>
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
      )}

      {isBtnShowMoreShown && (
        <button
          type="button"
          onClick={handleShowMore}
          className="typicalBtn mx-auto mt-10 !h-[50px] !w-[120px] !rounded border border-transparentBlue !text-small font-light !text-navyBlue hover:!text-white focus:!text-white md:mt-16 xl:mt-20 xl:!h-[53px] xl:!w-[200px] xl:!text-middle xl:font-normal"
        >
          Show More
        </button>
      )}
    </Section>
  );
};

export default Projects;
