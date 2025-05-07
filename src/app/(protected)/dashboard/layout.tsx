import type React from "react"
import { getUserInfo } from "@/data/user"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUserInfo()
  return (
    <SidebarProvider open={false}>
      <AppSidebar userInfo={user} collapsible="none"/>
      <div className="flex w-full ml-0">
        <main className="w-full">{children}</main>
      </div>
    </SidebarProvider>
  )
}
