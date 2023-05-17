import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic.js';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Container from 'components/Container/Container';
import NavBar from 'components/NavBar/NavBar';

const MobileMenu = dynamic(() =>
  import('../../components/MobileMenu/MobileMenu'),
);

export const Header = ({ data }) => {
  const [isBurgerShown, setIsBurgerShown] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const keys = Object.values(data);

  const anchors = keys
    ?.filter(el => el.blockAnchorId)
    .map(el => {
      return { title: el.blockTitle, id: el.blockAnchorId, order: el.order };
    });

  const sortedAnchors = [...anchors].sort((a, b) => a.order - b.order);

  useEffect(() => {
    isMobile && setIsBurgerShown(true);
    !isMobile && setIsBurgerShown(false);
  }, [isMobile]);

  return (
    <header className="fixed top-0 left-0 z-20 h-[70px] w-[100%] bg-black">
      <Container className="container flex h-full items-center justify-between">
        <Link
          href="/"
          className="text-small font-light text-white xl:text-middle"
        >
          N. Khoptiuk
        </Link>

        {!isBurgerShown && (
          <NavBar
            anchors={sortedAnchors}
            orientation="horizontal"
            menu="false"
          />
        )}

        {isBurgerShown && <MobileMenu anchors={sortedAnchors} />}
      </Container>
    </header>
  );
};

export default Header;
