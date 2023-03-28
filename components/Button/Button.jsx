import LivePage from '../../public/icons/live_page_icon.svg';
import GitHub from '../../public/icons/github.svg';
import YouTube from '../../public/icons/youtube_icon_with_text.svg';
import Email from '../../public/icons/email.svg';
import LinkedIn from '../../public/icons/linkedin.svg';

const Button = ({ className, title, link, isemail }) => {
  return (
    <>
      {isemail && (
        <a
          href={`mailto:${link}`}
          className={className}
          rel="nofollow noreferrer noopener"
        >
          {title}

          <Email />
        </a>
      )}

      {!isemail && (
        <a
          href={link}
          className={className}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {title}

          {title === 'Live page' && <LivePage />}
          {title === 'LinkedIn' && <LinkedIn />}
          {title === 'GitHub' && <GitHub />}
          {title === 'Presentation' && <YouTube />}
        </a>
      )}
    </>
  );
};

export default Button;
