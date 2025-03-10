import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const theme = {
  sidebarBg: "rgba(98, 99, 102, 0.66)", 
  sidebarText: "rgba(241, 235, 232, 0.95)", 
  sidebarTextActive: "rgba(247, 242, 240, 0.95)", 
  sidebarHoverBg: "rgba(251, 160, 124, 0.53)", 
  sidebarShadow: "4px 0px 20px rgba(0, 0, 0, 0.3)", 

  iconColor: "rgba(250, 138, 86, 0.95)", 
  iconHover: "rgba(250, 100, 50, 1)", 

  textLight: "#ffffff",
  textDark: "#333", 
};

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-300px")};
  top: 0;
  bottom: 0;
  width: 275px;
  background-color: ${theme.sidebarBg};
  box-shadow: ${({ $isOpen }) => ($isOpen ? theme.sidebarShadow : "none")};
  backdrop-filter: blur(15px);
  transition: left 0.7s;
  z-index: 9;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto; 
  gap: 25px;
  overflow-x: hidden; 
  scrollbar-width: thin; 
  scrollbar-color: #5a5a5a transparent;

  &::-webkit-scrollbar {
    width: 6px; 
  }
`;

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 22px;
  left: 15px;
  border: none;
  width: 45px;
  height: 45px;
  font-size: 38px;
  background-color: transparent;
  color: rgba(54, 58, 69);
  cursor: pointer;
  z-index: 8;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "block")}; 
`;

export const CloseButton = styled.button<{$isOpen: boolean}>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")}; 
  position: fixed; 
  top: 22px;
  left: 250px; 
  border: none;
  width: 45px;
  height: 45px;
  font-size: 22px;
  background-color: rgba(250, 138, 86, 0.95);
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.3); 
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 11;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
`;

export const ShoppingEmoji = styled.span`
  font-size: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SidebarItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLinkStyle = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${theme.sidebarText};
  text-decoration: none;
  padding: 15px 0;
  justify-content: left;
  gap: 18px;
  cursor: pointer;
  font-size: .9rem;
  transition: all 0.2s ease-in-out;

    &:hover {
    background-color: ${theme.sidebarHoverBg};
  }

  &.active {
    color: ${theme.sidebarTextActive};
    font-weight: bold;
  }

  &.active svg {
    fill: ${theme.sidebarTextActive} !important;
  }

   svg {
    width: 20px;
    height: 20px;
    fill: ${theme.sidebarText};
    padding-left: 30px;
    flex-shrink: 0;
    text-align: center;
    transition: fill 0.2s;

    &:hover {
      fill: ${theme.iconHover};
    }
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean; $isExpanded: boolean; $isParentActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ $isParentActive }) => ($isParentActive ? theme.sidebarTextActive : theme.sidebarText)};
  font-weight: ${({ $isParentActive }) => ($isParentActive ? "bold" : "normal")};
  text-decoration: none;
  padding: 16px 0;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 30px;
    flex-shrink: 0;
    fill: ${({ $isParentActive }) => ($isParentActive ? theme.sidebarTextActive : theme.sidebarText)};
  }

  .arrow {
    width: 12px;
    height: 12px;
    margin-right: 30px; 
    transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  }

  span {
    flex-grow: 1; 
    text-align: left; 
    margin-left: 19.5px;
  }

  &:hover {
   background-color: ${theme.sidebarHoverBg};
  }
`;

export const Submenu = styled.ul<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  padding-left: 0;
  border-bottom: 1px solid ${theme.sidebarHoverBg};
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")}; 
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: max-height 0.3s, opacity 0.3s, transform 0.3s;

  li {
    width: 100%;
    list-style: none;
  }

  li a {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.sidebarText};
    padding: 15px 40px;
    font-size: 0.9rem;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.sidebarHoverBg};
    }
  }

  li a.nav-active {
    color: ${theme.sidebarTextActive};

    &::before {
      content: "•";
      margin-right: 8px;
      color: ${theme.sidebarTextActive};
      font-size: 0.9rem;
    }
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  
  .logout-link {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: left;
    padding: 15px 30px;
    gap: 18px;
    color: white;
    cursor: pointer;

    svg {
      width: 21px;
      height: 21px;
    }

    span {
      display: flex;
      font-size: 0.85rem;
    }
}
`;

