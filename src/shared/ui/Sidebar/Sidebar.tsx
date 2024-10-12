import React from "react";

import LogOutBtn from "@/shared/ui/Sidebar/LogOutBtn/LogOutBtn";
import Menu from "@/shared/ui/Sidebar/Menu/Menu";
import { menuData } from "@/shared/ui/Sidebar/Menu/menuData";
import { MenuItem } from "@/shared/ui/Sidebar/Menu/MenuItem";

const { home, create, profile, messenger, search, statistics, favorites } = menuData;

export const Sidebar = () => {
  const logOut = () => {};
  return (
    <aside className="h-screen w-[220px] border-r border-dark-300  bg-dark-700 pt-[72px] text-light-100">
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
