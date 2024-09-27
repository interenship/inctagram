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
import { MenuItem } from "@/shared/ui/Sidebar/MenuItem";

const menuItems = {
  home: { href: "/", label: "Home", icon: HomeOutline, filledIcon: Home },
  create: {
    href: "/create",
    label: "Create",
    icon: PlusSquareOutline,
    filledIcon: PlusSquare,
  },
  profile: {
    href: "/profile",
    label: "My profile",
    icon: PersonOutline,
    filledIcon: Person,
  },
  messenger: {
    href: "/messenger",
    label: "Messenger",
    icon: MessageCircleOutline,
    filledIcon: MessageCircle,
  },
  search: { href: "/search", label: "Search", icon: SearchOutline },
  statistics: {
    href: "/statistics",
    label: "Statistics",
    icon: TrendingUpOutline,
    filledIcon: TrendingUp,
  },
  favorites: {
    href: "/favorites",
    label: "Favorites",
    icon: BookmarkOutline,
    filledIcon: Bookmark,
  },
};

const logOut = () => {};

export const Sidebar = () => {
  return (
    <nav className="w-[220px] h-screen bg-dark-700 text-light-100 pl-[40px] flex flex-col justify-center items-start border-r-[1px] border-dark-300">
      <MenuItem
        href={menuItems.home.href}
        label={menuItems.home.label}
        icon={menuItems.home.icon}
        filledIcon={menuItems.home.filledIcon}
        className="mt-[72px]"
      />
      <MenuItem
        href={menuItems.create.href}
        label={menuItems.create.label}
        icon={menuItems.create.icon}
        filledIcon={menuItems.create.filledIcon}
      />
      <MenuItem
        href={menuItems.profile.href}
        label={menuItems.profile.label}
        icon={menuItems.profile.icon}
        filledIcon={menuItems.profile.filledIcon}
      />
      <MenuItem
        href={menuItems.messenger.href}
        label={menuItems.messenger.label}
        icon={menuItems.messenger.icon}
        filledIcon={menuItems.messenger.filledIcon}
      />
      <MenuItem
        href={menuItems.search.href}
        label={menuItems.search.label}
        icon={menuItems.search.icon}
        className="mb-[60px]"
      />
      <MenuItem
        href={menuItems.statistics.href}
        label={menuItems.statistics.label}
        icon={menuItems.statistics.icon}
        filledIcon={menuItems.statistics.filledIcon}
      />
      <MenuItem
        href={menuItems.favorites.href}
        label={menuItems.favorites.label}
        icon={menuItems.favorites.icon}
        filledIcon={menuItems.favorites.filledIcon}
        className="mb-[140px]"
      />
      <Button
        variant="text"
        className="text-light-100 cursor-pointer flex gap-3 group mb-[180px] focus:ring-2 focus:ring-accent-500 focus:outline-none rounded"
        onClick={logOut}
      >
        <LogOutOutline className="text-light-100 group-hover:text-accent-100 group-active:text-accent-500" />
        <Typography.MEDIUM14 className="group-hover:text-accent-100 group-active:text-accent-500">
          Log out
        </Typography.MEDIUM14>
      </Button>
    </nav>
  );
};
