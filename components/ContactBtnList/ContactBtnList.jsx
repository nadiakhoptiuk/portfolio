import Image from 'next/image';

const ContactBtnList = ({ data }) => {
  const { contactLink } = data;

  return (
    <ul>
      {contactLink?.map(({ id, link, title, icon, isemail }) => {
        return (
          <li key={id}>
            {isemail && (
              <a
                href={`mailto:${link}`}
                className="flex"
                rel="nofollow noreferrer noopener"
              >
                {title}
                <Image
                  src={icon.secure_url}
                  alt={`${title} icon`}
                  width={20}
                  height={20}
                />
              </a>
            )}

            {!isemail && (
              <a
                href={link}
                className="flex"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                {title}
                <Image
                  src={icon.secure_url}
                  alt={`${title} icon`}
                  width={20}
                  height={20}
                />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactBtnList;
