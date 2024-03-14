"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import VerticalDivider from "../VerticalDivider";

const links = [
  {
    name: "About",
    path: "/",
    pathChecker: (pathname: string) => {
      return pathname === "/";
    },
  },
  {
    name: "CV",
    path: "/cv",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      {links.map((link, index) => {
        return (
          <Fragment key={link.path}>
            <Link
              href={link.path}
              className={classNames([
                styles.navlink,
                {
                  [styles.active]: link.pathChecker
                    ? link.pathChecker(pathname)
                    : pathname.includes(link.path),
                },
              ])}
            >
              {link.name}
            </Link>
            {index !== links.length - 1 && (
              <VerticalDivider height="12px" opacity={0.2} />
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default NavBar;
