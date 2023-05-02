import React from "react";
import { AboutMe } from "./AboutMe";
import { AboutWebsite } from "./AboutWebsite";

type AboutPageProps = {};

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <AboutMe />
      <AboutWebsite />
    </>
  );
};
