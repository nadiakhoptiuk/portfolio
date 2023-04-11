import Button from 'components/Button/Button';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul className="grid w-max grid-cols-3 md:gap-[10px] xl:gap-[12px]">
      {contactLink?.map(({ id, link, title, isemail }) => {
        return (
          <li
            key={id}
            className="flex items-center justify-center rounded border-2 border-navyBlue md:h-[50px] md:w-[50px] xl:h-[55px] xl:w-[200px]"
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
