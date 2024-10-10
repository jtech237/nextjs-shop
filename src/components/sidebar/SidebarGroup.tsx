"use client"
import React from "react";

const SidebarGroup = React.memo(({
    name,
    children
}: {name?: string, children: React.ReactNode}) => {
  return (
    <>
      <div>
        {name && <h3 className="mb-4 ml-4 text-sm font-semibold text-white-smoke/50 uppercase">
          {name}
        </h3>}
        <ul className="mb-6 flex flex-col gap-1.5">
            {children}
        </ul>
      </div>
    </>
  );
});

SidebarGroup.displayName = "SidebarGroup"

export default SidebarGroup
