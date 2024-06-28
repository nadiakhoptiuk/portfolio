import classNames from 'classnames';
import Button from 'components/Button/Button';

const ContactBtnList = ({ data, className = '' }) => {
  const { contactLink } = data;

  return (
    <ul
      className={classNames(
        'grid w-max -translate-x-[1000px] grid-cols-3 gap-[10px] xl:gap-[12px] smOnly:mx-auto',
        className,
      )}
    >
      {contactLink?.map(({ id, link, title, isemail }, index) => {
        return (
          <li
            key={id}
            className="contactBtnItem transitions-colors flex h-[50px] w-[50px] items-center justify-center rounded border border-transparentBlue duration-300 hover:border-navyBlue xl:h-[55px] xl:w-[200px] "
            data-speed={0.5 * (index + 1)}
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
