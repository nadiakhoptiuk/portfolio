import Button from 'components/Button/Button';

const ProjectBtnList = ({ buttonData, className = '' }) => {
  console.log(buttonData);

  return (
    <ul className={`flex items-center gap-[30px] ${className}`}>
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
