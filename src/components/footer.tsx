import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Optimum Tech</h3>
            <p className="text-gray-600 mb-4">
              A premier provider of world-class Software & IT Solutions with a global presence and distinguished
              clientele.
            </p>
            <Link href="/contact" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-gray-600 hover:text-teal-600 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-600 hover:text-teal-600 transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-600 mr-2 mt-0.5" />
                <span className="text-gray-600">123 Tech Street, Innovation City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-gray-600">info@optimumtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Optimum Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-teal-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-teal-600 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
