import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image width="52px" height="52px" src="/ninja.svg" alt="ninja logo" />
      </div>
      <Link href="/">
      <a>Home</a>
      </Link>
      <Link href="/about">
      <a>About</a>
      </Link>
      <Link href="/ninjas/">
      <a>Ninja Listing</a>
      </Link>
    </nav>
   );
}
 
export default Navbar;