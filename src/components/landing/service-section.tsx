import Link from "next/link"
import { Download, FilePlus2, FileText, SearchCheck, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

const services = [
  {
    title: "View Record of Rights (RoR)",
    description: "Access your property documents and verify ownership details instantly.",
    icon: FileText,
    href: "/search",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Apply for Mutation Online",
    description: "Submit property transfer applications digitally with ease.",
    icon: FilePlus2,
    href: "/mutation-form",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Check Application Status",
    description: "Track your submitted applications in real-time.",
    icon: SearchCheck,
    href: "/search",
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Download Land Certificates",
    description: "Get verified digital copies of your land ownership documents.",
    icon: Download,
    href: "/search",
    color: "bg-emerald-50 text-emerald-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Citizen-Focused Digital Tools</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Empowering communities through digital services that make land management seamless and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
                <div className="flex flex-col h-full">
                  <div className={cn("w-14 h-14 flex items-center justify-center rounded-xl mb-6", service.color)}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700"
                  >
                    Launch Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
