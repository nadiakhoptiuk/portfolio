import OwnIcon from '../../public/icons/toggle-own-icon.svg';
import CommandIcon from '../../public/icons/toggle-command-icon.svg';

const ProjectTypeInfo = ({ role = '', isCommand }) => {
  return (
    <div>
      <div className="mb-2 flex items-center text-little md:mb-4">
        <span className={`mr-[14px] text-little ${isCommand && 'opacity-50'}`}>
          own
        </span>

        {isCommand === true ? <CommandIcon /> : <OwnIcon />}

        <span className={`${!isCommand && 'opacity-50'} ml-[14px] text-little`}>
          team
        </span>
      </div>

      {role && <p className="text-little">Role: {role}</p>}
    </div>
  );
};

export default ProjectTypeInfo;
