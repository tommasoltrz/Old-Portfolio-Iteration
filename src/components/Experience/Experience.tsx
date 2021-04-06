import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as styles from "./Experience.module.scss";
import cn from "classnames";
import ScrollReveal from "scrollreveal";

type Props = {};

type mockProps = {
  title: string;
  tabs: tab[];
};

type tab = {
  title: string;
  role: string;
  date: string;
  url: string;
  body: string;
};

const mockData = {
  title: "Experience",
  tabs: [
    {
      title: "Frogdesign",
      role: "Design Technologist",
      date: "2018 - present",
      url: "",
      body:
        "Frogdesign is a leading global design and strategy consultancy.\n\nHere, I write modern, performant, maintainable code for a diverse array of client and internal projects. Being the company tech agnostic, I get to work with a variety of frameworks, platforms and CMS such as JavaScript, React, Angular and Contentful\n\nI work closely with the design teams, informing them of opportunities and limitations of the tech stack and helping them producing accurate documentation that can be better consumed by the dev teams.",
    },
    {
      title: "Arduino",
      role: "Design Technologist",
      date: "2015 - 2018",
      url: "",
      body:
        "Frogdesign is a leading global design and strategy consultancy.\n\nHere, I write modern, performant, maintainable code for a diverse array of client and internal projects. Being the company tech agnostic, I get to work with a variety of frameworks, platforms and CMS such as JavaScript, React, Angular and Contentful.\n\nI work closely with the design teams, informing them of opportunities and limitations of the tech stack and helping them producing accurate documentation that can be better consumed by the dev teams.",
    },
  ],
};

const Experience: React.FC<Props> = ({}) => {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const revealContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!!revealContainer.current) {
      ScrollReveal().reveal(revealContainer.current, { delay: 500 });
    }
  }, []);
  return (
    <div className={styles.experience} id="experience">
      <div className={`grid ${styles.exWrap}`} ref={revealContainer}>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-3 col-end-md-10 col-start-lg-4 col-end-lg-9`}
        >
          <h2>{mockData.title}</h2>
          <div className={styles.tabHeader}>
            {mockData.tabs.map((tab, idx) => (
              <div
                key={tab.title}
                onClick={() => setTabIdx(idx)}
                className={cn(styles.tab, { [styles.active]: idx === tabIdx })}
              >
                <h3>{tab.title}</h3>
              </div>
            ))}
          </div>
          <div className={styles.tabContent}>
            <h4>{mockData.tabs[tabIdx].role}</h4>
            <p className={``}>{mockData.tabs[tabIdx].date}</p>
            <p>{mockData.tabs[tabIdx].body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
