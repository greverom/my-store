import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 492); // ✅ Detectar <= 492px
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 492); // ✅ Se actualiza al cambiar el tamaño de pantalla
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Cerrar sidebar si se hace click fuera (solo en móviles)
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

  // ✅ Cerrar sidebar si el mouse sale en pantallas >768px o <=492px
  const handleMouseEnter = () => {
    if (!isMobile || isSmallScreen) {
      setIsSidebarExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile || isSmallScreen) {
      setIsSidebarExpanded(false);
      if (isSmallScreen) setIsSidebarOpen(false); // ✅ Se cierra completamente en <= 492px
    }
  };

  // Manejo de submenús
  const toggleSubMenu = (menuKey: string) => {
    setOpenDropdown((prev) => (prev === menuKey ? null : menuKey));
  };

  const closeSubMenu = () => {
    setOpenDropdown(null);
  };

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    isMobile,
    isSmallScreen, // ✅ Nueva variable para usar en el Sidebar.tsx
    isSidebarExpanded,
    openDropdown,
    toggleSubMenu,
    closeSubMenu,
    sidebarRef,
    dropdownRefs,
    handleMouseEnter,
    handleMouseLeave,
  };
};