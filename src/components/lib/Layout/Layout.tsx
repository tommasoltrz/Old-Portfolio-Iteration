import * as React from "react";
import Navigation from "../../Navigation/Navigation";
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      {children}
    </>
  );
};

export default Layout;
