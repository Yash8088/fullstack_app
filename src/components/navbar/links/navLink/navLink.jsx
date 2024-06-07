"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation"; //hook to get current pathname

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path} //url to go when link is clicked
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`} //applies .container to all, conditionally applies styles.active css if the links pathname matches current pathname
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
