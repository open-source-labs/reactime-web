import Footer from './Footer';
import Navbar from './Navbar';
import { useScroll } from 'framer-motion';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navbar scrollYProgress={scrollYProgress} />
      <div className="content">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
