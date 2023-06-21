import React from "react";
import { NavbarItem } from "./NavbarItem";
import { NavbarItemType } from "../../../types";
import { Logo } from "./Logo";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = () => {
  const items: NavbarItemType[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Galory",
      path: "/galory",
    },
  ];
  return (
    <div className="flex flex-row h-16 items-center">
        <Logo/>
      {items.map((item) => {
        return (
          <>
            <NavbarItem item={item} key={item.label} />
          </>
        );
      })}
    </div>
  );
};
