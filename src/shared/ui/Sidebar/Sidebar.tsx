import React from "react";
import Link from "next/link";
import {
  Home,
  PersonOutline,
  SearchOutline,
} from "@/shared/assets/icons/components";
import PlusSquareOutline from "@/shared/assets/icons/components/PlusSquareOutline";
import MessageCircleOutline from "@/shared/assets/icons/components/MessageCircleOutline";
import TrendingUpOutline from "@/shared/assets/icons/components/TrendingUpOutline";
import BookmarkOutline from "@/shared/assets/icons/components/BookmarkOutline";
import LogOutOutline from "@/shared/assets/icons/components/LogOutOutline";

const Sidebar = () => {
  return (
    <nav className="w-[220px] h-lvh bg-dark-700 text-light-100 flex justify-center items-center relative ">
      <div>
        <div className="flex flex-col gap-6 mb-[60px] mt-[72px] ">
          <Link className="flex gap-3" href={"/"}>
            <Home className="text-light-100 fill-light-100" /> Home
          </Link>
          <Link className="flex gap-3" href={"/create"}>
            <PlusSquareOutline className="text-light-100 fill-light-100" />
            Create
          </Link>
          <Link className="flex gap-3" href={"/profile"}>
            <PersonOutline className="text-light-100 fill-light-100" />
            My profile
          </Link>
          <Link className="flex gap-3" href={"/messenger"}>
            <MessageCircleOutline className="text-light-100 fill-light-100" />
            Messenger
          </Link>
          <Link className="flex gap-3" href={"/search"}>
            <SearchOutline className="text-light-100 fill-light-100" />
            Search
          </Link>
        </div>
        <div className="flex flex-col gap-6 mb-[180px]">
          <Link className="flex gap-3" href={"/statistics"}>
            <TrendingUpOutline className="text-light-100 fill-light-100" />
            Statistics
          </Link>
          <Link className="flex gap-3" href={"/favorites"}>
            <BookmarkOutline className="text-light-100 fill-light-100" />
            Favorites
          </Link>
        </div>
        <Link className="flex gap-3 mb-[200px]" href={"/favorites"}>
          <LogOutOutline className="text-light-100 fill-light-100" />
          Log out
        </Link>
      </div>
      <div className="w-[1px] h-lvh bg-dark-300 absolute top-0 right-0"></div>
    </nav>
  );
};

export default Sidebar;
