import Container from 'components/Container/Container';

const Footer = () => {
  return (
    <footer className="h-[60px] bg-black max-xl:hidden">
      <Container className="flex h-full items-center justify-center">
        <p className="text-white">&copy; 2023 Nadiia Khoptiuk</p>
      </Container>
    </footer>
  );
};

export default Footer;
