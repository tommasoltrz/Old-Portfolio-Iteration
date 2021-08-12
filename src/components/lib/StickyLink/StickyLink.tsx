import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import * as styles from "./StickyLink.module.scss";
import { Context } from "../StoreProvider/StoreProvider";

type Props = {
  href: string;
  label: string;
  classname?: string;
};

const StickyLink: React.FC<Props> = ({ href, classname, label }) => {
  const pos = useContext(Context);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [hovering, setHovering] = useState(false);
  const [rectPos, setRectPos] = useState({ x: 0, y: 0, w: 0, h: 0 });
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    linkRef.current?.addEventListener("mouseenter", onMouseEnter);
    linkRef.current?.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll);
  };

  const removeEventListeners = () => {
    linkRef.current?.removeEventListener("mouseenter", onMouseEnter);
    linkRef.current?.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("scroll", onScroll);
  };

  const onMouseEnter = () => {
    setHovering(true);
  };
  const onMouseLeave = () => {
    setHovering(false);
  };
  const onScroll = (e: any) => {
    const rect = linkRef.current?.getBoundingClientRect();
    if (rect) {
      setRectPos({ x: rect.x, y: rect.y, w: rect.width, h: rect.height });
      console.log(rectPos);
    }
  };

  return (
    <a
      href={href}
      className={cn(styles.link, classname)}
      ref={linkRef}
      style={
        hovering
          ? {
              transform: `translate(${pos.x - rectPos.x - rectPos.w / 2}px, ${
                pos.y - rectPos.y - rectPos.h / 2
              }px)`,
            }
          : {}
      }
    >
      {label}
    </a>
  );
};

export default StickyLink;
