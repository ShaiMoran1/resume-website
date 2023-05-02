import React from "react";
import { ReactComponent as TypeScriptIconSvg } from '../../../assets/svg/typescript.svg'

type TypeScriptIconProps = {};

export const TypeScriptIcon: React.FC<TypeScriptIconProps> = () => {
  return (
    <a href="https://github.com/ShaiMoran1" className="h-12 w-12  flex items-center justify-center">
      <TypeScriptIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
