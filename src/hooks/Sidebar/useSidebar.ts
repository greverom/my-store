import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [preventClose, setPreventClose] = useState(false); 

  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSidebarOpen && !isSidebarExpanded) {
      setOpenDropdown(null);
    }
  }, [isSidebarOpen, isSidebarExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isSidebarOpen]);

  // 🔹 Control de hover
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsSidebarExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (preventClose) return; 

    if (isMobile) {
      setIsSidebarOpen(false);
      setOpenDropdown(null);
    } else {
      setIsSidebarExpanded(false);
    }
  };

  const handleOpenSidebar = () => {
    setPreventClose(true); 
    setIsSidebarOpen(true);

    setTimeout(() => {
      setPreventClose(false); 
    }, 400);
  };

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarExpanded,
    openDropdown,
    toggleSubMenu: (menuKey: string) => setOpenDropdown((prev) => (prev === menuKey ? null : menuKey)),
    closeSubMenu: () => setOpenDropdown(null),
    sidebarRef,
    dropdownRefs,
    isMobile,
    handleMouseEnter,
    handleMouseLeave,
    handleOpenSidebar, 
  };
};