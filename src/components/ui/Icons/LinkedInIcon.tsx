import React from "react";
import { ReactComponent as LinkedInIconSvg } from '../../../assets/svg/linkedin.svg'

type LinkedInIconProps = {};

export const LinkedInIcon: React.FC<LinkedInIconProps> = () => {
  return (
    <a href="https://www.linkedin.com/in/shai-moran-908bb9211/" className="h-12 w-12 flex items-center justify-center">
      <LinkedInIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
