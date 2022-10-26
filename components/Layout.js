import Footer from './Footer';
import Navbar from './Navbar';
import { useScroll } from 'framer-motion';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="content">
      <Navbar scrollYProgress={scrollYProgress} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
