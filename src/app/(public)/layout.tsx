import type React from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
