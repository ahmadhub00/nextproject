import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MobileMenu from "./mobile_menu"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <svg viewBox="0 0 100 100" className="h-12 w-12">
                  <circle cx="50" cy="50" r="45" fill="#0d9488" />
                  <path d="M30,50 L70,50 M50,30 L50,70" stroke="white" strokeWidth="8" />
                </svg>
              </div>
              <span className="text-xl font-medium">
                <span className="text-gray-700">OPTIMUM</span> <span className="text-teal-600">TECH</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/focus" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Focus
            </Link>
            <Link href="/industries" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Industries
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/methodology" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Methodology
            </Link>
            <Link href="/work" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Work
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Blogs
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
