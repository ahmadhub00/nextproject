import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-8">
            <span className="block">Bringing</span>
            <span className="block">Imagination Into</span>
            <span className="block">Reality</span>
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-lg">
            Welcome to Best Software House & IT Solutions Company Optimum Tech, a premier provider of world-class
            Software & IT Solutions. Our global presence is marked by a distinguished clientele, renowned for their
            expertise and achievements. At the core of our success is a team of highly skilled professionals, whose
            technical prowess and unwavering commitment to excellence set us apart. We specialize in transforming your
            business visions, startups, or innovative ideas into tangible successes. Partner with us to elevate your
            aspirations to new heights and experience unparalleled growth and achievement.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full lg:w-1/2 grid grid-rows-2 gap-4 p-4">
          {/* Top image - office with word cloud */}
          <div className="w-full h-full overflow-hidden rounded-lg relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 z-10"></div>
            <div className="absolute top-4 left-4 bg-teal-500/20 rounded-full w-8 h-8"></div>
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 flex flex-wrap justify-end content-center">
              <div className="text-2xl font-bold text-gray-800">POSITIVE</div>
              <div className="text-xl font-bold text-gray-700 ml-4">THINKING</div>
              <div className="text-lg font-medium text-gray-600 mr-2">MINDSET</div>
              <div className="text-base font-medium text-gray-500">OPTIMISM</div>
            </div>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400">Office workspace image</div>
            </div>
          </div>

          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400">Team working image</div>
            </div>
            <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400">Team collaborating image</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
