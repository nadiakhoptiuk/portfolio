import Image from 'next/image';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul>
      {contactLink?.map(({ id, link, title, icon }) => {
        return (
          <li key={id}>
            <a href={link} className="flex">
              {title}
              <Image
                src={icon.secure_url}
                alt={`${title} icon`}
                width={20}
                height={20}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactBtnList;
