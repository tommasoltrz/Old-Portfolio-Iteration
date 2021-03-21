import * as React from "react";
import Navigation from "../Navigation/Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
