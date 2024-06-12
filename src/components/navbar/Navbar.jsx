import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css"; //import css styles

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        IMA
      </Link>
      <div>
        <Links /> {/* nextjs uses link instead of anchor tags */}
        {/* USE LINKS FUNCTION TO NOT LIST THEM INDIVUDALLY
         <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
