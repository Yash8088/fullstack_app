"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

import { useState } from "react";
//defining an array of link objects, with title and path
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* iterate over 'links' array and generate a Link component for each link */}
        {/* put => ( parentheses not curly brace, ( show an implicit return  */}
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          //if true, it will go to first set of parentheses , if admin you will see admin, or else you will see logout
          // using multiple items so wrap them in a parent <>
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          //if session false it will go here
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* on click , set state open and make the previous  value the opposite*/}
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {
        //check if menu is open, if it is then do the parentheses
        open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Links;
