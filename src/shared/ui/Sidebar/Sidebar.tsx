import React from "react";
import { MenuItem } from "@/shared/ui/Sidebar/MenuItem";
import { menuItemsData } from "@/shared/ui/Sidebar/menuItemsData";
import LogOutBtn from "@/shared/ui/Sidebar/LogOutBtn/LogOutBtn";
const { home, create, profile, messenger, search, statistics, favorites } =
  menuItemsData;

export const Sidebar = () => {
  const logOut = () => {};

  return (
    <nav className="w-[220px] h-screen bg-dark-700 text-light-100 pl-[40px] flex flex-col justify-center items-start border-r-[1px] border-dark-300 pt-[72px]">
      <MenuItem {...home} />
      <MenuItem {...create} />
      <MenuItem {...profile} />
      <MenuItem {...messenger} />
      <MenuItem {...search} className="mb-[60px]" />
      <MenuItem {...statistics} />
      <MenuItem {...favorites} className="mb-[140px]" />
      <LogOutBtn logOutFn={logOut} />
    </nav>
  );
};
