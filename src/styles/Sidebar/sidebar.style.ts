import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const theme = {
  sidebarBg: "rgba(98, 99, 102, 0.66)", 
  sidebarText: "rgba(241, 235, 232, 0.95)", 
  sidebarTextActive: "rgba(247, 242, 240, 0.95)", 
  sidebarHoverBg: "rgba(251, 160, 124, 0.53)", 
  sidebarShadow: "4px 0px 20px rgba(0, 0, 0, 0.2)", 

  iconColor: "rgba(250, 138, 86, 0.95)", 
  iconHover: "rgba(250, 100, 50, 1)", 

  textLight: "#ffffff",
  textDark: "#333", 
};

export const SidebarContainer = styled.div<{ $isOpen: boolean; $isDesktopExpanded: boolean }>`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-280px")}; 
  top: 0;
  bottom: 0;
  width: 275px;
  background-color: ${theme.sidebarBg};
  box-shadow: ${theme.sidebarShadow};
  backdrop-filter: blur(15px);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
            left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9;

  @media (min-width: 768px) {
    left: 0;
    width: 67px;

    &:hover {
      width: 275px;  
    }
  }

  @media (max-width: 768px) {
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-280px")};

    &:hover {
      width: ${({ $isOpen }) => ($isOpen ? "275px" : "0")}; 
    }
  }
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
  top: 50px;
  left: ${({ $isOpen }) => ($isOpen ? "-999px" : "0px")}; 
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: ${theme.iconColor}; 
  color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  transition: left 0.3s ease-in-out;
  z-index: 12; 

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
  }
    @media (min-width: 769px) { 
    display: none; 
  }

  &:hover {
    background-color: ${theme.iconHover};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 14px;
`;

export const ShoppingEmoji = styled.span`
  font-size: 44px;
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

export const SidebarLinkStyle = styled(NavLink)<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${theme.sidebarText};
  text-decoration: none;
  padding: 15px 0;
  justify-content: left;
  gap: 20px;
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
    padding-left: 25px;
    flex-shrink: 0;
    text-align: center;
    transition: fill 0.2s;
  }

    span {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    ${SidebarContainer}:hover & span {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 767px) {
    span {
      opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
      visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
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
    margin-left: 25px;
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
    opacity: 0;
    visibility: hidden;
    flex-grow: 1; 
    text-align: left; 
    margin-left: 19.5px;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    ${SidebarContainer}:hover & span {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 767px) {
    span {
      opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};
      visibility: ${({ $isExpanded }) => ($isExpanded ? "visible" : "hidden")};
    }
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

export const LogoutContainer = styled.div<{ $isOpen:boolean }>`
  width: 100%;
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  
  .logout-link {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: left;
    padding: 15px 28px;
    gap: 16px;
    color: white;
    cursor: pointer;

    svg {
      width: 21px;
      height: 21px;
    }

    span {
      display: flex;
      opacity: 0;
      visibility: hidden;
      font-size: 0.85rem;
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    }
      
    @media (min-width: 768px) {
    ${SidebarContainer}:hover & span {
      opacity: 1;
      visibility: visible;
      }
    }

    @media (max-width: 767px) {
      span {
        opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
        visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
      }
    }
}
`;

