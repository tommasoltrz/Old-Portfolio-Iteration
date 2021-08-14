import * as React from "react";
import cn from "classnames";
import * as styles from "./Navigation.module.scss";
import StickyLink from "../lib/StickyLink/StickyLink";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

type Props = {};

const Navigation: React.FC<Props> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: any, id: string) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  useEffect(() => {
    initAnimation();
  }, []);

  useEffect(() => {
    gsap.to(".drawer", {
      clipPath: `circle(${menuOpen ? 150 : 0}vh at 100vw 0)`,
      pointerEvents: menuOpen ? "auto" : "none",
    });
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(".drawerLink", {
        autoAlpha: 1,
        display: "block",
        delay: 0.4,
        y: -20,
        duration: 0.3,
      });
    } else {
      document.body.style.overflow = "scroll";
      gsap.to(".drawerLink", {
        autoAlpha: 0,
        display: "none",
        y: 20,
      });
    }
  }, [menuOpen]);

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

          {/* <StickyLink
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
          /> */}

          <a
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(`navLink`, `burger`, styles.burger, {
              [styles.open]: menuOpen,
            })}
          >
            <span className={`burgerLine`}></span>
            <span className={`burgerLine`}></span>
          </a>
        </div>
      </div>
      <div className={cn(styles.drawer, `drawer`)}>
        {/* <StickyLink
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
          /> */}
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={cn(`drawerLink`, styles.drawerLink)}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
          className={cn(`drawerLink`, styles.drawerLink)}
        >
          Experience
        </a>
        <a
          href="#works"
          onClick={() => setMenuOpen(false)}
          className={cn(`drawerLink`, styles.drawerLink)}
        >
          Works
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={cn(`drawerLink`, styles.drawerLink)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
