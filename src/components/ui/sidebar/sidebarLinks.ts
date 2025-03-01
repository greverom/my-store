import { HomeIcon, LogoutIcon, ShoppingIcon } from "../../../assets/icons/icons";

export interface SidebarLink {
    title: string;
    path: string;
    icon: React.FC;
    roles?: ("ADMINISTRADOR" | "GUEST")[];
    subMenu?: SidebarLink[]; 
    isLogout?: boolean;
  }
  
  export const sidebarLinks: SidebarLink[] = [
    {
      title: "Home",
      path: "/home",
      icon: HomeIcon,
    },
    {
      title: "Shopping",
      path: "/shopping",
      icon: ShoppingIcon,
    },
   
    {
      title: "Salir",
      path: "#", 
      icon: LogoutIcon,
      isLogout: true, 
    },
  ];