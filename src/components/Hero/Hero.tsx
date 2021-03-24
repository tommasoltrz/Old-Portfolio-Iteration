import * as React from "react";
import { useEffect } from "react";
import Cursor from "../Cursor/Cursor";
import * as styles from "./Hero.module.scss";
type Props = {};

const Hero: React.FC<Props> = ({}) => {
  return (
    <div className={`grid ${styles.heroWrap}`}>
      <div className={`col-12 `}>
        <h4>Hello there</h4>
        <h1 className={styles.responsiveHeading}>I am Tommaso.</h1>
        <h2 className={styles.responsiveHeading}>I make web things.</h2>
      </div>
      <div id={styles.cBlob}></div>
      <div id={styles.cClick}></div>
    </div>
  );
};

export default Hero;
