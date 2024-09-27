import React from "react";
import {
  Bookmark,
  BookmarkOutline,
  Home,
  HomeOutline,
  LogOutOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  SearchOutline,
  TrendingUp,
  TrendingUpOutline,
} from "@/shared/assets/icons/components";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { renderMenuItems } from "@/shared/ui/Sidebar/MenuItems";
import { MenuItem } from "@/shared/ui/Sidebar/types";

const upperMenuItems: MenuItem[] = [
  { href: "/", label: "Home", icon: HomeOutline, filledIcon: Home },
  {
    href: "/create",
    label: "Create",
    icon: PlusSquareOutline,
    filledIcon: PlusSquare,
  },
  {
    href: "/profile",
    label: "My profile",
    icon: PersonOutline,
    filledIcon: Person,
  },
  {
    href: "/messenger",
    label: "Messenger",
    icon: MessageCircleOutline,
    filledIcon: MessageCircle,
  },
  { href: "/search", label: "Search", icon: SearchOutline },
];

const middleMenuItems: MenuItem[] = [
  {
    href: "/statistics",
    label: "Statistics",
    icon: TrendingUpOutline,
    filledIcon: TrendingUp,
  },
  {
    href: "/favorites",
    label: "Favorites",
    icon: BookmarkOutline,
    filledIcon: Bookmark,
  },
];

const logOut = () => {};

export const Sidebar = () => {
  return (
    <nav className="w-[220px] h-screen bg-dark-700 text-light-100 flex flex-col justify-center items-center border-r-[1px] border-dark-300">
      <div className="flex flex-col gap-[14px] mb-[60px] mt-[72px]">
        {upperMenuItems.map(renderMenuItems)}
      </div>
      <div className="flex flex-col gap-[14px] mb-[140px]">
        {middleMenuItems.map(renderMenuItems)}
      </div>
      <Button
        asChild
        variant="text"
        className="text-light-100 cursor-pointer"
        onClick={logOut}
      >
        <div className="flex gap-3 group mb-[180px] focus:ring-2 focus:ring-accent-500 focus:outline-none rounded">
          <LogOutOutline className="text-light-100 group-hover:text-accent-100 group-active:text-accent-500" />
          <Typography.MEDIUM14 className="group-hover:text-accent-100 group-active:text-accent-500">
            Log out
          </Typography.MEDIUM14>
        </div>
      </Button>
    </nav>
  );
};
