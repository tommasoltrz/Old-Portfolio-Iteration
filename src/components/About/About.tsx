import * as React from "react";
import * as styles from "./About.module.scss";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import sr from "../../utils/sr";

type Props = {};

const About: React.FC<Props> = ({}) => {
  const revealContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!!revealContainer.current && !!sr) {
      sr.reveal(revealContainer.current, { delay: 500 });
    }
  }, []);

  return (
    <div className={cn(styles.about)} id="about">
      <div className={`grid ${styles.aboutWrap}`} ref={revealContainer}>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-8  col-start-md-3 col-end-md-8 col-start-lg-4 col-end-lg-7`}
        >
          <h2>About</h2>
          <p>
            I am an italian Design Techonogist, currently based in Munich &
            Turin. I specialize in building, and sometime designing, digital
            experiences. My background is a mixed bag of web development,
            physical computing and interaction design.
          </p>
          <p>
            My main focus these days is building digital products at{" "}
            <a href="Frogdesign">Frogdesign </a>
            for a variety of clients.
          </p>
          <p>Here are few technologies I’ve been working on recently:</p>
          <ul>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Figma</li>
            <li>Netlify</li>
          </ul>
        </div>
        <div
          className={`col-12 col-start-sm-9 col-end-sm-11 col-start-md-9 col-end-md-10 col-start-lg-8 col-end-lg-9 ${styles.imgWrap}`}
        >
          <div className={styles.placeholderImage}></div>
        </div>
      </div>
      {/* <Cursor /> */}
    </div>
  );
};

export default About;
