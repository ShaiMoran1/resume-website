import React from "react";
import { ReactComponent as ReactIconSvg } from '../../../assets/svg/react.svg'

type ReactIconProps = {};

export const ReactIcon: React.FC<ReactIconProps> = () => {
  return (
    <a href="https://github.com/ShaiMoran1" className="h-12 w-12  flex items-center justify-center">
      <ReactIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
