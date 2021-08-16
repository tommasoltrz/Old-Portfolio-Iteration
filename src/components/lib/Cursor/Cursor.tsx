import { useEffect, useState } from "react";
import * as styles from "./Cursor.module.scss";
import cn from "classnames";
import React, { useContext } from "react";
import { Context } from "../StoreProvider/StoreProvider";
type Props = {};

const Cursor: React.FC<Props> = ({}) => {
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const pos = useContext(Context);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [heroHovered, setHeroHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [experiencesHovered, setExperiencesHovered] = useState(false);
  const [worksHovered, setWorkHovered] = useState(false);
  const [footerHovered, setFooterHovered] = useState(false);
  const [workTabHovered, setWorkTabHovered] = useState(false);
  const [projLinkHovered, setProjLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    // Hero Section
    document.getElementById("home")?.addEventListener("mouseover", () => {
      setHeroHovered(true);
    });
    document.getElementById("home")?.addEventListener("mouseout", () => {
      setHeroHovered(false);
    });
    // About Section
    document.getElementById("about")?.addEventListener("mouseover", () => {
      setAboutHovered(true);
    });
    document.getElementById("about")?.addEventListener("mouseout", () => {
      setAboutHovered(false);
    });
    // Experiences Section
    document.getElementById("experience")?.addEventListener("mouseover", () => {
      setExperiencesHovered(true);
    });
    document.getElementById("experience")?.addEventListener("mouseout", () => {
      setExperiencesHovered(false);
    });
    // Works Section
    document.getElementById("works")?.addEventListener("mouseover", () => {
      setWorkHovered(true);
    });
    document.getElementById("works")?.addEventListener("mouseout", () => {
      setWorkHovered(false);
    });

    // Works Tabs
    const tabs = document.getElementsByClassName("workTab");
    Array.from(tabs).forEach((tab) => {
      tab.addEventListener("mouseover", () => {
        setWorkTabHovered(true);
      });
      tab.addEventListener("mouseout", () => {
        setWorkTabHovered(false);
      });
    });

    // Project Links
    const projs = document.getElementsByClassName("projectLink");
    Array.from(projs).forEach((proj) => {
      proj.addEventListener("mouseover", () => {
        setProjLinkHovered(true);
      });
      proj.addEventListener("mouseout", () => {
        setProjLinkHovered(false);
      });
    });

    // Contact Section
    document.getElementById("contact")?.addEventListener("mouseover", () => {
      setFooterHovered(true);
    });
    document.getElementById("contact")?.addEventListener("mouseout", () => {
      setFooterHovered(false);
    });
    // Links
    document.querySelectorAll("a").forEach((el, idx) => {
      el.addEventListener("mouseover", () => {
        setLinkHovered(true);
      });
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = cn(styles.cursor, {
    [styles.cursor_clicked]: clicked,
    [styles.cursor_hidden]: hidden,
    [styles.cursor_link_hovered]: linkHovered,
    [styles.cursor_hero_hovered]: heroHovered,
    [styles.cursor_about_hovered]: aboutHovered,
    [styles.cursor_experience_hovered]: experiencesHovered,
    [styles.cursor_works_hovered]: worksHovered,
    [styles.cursor_footer_hovered]: footerHovered,
    [styles.cursor_work_tab_hovered]: workTabHovered,
    [styles.cursor_work_tab_hovered]: workTabHovered,
    [styles.cursor_proj_link_hovered]: projLinkHovered,
  });

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
