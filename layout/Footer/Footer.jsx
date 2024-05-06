import Container from 'components/Container/Container';

const Footer = () => {
  return (
    <footer className="h-[60px] bg-black">
      <Container className="flex h-full items-center justify-center">
        <p className="text-small font-light text-white xl:text-middle">
          &copy; 2023-2024 Nadiia Khoptiuk
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
