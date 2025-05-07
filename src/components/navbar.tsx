import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { isUserLoggedIn } from "@/data/user"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import { buttonVariants } from "./ui/button"

export async function Navbar() {
  const user = await isUserLoggedIn()
  return (
    <header className="py-4 border-b border-emerald-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-8 h-8" />
          </div>
          <Link href="/" className="font-mono text-xl font-bold text-emerald-800 tracking-tight">
          <pre>
          नेपाल सरकार
          भूमि सुधार
          </pre>
          </Link>
        </div> */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-8 h-8" />
          </div>
          <Link href="/" className="font-mono text-lg font-bold text-red-600 tracking-tight leading-snug">
            <div>
              <div>नेपाल सरकार</div>
              <div>भूमि सुधार, तथा व्यवस्था कार्यालय</div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/dashboard"
              className={buttonVariants({
                className: "group bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6",
              })}
            >
              Dashboard
              <ArrowRight className="ml-2 h-4 w-4 duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className={buttonVariants({
                  variant: "outline",
                  className: "rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-6",
                })}
              >
                Register
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  className: "bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6",
                })}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
