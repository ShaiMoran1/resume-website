import React from "react";
import { ReactComponent as MongoDBIconSvg } from '../../../assets/svg/mongodb.svg'

type MongoDBIconProps = {};

export const MongoDBIcon: React.FC<MongoDBIconProps> = () => {
  return (
    <a href="https://github.com/ShaiMoran1" className="h-12 w-12  flex items-center justify-center">
      <MongoDBIconSvg className="h-10 w-10 hover:h-12 hover:w-12 transition-all cursor-pointer"/>
    </a>
  );
};
