import React from "react";
import { Profile } from "../../components/ui/Profile";
import { Card } from "../../components/ui/Card";
import { Title } from "../../components/ui/Title";
import { GithubIcon } from "../../components/ui/Icons/GithubIcon";
import { LinkedInIcon } from "../../components/ui/Icons/LinkedInIcon";

type AboutMeProps = {};

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <>
      <Card classNames="h-1/3 w-3/4 flex flex-col gap-10">
        <div>
          <Title text="About Me..." />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <p>
            Hey! Welcome to my website. My name is Shai Moran, i'm a 23 year old
            softwer developer from Be'er Sheva, Israel. I made this website to not only show
            a little of my web development skills, but to have some fun while
            doing it.
          </p>
          <p>
            Here are some linkes for my socials: 
          </p>
        </div>
        <div className="flex gap-5">
          <GithubIcon/>
          <LinkedInIcon/>
        </div>
      </Card>
    </>
  );
};
