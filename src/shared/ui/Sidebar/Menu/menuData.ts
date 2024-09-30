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
  home: { href: "/", text: "Home", icon: HomeOutline, filledIcon: Home },
  create: {
    href: "/create",
    text: "Create",
    icon: PlusSquareOutline,
    filledIcon: PlusSquare,
  },
  profile: {
    href: "/profile",
    text: "My profile",
    icon: PersonOutline,
    filledIcon: Person,
  },
  messenger: {
    href: "/messenger",
    text: "Messenger",
    icon: MessageCircleOutline,
    filledIcon: MessageCircle,
  },
  search: { href: "/search", text: "Search", icon: SearchOutline },
  statistics: {
    href: "/statistics",
    text: "Statistics",
    icon: TrendingUpOutline,
    filledIcon: TrendingUp,
  },
  favorites: {
    href: "/favorites",
    text: "Favorites",
    icon: BookmarkOutline,
    filledIcon: Bookmark,
  },
};
