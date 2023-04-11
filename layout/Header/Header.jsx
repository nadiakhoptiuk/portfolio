import Container from 'components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import Link from 'next/link';

export const Header = ({ data }) => {
  const keys = Object.values(data);

  const anchors = keys
    ?.filter(el => el.blockAnchorId)
    .map(el => {
      return { title: el.blockTitle, id: el.blockAnchorId, order: el.order };
    });

  const sortedAnchors = [...anchors].sort((a, b) => a.order - b.order);

  return (
    <header className="fixed top-0 left-0 z-20 h-[70px] w-[100%] bg-black">
      <Container className="container flex items-center justify-between">
        <Link
          href="/"
          className="font-light text-white md:text-small xl:text-big"
        >
          N. Khoptiuk
        </Link>

        <NavBar anchors={sortedAnchors} />
      </Container>
    </header>
  );
};

export default Header;
