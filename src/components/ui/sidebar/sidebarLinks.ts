import { CartIcon, HomeIcon, LogoutIcon, ShoppingIcon } from "../../../assets/icons/icons";

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
    // {
    //   title: "Shopping",
    //   path: "/shopping",
    //   icon: ShoppingIcon,
    // },
    {
      title: "Carrito",
      path: "/cart",
      icon: CartIcon, 
    },
    {
      title: "Productos",
      path: "/categories",
      icon: ShoppingIcon,
      subMenu: [
        {
          title: "todo",
          path: "/categories",  
          icon: ShoppingIcon,
        },
        {
          title: "Electronics",
          path: "/categories?name=electronics",
          icon: ShoppingIcon,
        },
        {
          title: "Jewelry",
          path: "/categories?name=jewelery",
          icon: ShoppingIcon,
        },
        {
          title: "Men's Clothing",
          path: "/categories?name=men's clothing",
          icon: ShoppingIcon,
        },
        {
          title: "Women's Clothing",
          path: "/categories?name=women's clothing",
          icon: ShoppingIcon,
        }
      ],
    },

    {
      title: "Salir",
      path: "#", 
      icon: LogoutIcon,
      isLogout: true, 
    },
  ];