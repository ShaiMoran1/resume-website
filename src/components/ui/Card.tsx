import React from "react";

type CardProps = {
  classNames?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ classNames = "", children }) => {
  return (
    <div
      className={`${classNames} border rounded-3xl shadow-xl bg-gray-100 p-4`}
    >
      {children}
    </div>
  );
};
