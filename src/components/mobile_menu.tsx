"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-4">
            <Link href="/about" className="text-xl font-medium text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/focus" className="text-xl font-medium text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
              Focus
            </Link>
            <Link
              href="/industries"
              className="text-xl font-medium text-gray-700 hover:text-teal-600"
              onClick={toggleMenu}
            >
              Industries
            </Link>
            <Link
              href="/services"
              className="text-xl font-medium text-gray-700 hover:text-teal-600"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/methodology"
              className="text-xl font-medium text-gray-700 hover:text-teal-600"
              onClick={toggleMenu}
            >
              Methodology
            </Link>
            <Link href="/work" className="text-xl font-medium text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
              Work
            </Link>
            <Link href="/blogs" className="text-xl font-medium text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors mt-4"
              onClick={toggleMenu}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
