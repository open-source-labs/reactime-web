import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <h1>Nav List</h1>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <Link href={'/info'}>
        <a>Info</a>
      </Link>
    </nav>
  );
};

export default Navbar;
