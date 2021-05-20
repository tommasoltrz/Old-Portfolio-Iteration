import * as React from "react";
import Particles from "../lib/Particles/Particles";
import * as styles from "./Contact.module.scss";
// import { ReactComponent as link } from "../../../static/img/git.svg";
type Props = {};

const Contact: React.FC<Props> = ({}) => {
  return (
    <div className={styles.contact} id="contact">
      <div className={`grid ${styles.contactWrap}`}>
        <div>
          <h2>Get in Touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>tommasoltrz@gmail.com</p>
          <div className={styles.icons}>
            <a href="">
              <img src="img/git.svg" alt="github" />
            </a>
            <a href="">
              <img src="img/linkedlin.svg" alt="linkedlin" />
            </a>
          </div>
        </div>
      </div>
      <Particles color="#fceeb5" bgColor="#0038f5" />
    </div>
  );
};

export default Contact;
