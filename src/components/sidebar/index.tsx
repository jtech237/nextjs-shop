"use client";
import ClickOutside from "@/components/ClickOutside";
import clsx from "clsx";
import { useMemo } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import SidebarGroup from "./SidebarGroup";
import menuGroups from "./routes";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "@/providers/sidebarProvider";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Sidebar: React.FC<{}> = ({}) => {
  const { isOpen, toggleSidebar, pageName, setPageName } = useSidebar();

  const menuContent = useMemo(
    () =>
      menuGroups.map((group, groupIndex) => (
        <SidebarGroup key={groupIndex} name={group.name}>
          {group.menuItems.map((item, itemIndex) => (
            <SidebarItem
              item={item}
              key={itemIndex}
              pageName={pageName}
              setPageName={setPageName}
            />
          ))}
        </SidebarGroup>
      )),
    [pageName]
  );
  return (
    <ClickOutside onClick={toggleSidebar}>
      <aside
        className={clsx(
          "fixed left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-blue-dark text-white-smoke dark:bg-gray-900 duration-300 ease-linear lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* <!-- Sidebar header --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
          <Link
            href="/admin"
            className={`${pacifico.className} text-lg md:text-2xl flex items-center`}
          >
            <Image src="/logo.png" alt="Logo" width={50} height={32} />
            E-SHOP
          </Link>
          <button className="block lg:hidden">
            <Hamburger toggled={isOpen} toggle={toggleSidebar} size={32} />
            <span className="sr-only">Toggle Sidebar</span>
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">{menuContent}</nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
