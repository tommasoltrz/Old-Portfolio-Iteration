import * as React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Cursor from "../components/lib/Cursor/Cursor";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Layout from "../components/lib/Layout/Layout";
import { useEffect, useRef } from "react";
import Spacer from "../components/Spacer/Spacer";

const IndexPage: React.FC<any> = ({}) => {
  // const aboutRef = useRef<any | null>(null);
  let main: HTMLElement;
  // let aboutOffsetY: number;
  useEffect(() => {
    addEventListeners();
    // aboutOffsetY =
    //   aboutRef.current.getBoundingClientRect().top + window.scrollY;
    main = document.getElementsByTagName("main")[0];

    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    window.addEventListener("scroll", onPageScroll, false);
  };

  const removeEventListeners = () => {
    window.removeEventListener("scroll", onPageScroll);
  };

  const onPageScroll = (e: any) => {};

  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <Hero />
        <About />
        <Experience />
        {/* <Spacer /> */}
        <Contact />
      </Layout>
      <Cursor />
    </main>
  );
};

export default IndexPage;
