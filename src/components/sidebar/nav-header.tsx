"use client"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar"

export function NavHeader() {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenu >
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="w-[10rem] data-[state=open]:bg-emerald-800 data-[state=open]:text-white" asChild>
          <Link href="/" onClick={() => setOpenMobile(false)}>
            <div className="bg-emerald-600 text-white flex aspect-square size-8 items-center justify-center rounded-lg">
              <MapPin className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm">
              <span className="truncate font-medium text-white">Bhoomi Sudhar</span>
              <span className="truncate text-xs text-emerald-300">Land Reform</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
