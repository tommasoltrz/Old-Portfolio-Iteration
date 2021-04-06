import * as React from "react";
import * as styles from "./Navigation.module.scss";
type Props = {};

const Navigation: React.FC<Props> = ({}) => {
  const handleClick = (e: any, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <div className={`${styles.navigation} grid`}>
      <div className={styles.wrap}>
        <a
          href="home"
          onClick={(e) => handleClick(e, "home")}
          className={styles.homeLink}
        >
          <div className={styles.home}></div>
        </a>
        <a href="about" onClick={(e) => handleClick(e, "about")}>
          About
        </a>
        <a href="experience" onClick={(e) => handleClick(e, "experience")}>
          Experience
        </a>
        <a href="works" onClick={(e) => handleClick(e, "works")}>
          Works
        </a>
        <a href="contact" onClick={(e) => handleClick(e, "contact")}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
