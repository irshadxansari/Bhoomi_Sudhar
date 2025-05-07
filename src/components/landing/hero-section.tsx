import Link from "next/link"
import { Search, FileText } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-amber-200 blur-3xl"></div>
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-6">
                Government of Nepal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                National Property <span className="text-emerald-600">Information</span> Gateway
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Your centralized access point for all property ownership details and legal documentation — built for
              clarity, speed, and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard/records"
                className={buttonVariants({
                  className:
                    "bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-6 text-base flex items-center gap-2 shadow-lg shadow-emerald-200/50",
                })}
              >
                <Search className="h-5 w-5" />
                Search Property Details
              </Link>
              <Link
                href="/dashboard/mutation"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-6 py-6 text-base flex items-center gap-2",
                })}
              >
                <FileText className="h-5 w-5" />
                Apply for Title Change
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 rounded-3xl transform rotate-3"></div>
            <img
              src="/hero1.png"
              alt="Property Management System"
              className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
