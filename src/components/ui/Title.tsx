import React from "react";
import { Large, Medium, Size, Small } from "../../types";

type TitleProps = {
  text: string;
  classNames?: string;
  size?: Size;
};

export const Title: React.FC<TitleProps> = ({ text, classNames = '', size = Large }) => {
  const getTitleSize = () => {
    switch (size) {
      case Small:
        return "text-sm";
      case Medium:
        return "text-lg";
      case Large:
        return "text-2xl";

      default:
        break;
    }
  };
  return <div className={`${getTitleSize()} font-bold ${classNames}`}>{text}</div>;
};
