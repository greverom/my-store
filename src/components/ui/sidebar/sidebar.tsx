import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../sidebar/sidebarLinks";
import { useSidebar } from "../../../hooks/Sidebar/useSidebar";

import { FaChevronDown } from "react-icons/fa";

import { SidebarContainer, SidebarNav, LogoContainer, SidebarMenu, 
         SidebarItem, SidebarLinkStyle, DropdownMenu,
         Submenu, LogoutContainer, BurgerButton, ShoppingEmoji, 
         CloseButton
        } from "../../../styles/Sidebar/sidebar.style";

export const Sidebar = () => {
  const { openDropdown, toggleSubMenu, closeSubMenu, sidebarRef,
          isSidebarOpen, setIsSidebarOpen, dropdownRefs } = useSidebar();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("name");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BurgerButton onClick={handleToggleSidebar} $isOpen={isSidebarOpen}>
        ☰
      </BurgerButton>

      <SidebarContainer ref={sidebarRef} $isOpen={isSidebarOpen}>
        <SidebarNav>
        <CloseButton $isOpen={isSidebarOpen} onClick={handleToggleSidebar}>✕</CloseButton>
          <LogoContainer>
            <ShoppingEmoji>🛍️</ShoppingEmoji>
          </LogoContainer>

          <SidebarMenu>
            {sidebarLinks
              .filter(link => link.title !== "Salir") 
              .map((link: SidebarLink, index: number) => {
                const isOpen = openDropdown === link.path;
                const Icon = link.icon; 
                const isParentActive = link.subMenu?.some((subLink: SidebarLink) =>
                  pathname.startsWith(subLink.path)
                ) || pathname.startsWith(link.path);

                return (
                  <SidebarItem
                    key={index}
                    ref={(el) => {
                      if (link.subMenu) dropdownRefs.current[link.path] = el;
                    }}
                  >
                    {link.subMenu ? (
                      <>
                        <DropdownMenu 
                          $isOpen={isOpen}  
                          $isExpanded={isSidebarOpen} 
                          $isParentActive={!!isParentActive} 
                          onClick={() => toggleSubMenu(link.path)}
                        >
                          <Icon />
                          <span>{link.title}</span>
                          <FaChevronDown className="arrow" />
                        </DropdownMenu>

                          <Submenu $isOpen={isOpen}>
                            {link.subMenu.map((subLink, subIndex) => {
                              const isSubmenuActive = categoryName === subLink.path.split("=")[1]; 

                              return (
                                <li key={subIndex}>
                                  <NavLink
                                    to={subLink.path}
                                    className={isSubmenuActive ? "nav-active" : ""}
                                    onClick={() => closeSubMenu()}
                                  >
                                    {subLink.title}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </Submenu>
                      </>
                    ) : (
                      <SidebarLinkStyle to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                        <Icon /> 
                        <span>{link.title}</span>
                      </SidebarLinkStyle>
                    )}
                  </SidebarItem>
                );
            })}
          </SidebarMenu>

          <LogoutContainer>
            {sidebarLinks
              .filter(link => link.title === "Salir") 
              .map((link, index) => {
                const Icon = link.icon; 
                return (
                  <a key={index} className="logout-link">
                    <Icon /> <span>{link.title}</span>
                  </a>
                );
            })}
          </LogoutContainer>

        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;