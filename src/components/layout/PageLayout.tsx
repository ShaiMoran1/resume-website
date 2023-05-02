import React, { ReactElement } from "react";
import { Navbar } from "./navbar/Navbar";

type PageLayoutProps = {
    children: ReactElement
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
