import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';

const Layout = ({ children, data }) => {
  return (
    <div>
      <Header data={data} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
