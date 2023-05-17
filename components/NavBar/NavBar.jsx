import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavBar = ({ anchors, orientation, menu, handleClose }) => {
  return (
    <nav>
      <ul
        className={`ml-auto h-max min-h-[70px] w-max grid-rows-1 gap-x-12 text-middle font-thin ${
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
                offset={-166}
                smooth={true}
                hashSpy={true}
                duration={500}
                onClick={menu && handleClose}
                className="cursor-pointer py-6 font-light text-white md:text-small xl:text-middle"
                activeClass="relative after:bg-white after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-[18px] after:left-0 py-6 "
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
  // anchors:,
  orientation: PropTypes.string.isRequired,
  menu: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};
