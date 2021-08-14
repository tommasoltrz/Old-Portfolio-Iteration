import * as React from "react";
import * as styles from "./Hero.module.scss";
import { useEffect } from "react";
import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  useEffect(() => {
    initAnimation();
  }, []);

  const initAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".bg", {
      height: `100%`,
      duration: 0.5,
      ease: "sine.out",
    });
    gsap.to(".t", {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    });
    gsap.to(".scrollIcon", {
      display: `block`,
      delay: 3,
      opacity: 1,
      duration: 0.5,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "400% bottom",
          scrub: true,
          pin: true,
        },
      })
      .to(`.dot`, {
        width: `30vw`,
        height: `30vw`,
      })
      .to(
        `.w`,
        {
          top: 20,
        },
        "5%"
      )
      .to(
        `.e`,
        {
          top: -50,
        },
        "5%"
      )
      .to(
        `.b`,
        {
          top: -70,
        },
        "5%"
      )
      .to(
        `.p`,
        {
          top: -150,
        },
        "5%"
      )
      .to(
        `.dot`,
        {
          width: `100vw`,
          height: `100vw`,
        },
        "5%"
      )
      .to(
        `.w`,
        {
          top: -450,
        },
        "20%"
      )
      .to(
        `.e`,
        {
          top: -590,
        },
        "20%"
      )
      .to(
        `.b`,
        {
          top: -680,
        },
        "20%"
      )
      .to(
        `.p`,
        {
          top: -720,
        },
        "20%"
      )
      .to(
        `.dot`,
        {
          width: innerWidth > innerHeight ? `200vw` : "200vh",
          height: innerWidth > innerHeight ? `200vw` : "200vh",
        },
        "20%"
      )
      .to(
        `.scrollIcon`,
        {
          opacity: 0,
        },
        "20%"
      );
  };

  return (
    <>
      <div className={styles.heroWrap} id="home">
        <div className={`grid ${styles.heroGrid}`}>
          <div
            className={cn(
              `col-12  col-start-sm-2 col-end-sm-11 col-start-md-2 col-end-md-11 col-start-lg-3 col-end-lg-10`
            )}
          >
            <h1 className={cn(styles.responsiveHeading, "t")}>
              Hello, my name is Tommaso. I make Things for the{" "}
            </h1>{" "}
            <div className={cn(styles.webWrap, `webWrap`)}>
              <div className={cn(styles.dot, `dot`)}></div>

              <h1 className={cn(styles.responsiveHeading, `w t`, styles.w)}>
                w
              </h1>
              <h1 className={cn(styles.responsiveHeading, `e t`, styles.w)}>
                e
              </h1>
              <h1 className={cn(styles.responsiveHeading, `b t`, styles.w)}>
                b
              </h1>
              <h1 className={cn(styles.responsiveHeading, `p t`, styles.w)}>
                .
              </h1>
            </div>
          </div>
        </div>

        <div className={cn(styles.bg, `bg`)}></div>
      </div>
      <div className={cn(styles.scrollIconWrap, `scrollIcon`)}>
        <div className={cn(styles.scrollIcon)}></div>
        <p>Keep scrolling</p>
      </div>
    </>
  );
};

export default Hero;
