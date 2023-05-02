import React from "react";
import { ReactComponent as GithubIconSvg } from '../../../assets/svg/github.svg'

type GithubIconProps = {};

export const GithubIcon: React.FC<GithubIconProps> = () => {
  return (
    <a href="https://github.com/ShaiMoran1" className="h-12 w-12  flex items-center justify-center">
      <GithubIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
