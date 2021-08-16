import * as React from "react";
import * as styles from "./About.module.scss";
import { useEffect, useContext, useState } from "react";
import cn from "classnames";
import { Context } from "../lib/StoreProvider/StoreProvider";

type Props = {};

const About: React.FC<Props> = ({}) => {
  const pos = useContext(Context);
  const [rectPos, setRectPos] = useState({ x: 0, y: 0, w: 0, h: 0 });
  let block: any;

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    block = document.getElementById("aboutText");
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e: any) => {
    const rect = block?.getBoundingClientRect();
    setRectPos({ x: rect.x, y: rect.y, w: rect.width, h: rect.height });
  };

  return (
    <div className={cn(styles.about)} id="about">
      <div className={`grid ${styles.aboutWrap}`}>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-3 col-end-md-10 col-start-lg-4 col-end-lg-9`}
        >
          <h2 className={`fade-in-up`}>About Me</h2>
          <p
            className={cn("body-large fade-in-up", styles.normalText)}
            id={`aboutText`}
          >
            I am an italian Design Techonogist, currently based across Munich
            and Turin. I specialize in building, and sometime designing, digital
            experiences. My background is a mixed bag of web development,
            physical computing and interaction design. My main focus these days
            is building exceptional digital products at Frog for a variety of
            clients.
            <span
              className={cn("body-large fade-in-up", styles.overlayText)}
              style={{
                clipPath: `circle(${
                  pos.x > rectPos.x &&
                  pos.x < rectPos.x + rectPos.w &&
                  pos.y > rectPos.y &&
                  pos.y < rectPos.y + rectPos.h
                    ? "15vw"
                    : "0"
                } at ${pos.x - rectPos.x}px ${pos.y - rectPos.y}px)`,
              }}
            >
              I am an italian Design Techonogist, currently based across Munich
              and Turin. I specialize in building, and sometime designing,
              digital experiences. My background is a mixed bag of web
              development, physical computing and interaction design. My main
              focus these days is building exceptional digital products at Frog
              for a variety of clients.
            </span>
            <span
              className={styles.dotHighlight}
              style={{
                left: `${pos.x - rectPos.x}px`,
                top: `${pos.y - rectPos.y}px`,
              }}
            ></span>
            <span
              className={styles.dotHighlight}
              style={{
                left: `${pos.x - rectPos.x}px`,
                top: `${pos.y - rectPos.y}px`,
              }}
            ></span>
            <span
              className={styles.dotHighlight}
              style={{
                left: `${pos.x - rectPos.x}px`,
                top: `${pos.y - rectPos.y}px`,
              }}
            ></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
