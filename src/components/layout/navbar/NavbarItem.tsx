import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarItemType } from "../../../types";

type NavbarItemProps = {
  item: NavbarItemType;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(item.path);
  };

  return (
    <div
      className="cursor-pointer text-lg h-full w-20 flex justify-center items-center hover:bg-slate-400 transition-all duration-500"
      onClick={onClickHandler}
    >
      {item.label}
    </div>
  );
};
