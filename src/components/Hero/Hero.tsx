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
    </div>
  );
};

export default Hero;
