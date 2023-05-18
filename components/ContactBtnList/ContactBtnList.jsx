import Button from 'components/Button/Button';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul className="grid w-max grid-cols-3 gap-[10px] max-md:mx-auto xl:gap-[12px]">
      {contactLink?.map(({ id, link, title, isemail }) => {
        return (
          <li
            key={id}
            className="transitions-colors flex h-[50px] w-[50px] items-center justify-center rounded border border-transparentBlue duration-300 hover:border-navyBlue xl:h-[55px] xl:w-[200px]"
          >
            <Button
              className="typicalBtn"
              link={link}
              title={title}
              isemail={isemail}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactBtnList;
