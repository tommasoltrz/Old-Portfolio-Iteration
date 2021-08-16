import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as styles from "./Experience.module.scss";
import cn from "classnames";
import ReactMarkdown from "react-markdown";

type Props = {};

const mockData = {
  title: "Work Experiences",
  tabs: [
    {
      title: "Frog",
      role: "Design Technologist",
      date: "2018 - present",
      url: "",
      body:
        "[Frog](https://frogdesign.com) is a leading global design and strategy consultancy.\n\nHere, I write modern, performant, maintainable code for a diverse array of client and internal projects. Being the company tech agnostic, I get to work with a variety of frameworks, platforms and CMS such as JavaScript, React, Angular and Contentful\n\nI work closely with the design teams, informing them of opportunities and limitations of the tech stack and helping them producing accurate documentation that can be better consumed by the dev teams.",
    },
    {
      title: "Arduino",
      role: "Design Technologist",
      date: "2015 - 2018",
      url: "",
      body:
        "[Arduino](https://arduino.cc) is an open-source electronics platform.\n\nHere I mainly used to work on the project [Casa Jasmina](http://casajasmina.cc/), researching and developing an open source way to the connected home.\n\nThe goal was to integrate traditional Italian skills in furniture and interior design with emergent skills in Italian open-source electronics.\n\nAlternatevely I would beta test new products and write questionable [tutorials.](https://create.arduino.cc/projecthub/arduino/pavlov-s-cat-7e6577?ref=user&ref_id=65561&offset=3).",
    },
  ],
};

const Experience: React.FC<Props> = ({}) => {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const handleClick = (idx: number) => {
    idx === tabIdx ? setTabIdx(-1) : setTabIdx(idx);
  };

  return (
    <div className={styles.experience} id="experience">
      <div className={`grid ${styles.exWrap}`}>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-2 col-end-md-11 col-start-lg-2 col-end-lg-11`}
        >
          <h2 className={`fade-in-up`}>{mockData.title}</h2>
        </div>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-2 col-end-md-11 col-start-lg-2 col-end-lg-5`}
        >
          {mockData.tabs.map((tab, idx) => (
            <div
              key={tab.title}
              className={cn(styles.title, {
                [styles.active]: idx === tabIdx,
              })}
            >
              <h3
                className={`fade-in-up workTab`}
                onClick={() => handleClick(idx)}
              >
                {tab.title}
              </h3>
              <p className={cn(`fade-in-up`, styles.date)}>{tab.date}</p>
              <div
                className={cn(
                  `fade-in-up frame`,
                  styles.frame,
                  styles.smallRes,
                  {
                    [styles.active]: idx === tabIdx,
                  }
                )}
              >
                <ReactMarkdown className={cn(`fade-in-up `, styles.body)}>
                  {mockData.tabs[idx].body}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`col-12 col-start-sm-2 col-end-sm-11  col-start-md-2 col-end-md-11 col-start-lg-7 col-end-lg-11`}
        >
          <div className={cn(`fade-in-up frame`, styles.frame)}>
            <ReactMarkdown className={cn(`fade-in-up`, styles.body)}>
              {mockData.tabs[tabIdx]?.body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
