import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <a href="https://www.linkedin.com/company/reactime/">LinkedIn</a>
      <a href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US">
        Chrome
      </a>
      <a href="https://github.com/open-source-labs/reactime">Github</a>
    </nav>
  );
};

export default Navbar;
