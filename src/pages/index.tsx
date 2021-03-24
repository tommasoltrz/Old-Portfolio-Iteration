import * as React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";

const IndexPage: React.FC<any> = ({}) => {
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <Hero />
      </Layout>
    </main>
  );
};

export default IndexPage;
