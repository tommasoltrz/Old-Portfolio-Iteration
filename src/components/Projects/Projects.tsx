import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as styles from "./Projects.module.scss";
import cn from "classnames";

type Props = {};

const mockData = {
  titleOne: "Selected ",
  titleTwo: "Projects",
  projects: [
    {
      title: "Frogdesign.com",
      type: "Website - Front End",
      role: "Front End",
      url: "https://www.Frogdesign.com",
      stack: "Next.js - Typescript - Wordpress",
      imageUrl: "/img/frog.png",
      body: "",
    },
    {
      title: "Allvest - Allianz",
      type: "Website - Front End",
      role: "Front End",
      url: "https://www.allvest.de",
      stack: "Angular - Typescript - GraphQl - d3.js",
      imageUrl: "/img/Allvest.png",
      body: "",
    },
    {
      title: "Referral ID - Astrazeneca",
      type: "Website - Front End",
      role: "Front End",
      url: "https://www.asthmareferid.com/",
      stack: "Angular - Typescript",
      imageUrl: "/img/referralID.png",
      body: "",
    },
  ],
};

const Projects: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Projects} id="works">
      {/* <div className={styles.titleWrapper}>
        <p className={styles.marquee}>
          <h2>{[...Array(10)].map((x, i) => mockData.titleOne)}</h2>
        </p>
      </div> */}
      <div className={styles.titleWrapper}>
        <div className={styles.marquee}>
          <h2>{mockData.titleOne}</h2>
        </div>
        <div className={cn(styles.marquee, styles.marquee2)}>
          <h2>{mockData.titleTwo}</h2>
        </div>
      </div>

      <div className={"grid"}>
        {mockData.projects.map((project, idx) => (
          <a
            href={project.url}
            key={idx}
            className={cn(styles.projWrap, `projectLink fade-in-up`)}
            target="_blank"
          >
            <div>
              <h3 className={`fade-in-up`}>{project.title}</h3>
              <p className={cn(`fade-in-up`, styles.type)}>{project.type}</p>
              <p className={cn(`fade-in-up`, styles.stackItem)}>
                {project.stack}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <img className={styles.projImg} src={project.imageUrl} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
