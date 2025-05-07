import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "Digitized land records for instant access",
    "Secure blockchain-based verification",
    "Transparent ownership tracking",
    "Simplified mutation process",
    "Real-time application status updates",
    "Reduced paperwork and bureaucracy",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-50 blur-xl"></div>
            <img
              src="/hero2.png"
              alt="Property Management System"
              className="rounded-2xl shadow-xl relative z-10 w-full"
            />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-emerald-600 font-medium">About the System</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">What is the Property Access System?</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The Property Access System is a state-driven effort to modernize land record systems through full digital
              integration. It minimizes paperwork, enhances traceability, and provides real-time access to verified
              property data for citizens and legal professionals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
