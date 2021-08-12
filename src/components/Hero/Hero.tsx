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

    gsap
      .timeline({})
      .to(".bg", {
        height: `100%`,
        duration: 0.5,
        ease: "sine.out",
      })
      .from(".t", {
        opacity: 0,
        y: -40,
        duration: 1,
        delay: 0.2,
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
      .to(
        `.dot`,
        {
          width: `20vw`,
          height: `20vw`,
        },
        0
      )
      .to(
        `.dot`,
        {
          width: `150vw`,
          height: `150vw`,
        },
        1
      )
      .to(
        `.w`,
        {
          top: 20,
        },
        1
      )
      .to(
        `.e`,
        {
          top: -50,
        },
        1
      )
      .to(
        `.b`,
        {
          top: -70,
        },
        1
      )
      .to(
        `.period`,
        {
          top: -150,
        },
        1
      )
      .to(
        `.dot`,
        {
          width: `400vw`,
          height: `400vw`,
        },
        2
      )
      .to(
        `.w`,
        {
          top: -450,
        },
        2
      )
      .to(
        `.e`,
        {
          top: -590,
        },
        2
      )
      .to(
        `.b`,
        {
          top: -680,
        },
        2
      )
      .to(
        `.period`,
        {
          top: -720,
        },
        2
      );
  };

  return (
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

            <h1 className={cn(styles.responsiveHeading, `w t`, styles.w)}>w</h1>
            <h1 className={cn(styles.responsiveHeading, `e t`, styles.w)}>e</h1>
            <h1 className={cn(styles.responsiveHeading, `b t`, styles.w)}>b</h1>
            <h1 className={cn(styles.responsiveHeading, `period t`, styles.w)}>
              .
            </h1>
          </div>
        </div>
      </div>
      <div className={cn(styles.bg, `bg`)}></div>
    </div>
  );
};

export default Hero;
