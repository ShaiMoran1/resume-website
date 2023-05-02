import React from "react";
import { ReactComponent as NodeJsIconSvg } from '../../../assets/svg/nodejs.svg'

type NodeJsIconProps = {};

export const NodeJsIcon: React.FC<NodeJsIconProps> = () => {
  return (
    <a href="https://github.com/ShaiMoran1" className="h-12 w-12  flex items-center justify-center">
      <NodeJsIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
