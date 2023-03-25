import Container from 'components/Container/Container';
import NavBar from 'components/NavBar/NavBar';

export const Header = ({ data }) => {
  const keys = Object.values(data);

  const anchors = keys
    ?.filter(el => el.blockAnchorId)
    .map(el => {
      return { title: el.blockTitle, id: el.blockAnchorId, order: el.order };
    });

  const sortedAnchors = [...anchors].sort((a, b) => a.order - b.order);

  return (
    <header className="fixed top-0 left-0 w-[100vw] bg-black">
      <Container className="container flex items-center justify-between">
        <p className="text-white">N. Khoptiuk</p>

        <NavBar anchors={sortedAnchors} />
      </Container>
    </header>
  );
};

export default Header;
