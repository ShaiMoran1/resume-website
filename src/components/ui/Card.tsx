import React from "react";

type CardProps = {
  classNames?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ classNames = "", children }) => {
  return (
    <div
      className={`${classNames}`}
    >
      {children}
    </div>
  );
};
