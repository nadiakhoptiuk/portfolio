import Button from 'components/Button/Button';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul className="grid grid-cols-3 gap-[12px]">
      {contactLink?.map(({ id, link, title, isemail }, index) => {
        return (
          <li
            key={id}
            className={`flex h-[55px] w-[200px] items-center justify-center rounded border-transparent grad-${
              index + 1
            }`}
          >
            <Button
              className="flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded bg-white"
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
