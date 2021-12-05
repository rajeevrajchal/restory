import { BiRestaurant, BiHomeAlt, BiBell } from "react-icons/bi";

export interface SidebarItemType {
  label: string;
  icon: any;
  path: string;
  activeRoute: string;
}

const SidebarItems: SidebarItemType[] = [
  {
    label: "Home",
    icon: BiHomeAlt,
    path: "/",
    activeRoute: "home",
  },
  {
    label: "Notifications",
    icon: BiBell,
    path: "/notifications",
    activeRoute: "notification",
  },
  {
    label: "Resturant",
    icon: BiRestaurant,
    path: "/resturants",
    activeRoute: "resturant",
  },
];

export default SidebarItems;
