import Button from 'components/Button/Button';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul>
      {contactLink?.map(({ id, link, title, isemail }) => {
        return (
          <li key={id}>
            <Button
              className="flex"
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
