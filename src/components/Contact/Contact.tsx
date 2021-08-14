import * as React from "react";
import * as styles from "./Contact.module.scss";
import cn from "classnames";
import StickyLink from "../lib/StickyLink/StickyLink";

type Props = {};

const Contact: React.FC<Props> = ({}) => {
  return (
    <div className={styles.contact} id="contact">
      <div className={`grid ${styles.contactWrap}`}>
        <div
          className={cn(
            `col-12  col-start-sm-2 col-end-sm-11 col-start-md-2 col-end-md-11 col-start-lg-3 col-end-lg-10`,
            styles.links
          )}
        >
          <StickyLink
            label={"Email"}
            href={"mailto:tommasoltrz@gmail.com"}
            newTab={false}
            classname={cn(styles.navLink)}
          />
          <StickyLink
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/tommaso-laterza/"}
            newTab={true}
            classname={cn(styles.navLink)}
          />
          <StickyLink
            label={"Github"}
            href={"https://github.com/tommasoltrz"}
            newTab={true}
            classname={cn(styles.navLink)}
          />
          <StickyLink
            label={"Download CV"}
            href={"/img/tommaso-laterza-cv.pdf"}
            newTab={true}
            classname={cn(styles.navLink)}
          />
        </div>
      </div>
      <p className={styles.credits}>
        Designed and built by Tommaso Laterza 2021
      </p>
    </div>
  );
};

export default Contact;
