import OwnIcon from '../../public/icons/toggle-own-icon.svg';
import CommandIcon from '../../public/icons/toggle-command-icon.svg';

const ProjectTypeInfo = ({ role = '', isCommand }) => {
  return (
    <div>
      <div className="mb-9 flex items-center text-little">
        <span className="mr-[14px] text-little">own</span>

        {isCommand === true ? <CommandIcon /> : <OwnIcon />}

        <span className="ml-[14px] text-little">command</span>
      </div>

      {role && <p className="mb-[30px] text-little">Role: {role}</p>}
    </div>
  );
};

export default ProjectTypeInfo;
