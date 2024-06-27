import { forwardRef } from 'react';

const ProjectsBlock = forwardRef((props, ref) => {
  return (
    <div className="paralaxBox" ref={ref}>
      <div className="background"></div>
    </div>
  );
});

ProjectsBlock.displayName = ProjectsBlock;

export default ProjectsBlock;
