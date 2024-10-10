"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  pageName: string
  setPageName: (name: string) => void
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const [pageName, setPageName] = useLocalStorage("page-name", "dashboard");

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, pageName, setPageName }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error("useSidebar doit être utilisé dans un SidebarProvider");
    }
    return context;
  };
