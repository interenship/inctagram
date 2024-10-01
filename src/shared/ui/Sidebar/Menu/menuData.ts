import {
  Bookmark,
  BookmarkOutline,
  Home,
  HomeOutline,
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

export const menuData = {
  home: { href: "/", title: "Home", icon: HomeOutline, filledIcon: Home },
  create: {
    href: "/create",
    title: "Create",
    icon: PlusSquareOutline,
    filledIcon: PlusSquare,
  },
  profile: {
    href: "/profile",
    title: "My profile",
    icon: PersonOutline,
    filledIcon: Person,
  },
  messenger: {
    href: "/messenger",
    title: "Messenger",
    icon: MessageCircleOutline,
    filledIcon: MessageCircle,
  },
  search: { href: "/search", title: "Search", icon: SearchOutline },
  statistics: {
    href: "/statistics",
    title: "Statistics",
    icon: TrendingUpOutline,
    filledIcon: TrendingUp,
  },
  favorites: {
    href: "/favorites",
    title: "Favorites",
    icon: BookmarkOutline,
    filledIcon: Bookmark,
  },
};
