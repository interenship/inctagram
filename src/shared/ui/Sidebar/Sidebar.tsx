import React from "react";
import { MenuItem } from "@/shared/ui/Sidebar/Menu/MenuItem";
import { menuData } from "@/shared/ui/Sidebar/Menu/menuData";
import LogOutBtn from "@/shared/ui/Sidebar/LogOutBtn/LogOutBtn";
import Menu from "@/shared/ui/Sidebar/Menu/Menu";
const { home, create, profile, messenger, search, statistics, favorites } =
  menuData;

export const Sidebar = () => {
  const logOut = () => {};
  return (
    <aside className="w-[220px] h-screen bg-dark-700 text-light-100  border-r-[1px] border-dark-300 pt-[72px]">
      <Menu>
        <MenuItem {...home} />
        <MenuItem {...create} />
        <MenuItem {...profile} />
        <MenuItem {...messenger} />
        <MenuItem {...search} className="mb-[60px]" />
        <MenuItem {...statistics} />
        <MenuItem {...favorites} className="mb-[140px]" />
        <LogOutBtn logOutFn={logOut} />
      </Menu>
    </aside>
  );
};
