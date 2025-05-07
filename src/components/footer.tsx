import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50 py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Bhoomi Sudhar</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Your centralized access point for all property ownership details and legal documentation — built for
              clarity, speed, and trust.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard/records" className="text-emerald-200 hover:text-white transition-colors">
                  Records
                </Link>
              </li>
              <li>
                <Link href="/dashboard/mutation" className="text-emerald-200 hover:text-white transition-colors">
                  Apply for Mutation
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-emerald-200 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <address className="not-italic text-sm text-emerald-200 space-y-2">
              <p>Department of Land Records & Registration</p>
              <p>Government of Nepal</p>
              <p>Kathmandu, Nepal</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:info@bhoomi.gov.np" className="hover:text-white">
                  info@bhoomi.gov.np
                </a>
              </p>
              <p>Phone: +977 01-4567890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-emerald-300">
            © {new Date().getFullYear()} Government of Nepal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-emerald-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-emerald-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-emerald-300 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
