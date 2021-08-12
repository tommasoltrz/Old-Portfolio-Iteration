import * as React from "react";
import { useContext } from "react";

import * as styles from "./Navigation.module.scss";
import { Context } from "../lib/StoreProvider/StoreProvider";
import StickyLink from "../lib/StickyLink/StickyLink";

type Props = {};

const Navigation: React.FC<Props> = ({}) => {
  const pos = useContext(Context);

  const handleClick = (e: any, id: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div className={`${styles.navigation} grid`}>
        <div className={styles.wrap}>
          <a
            href="home"
            onClick={(e) => handleClick(e, "home")}
            className={styles.homeLink}
          >
            <div className={styles.home}></div>
          </a>
          <StickyLink
            label={"About"}
            href={"#about"}
            classname={styles.navLink}
          />
          <StickyLink
            label={"Experience"}
            href={"#experience"}
            classname={styles.navLink}
          />
          <StickyLink
            label={"Works"}
            href={"#works"}
            classname={styles.navLink}
          />
          <StickyLink
            label={"Contact"}
            href={"#contact"}
            classname={styles.navLink}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
