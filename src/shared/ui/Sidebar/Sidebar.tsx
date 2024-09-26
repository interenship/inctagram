import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { cn } from "@/features/utils/cn";
import { Button } from "@/shared/ui/Button";

interface MenuItem {
  href: string;
  label: string;
  icon: React.ElementType;
  filledIcon?: React.ElementType;
  disabled?: boolean;
}

const primaryMenuItems: MenuItem[] = [
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

const secondaryMenuItems: MenuItem[] = [
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
const renderMenuItem = (props: MenuItem) => {
  const { href, label, icon: Icon, filledIcon: FilledIcon, disabled } = props;
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Button asChild variant="text" className="text-light-100">
      <Link
        key={href}
        href={disabled ? "#" : href}
        className={cn(
          "flex gap-3 group focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:outline-none rounded",
          {
            "cursor-not-allowed pointer-events-none": disabled,
          },
        )}
      >
        {isActive && FilledIcon ? (
          <FilledIcon
            className={cn(
              "transition-colors w-6 h-6 text-light-100 duration-200 ease-in-out",
              {
                "group-hover:text-accent-500 text-accent-500": isActive,
                "text-dark-100": disabled,
              },
            )}
          />
        ) : (
          <Icon
            className={cn(
              "transition-colors text-light-100 w-6 h-6 group-hover:text-accent-100 duration-200 ease-in-out",
              {
                "text-accent-500": isActive,
                "text-dark-100": disabled,
              },
            )}
          />
        )}
        <Typography.MEDIUM14
          className={cn(
            "transition-colors duration-200 ease-in-out group-hover:text-accent-100",
            {
              "group-hover:text-accent-500 text-accent-500 font-bold": isActive,
              "text-dark-100": disabled,
            },
          )}
        >
          {label}
        </Typography.MEDIUM14>
      </Link>
    </Button>
  );
};

export const Sidebar = () => {
  return (
    <nav className="w-[220px] h-screen bg-dark-700 text-light-100 flex justify-center items-center relative">
      <div>
        <div className="flex flex-col gap-6 mb-[60px] mt-[72px]">
          {primaryMenuItems.map(renderMenuItem)}
        </div>
        <div className="flex flex-col gap-6 mb-[180px]">
          {secondaryMenuItems.map(renderMenuItem)}
        </div>

        <Button asChild variant="text" className="text-light-100">
          <Link
            className="flex gap-3 group mb-[180px] focus:ring-2 focus:ring-accent-500 focus:outline-none rounded"
            href={"/logout"}
          >
            <LogOutOutline className="text-light-100 group-hover:text-accent-100 group-active:text-accent-500" />
            <Typography.MEDIUM14 className="group-hover:text-accent-100 group-active:text-accent-500">
              Log out
            </Typography.MEDIUM14>
          </Link>
        </Button>
      </div>
      <div className="w-[1px] h-lvh bg-dark-300 absolute top-0 right-0"></div>
    </nav>
  );
};
