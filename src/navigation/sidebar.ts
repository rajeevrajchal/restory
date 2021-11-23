import { BiRestaurant, BiHomeAlt, BiBell } from "react-icons/bi";

export interface SidebarItemType {
  label: string;
  icon: any;
  path: string;
}

const SidebarItems: SidebarItemType[] = [
  {
    label: "Home",
    icon: BiHomeAlt,
    path: "/",
  },
  {
    label: "Notifications",
    icon: BiBell,
    path: "/notifications",
  },
  {
    label: "Resturant",
    icon: BiRestaurant,
    path: "/resturants",
  },
];

export default SidebarItems;
