// import Link

import { Link } from 'react-scroll';

const NavBar = ({ anchors }) => {
  return (
    <nav>
      <ul className="ml-auto flex h-max min-h-[70px] w-max grid-rows-1 gap-x-12  text-middle text-white">
        {anchors?.map(({ title, id }) => {
          return (
            <li key={id} className="flex items-center">
              <Link
                to={id}
                href="/"
                spy={true}
                offset={-120}
                smooth={true}
                hashSpy={true}
                duration={500}
                className="cursor-pointer py-6"
                activeClass="relative after:bg-white after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-[24px] after:left-0 py-6"
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