"use client";

import SideBarItems from "@/utils/sidebarItems";
import React, { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function layout({ children }: ILayoutProps) {
  // const userInfo = getUserInfo()
  //@ts-ignore
  const role = "admin";

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-8">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full bg-base-200">
          <SideBarItems role={role} />
        </ul>
      </div>
    </div>
  );
}
