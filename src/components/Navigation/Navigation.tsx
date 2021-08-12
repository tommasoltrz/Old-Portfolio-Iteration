import * as React from "react";
import cn from "classnames";
import * as styles from "./Navigation.module.scss";
import StickyLink from "../lib/StickyLink/StickyLink";
import { useEffect } from "react";
import { gsap } from "gsap";

type Props = {};

const Navigation: React.FC<Props> = ({}) => {
  const handleClick = (e: any, id: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    initAnimation();
  }, []);

  const initAnimation = () => {
    gsap.set(".navLink", { opacity: 1 });
    gsap.from(".navLink", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      delay: 0.6,
      ease: "none",
      stagger: 0.05,
    });
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
            <div className={cn(styles.home, `navLinkHome navLink`)}></div>
          </a>

          <StickyLink
            label={"About"}
            href={"#about"}
            classname={cn(styles.navLink, `navLink`)}
          />
          <StickyLink
            label={"Experience"}
            href={"#experience"}
            classname={cn(styles.navLink, `navLink`)}
          />
          <StickyLink
            label={"Works"}
            href={"#works"}
            classname={cn(styles.navLink, `navLink`)}
          />
          <StickyLink
            label={"Contact"}
            href={"#contact"}
            classname={cn(styles.navLink, `navLink`)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
