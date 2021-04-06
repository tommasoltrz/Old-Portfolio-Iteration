import * as React from "react";
import * as styles from "./Spacer.module.scss";
import { useEffect, useState } from "react";
import cn from "classnames";
import Particles from "../lib/Particles/Particles";

type Props = {};

const Spacer: React.FC<Props> = ({}) => {
  return (
    <div className={`${styles.spacerWrap}`}>
      <Particles color="#111111" bgColor="#f3f4f6" />
    </div>
  );
};

export default Spacer;
