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
