import * as React from "react";
import * as styles from "./Hero.module.scss";
import { useEffect, useState } from "react";
import cn from "classnames";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  const [compclass, setCompClass] = useState("hide");

  useEffect(() => {
    setCompClass("fadeInUp");
  }, []);
  return (
    <div className={`grid ${styles.heroWrap}`} id="home">
      <div
        className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-3 col-end-md-10 col-start-lg-3 col-end-lg-10`}
      >
        <h1 className={cn(styles.responsiveHeading, compclass)}>
          Hello, my name is Tommaso. I make Things for the web.
        </h1>
      </div>
      <svg
        className={styles.editorial}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g className={styles.parallax1}>
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f3f4f6" />
        </g>
      </svg>
    </div>
  );
};

export default Hero;
