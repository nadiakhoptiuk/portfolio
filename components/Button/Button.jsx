import LivePage from '../../public/icons/live_page_icon.svg';
import GitHub from '../../public/icons/github.svg';
import BigGitHub from '../../public/icons/big-github-icon.svg';
import YouTube from '../../public/icons/youtube_icon.svg';
import Email from '../../public/icons/email.svg';
import LinkedIn from '../../public/icons/linkedin.svg';

const Button = ({ className, title, link, isemail, isTitle = 'true' }) => {
  return (
    <>
      {isemail && (
        <a
          href={`mailto:${link}`}
          className={className}
          rel="nofollow noreferrer noopener"
        >
          <Email />
          <span className="ml-[10px] max-xl:hidden xl:text-middle">
            {title}
          </span>
        </a>
      )}

      {!isemail && (
        <a
          href={link}
          className={className}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {title === 'Live page' && <LivePage />}
          {title === 'LinkedIn' && <LinkedIn />}

          {title === 'GitHub' && isTitle === 'true' && <GitHub />}
          {title === 'GitHub' && isTitle === false && <BigGitHub />}

          {title === 'Presentation' && (
            <YouTube className="!w-[39px !h-[39px]" />
          )}

          {isTitle && (
            <span className="ml-[10px] max-xl:hidden xl:text-middle ">
              {title}
            </span>
          )}
        </a>
      )}
    </>
  );
};

export default Button;
