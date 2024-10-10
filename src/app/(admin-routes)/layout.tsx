import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/providers/sidebarProvider";
import React from "react";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <SidebarProvider>
        <div>
          <div className="flex h-screen">
            <Sidebar />
            <div className="relative flex flex-1 flex-col lg:ml-72">
              <Header />

              <main>
                <div className="mx-auto max-w-screen-2xl min-h-screen p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </SidebarProvider>
  );
}
