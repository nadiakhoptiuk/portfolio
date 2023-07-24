import OwnIcon from '../../public/icons/toggle-own-icon.svg';
import CommandIcon from '../../public/icons/toggle-command-icon.svg';

const ProjectTypeInfo = ({ role = '', isCommand }) => {
  return (
    <div className="mb-6 md:mb-9">
      <div className="mb-2 flex items-center text-little md:mb-4">
        <span className="mr-[14px] text-little">own</span>

        {isCommand === true ? <CommandIcon /> : <OwnIcon />}

        <span className="ml-[14px] text-little">team</span>
      </div>

      {role && <p className="text-little">Role: {role}</p>}
    </div>
  );
};

export default ProjectTypeInfo;
