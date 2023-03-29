import Button from 'components/Button/Button';

const ProjectBtnList = ({ buttonData }) => {
  return (
    <ul className="mt-auto flex items-center">
      {buttonData?.map(({ id, link, title }) => {
        return (
          <li
            key={id}
            className={`${
              title === 'Live page' ? 'livePageItem' : 'gitAndYouTubeItem'
            }`}
          >
            <Button
              isemail={false}
              title={title}
              link={link}
              isTitle={title === 'Live page' ? true : false}
              className={`${
                title === 'Live page' ? 'livePageLink' : 'gitAndYouTubeLink'
              }`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectBtnList;
