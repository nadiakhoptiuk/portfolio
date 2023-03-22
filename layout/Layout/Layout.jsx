import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
