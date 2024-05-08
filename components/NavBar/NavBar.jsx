import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const NavBar = ({ anchors, orientation, menu, handleClose }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <nav>
      <ul
        className={`ml-auto h-max min-h-[70px] w-max grid-rows-1 gap-x-12 text-small font-thin md:text-middle ${
          orientation === 'horizontal' && 'flex'
        }`}
      >
        {anchors?.map(({ title, id }) => {
          return (
            <li key={id} className="flex items-center">
              <Link
                to={id}
                href="/"
                spy={true}
                offset={isDesktop ? -166 : -100}
                smooth={true}
                hashSpy={true}
                duration={500}
                onClick={menu && handleClose}
                className="relative cursor-pointer py-4 font-light text-white transition-colors duration-300 after:absolute after:bottom-[20px] after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-500 after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus:after:origin-left focus:after:scale-x-100 md:py-6 md:text-small xl:text-middle"
                activeClass="relative !after:bg-beige !text-beige after:content-[''] after:w-full after:h-[1px] after:hidden after:bottom-[20px] after:left-0 py-6"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  orientation: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
};
