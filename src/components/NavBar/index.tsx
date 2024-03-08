"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const links = [
  {
    name: "About",
    path: "/",
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

const VerticalDivider = ({
  height = "100%",
  opacity = 1,
}: {
  height?: string;
  opacity?: number;
}) => (
  <div
    className={styles.divider}
    style={{
      height: height,
      opacity: opacity,
    }}
  />
);

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      {links.map((link, index) => {
        return (
          <Fragment key={link.path}>
            <Link
              href={link.path}
              className={classNames([
                styles.navlink,
                { [styles.active]: pathname === link.path },
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
    </div>
  );
};

export default NavBar;
