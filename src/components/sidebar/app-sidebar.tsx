"use client"

import type * as React from "react"
import { Dock, FileBadge, ShieldIcon as ShieldUser, SquareLibrary, Home } from "lucide-react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"

import { NavHeader } from "./nav-header"

const data = {
  navMain: [
    {
      title: "Dashboard",
      icon: Home,
      link: "/dashboard",
    },
    {
      title: "Mutation",
      icon: FileBadge,
      link: "/dashboard/mutation",
    },
    {
      title: "Records",
      icon: SquareLibrary,
      link: "/dashboard/records",
    },
  ],
  admin: [
    {
      title: "Applications",
      icon: Dock,
      link: "/dashboard/admin/applications",
    },
    {
      title: "Records",
      icon: SquareLibrary,
      link: "/dashboard/admin/records",
    },
    {
      title: "Users",
      icon: ShieldUser,
      link: "/dashboard/admin/users",
    },
  ],
}

export function AppSidebar({
  userInfo,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  userInfo: {
    name: string
    email: string
    image: string | null
    role: "USER" | "ADMIN"
  } | null
}) {
  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className="bg-emerald-900 text-white border-r border-emerald-800"
      {...props}
    >
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} label="Services" />
        {userInfo?.role === "ADMIN" && <NavMain items={data.admin} label="Admin" />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
      <SidebarRail className="bg-emerald-800 border-r border-emerald-700" />
    </Sidebar>
  )
}
