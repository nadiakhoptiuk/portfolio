import Button from 'components/Button/Button';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul className="grid grid-cols-3 gap-[12px]">
      {contactLink?.map(({ id, link, title, isemail }) => {
        return (
          <li
            key={id}
            className="flex h-[55px] w-[200px] items-center justify-center rounded border-2 border-navyBlue"
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
