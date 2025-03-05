import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../sidebar/sidebarLinks";
import { useSidebar } from "../../../hooks/Sidebar/useSidebar";
import { FaChevronDown } from "react-icons/fa";
import { SidebarContainer, SidebarNav, LogoContainer, SidebarMenu, SidebarItem, SidebarLinkStyle, 
         DropdownMenu, Submenu, LogoutContainer, BurgerButton, ShoppingEmoji } from "../../../styles/Sidebar/sidebar.style";

export const Sidebar = () => {
  const { isSidebarOpen, isMobile, dropdownRefs, handleOpenSidebar, isSidebarExpanded, sidebarRef,
          handleMouseEnter, handleMouseLeave, openDropdown, toggleSubMenu, closeSubMenu, } = useSidebar();
  const { pathname }      = useLocation();
  const [ searchParams]   = useSearchParams();
  const   categoryName    = searchParams.get("name");

  return (
    <>
        <BurgerButton   onClick={ handleOpenSidebar } $isOpen={ isSidebarOpen }> ☰ </BurgerButton>
      <SidebarContainer ref={ sidebarRef } $isOpen={ isSidebarOpen || isSidebarExpanded } $isDesktopExpanded = { isSidebarExpanded }
                        onMouseEnter={ !isMobile ? handleMouseEnter : undefined } onMouseLeave = { handleMouseLeave }>
        <SidebarNav>

          <LogoContainer>
            <ShoppingEmoji> 🛍️ </ShoppingEmoji>
          </LogoContainer>

          <SidebarMenu>
            {sidebarLinks
              .filter(link => link.title !== "Salir") 
              .map((link: SidebarLink, index: number) => {
                const isOpen = openDropdown === link.path;
                const Icon = link.icon; 
                const isParentActive = link.subMenu?.some((subLink: SidebarLink) => pathname.startsWith(subLink.path)) || pathname.startsWith(link.path);

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
                      <SidebarLinkStyle to={ link.path } className={({ isActive }) => (isActive ? "active" : "")} $isOpen={ isSidebarOpen }>
                        <Icon /> 
                        <span>{link.title}</span>
                      </SidebarLinkStyle>
                    )}
                  </SidebarItem>
                );
            })}
          </SidebarMenu>

          <LogoutContainer $isOpen = { isSidebarOpen }>
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