"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const successStories = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Program Graduate",
    quote:
      "The leadership program changed my life. I gained confidence and skills that helped me start my own community initiative that now serves over 200 youth in my neighborhood.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
    location: "Kabul",
    program: "Leadership Development",
  },
  {
    id: 2,
    name: "Mohammad Karimi",
    role: "Scholarship Recipient",
    quote:
      "Thanks to the educational support, I was able to complete my degree in engineering and now I'm giving back by mentoring other youth in my community and helping them pursue higher education.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    location: "Herat",
    program: "Educational Support",
  },
  {
    id: 3,
    name: "Fatima Ahmadi",
    role: "Youth Volunteer",
    quote:
      "Volunteering with Nawjawanan e Tholiyandeh taught me the importance of community service and how small actions can make a big difference. I've now logged over 500 hours of community service.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    location: "Mazar-i-Sharif",
    program: "Community Service",
  },
  {
    id: 4,
    name: "Ali Hassan",
    role: "Community Leader",
    quote:
      "The skills I learned through the leadership program helped me organize community events that brought people together for positive change. We've now established a regular community clean-up initiative.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
    location: "Kandahar",
    program: "Leadership Development",
  },
]

export default function SuccessStoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? successStories.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative py-8" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#F97316]/5 rounded-xl -z-10"></div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1E3A8A] md:text-4xl mb-4">Success Stories</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Real stories from youth whose lives have been transformed through our programs.
        </p>
      </div>

      <div className="overflow-hidden px-4 md:px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {successStories.map((story) => (
            <div key={story.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 relative">
                  <div className="relative h-80 w-full md:h-96 overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <span className="inline-block px-3 py-1 bg-[#F97316] text-white text-xs font-semibold rounded-full mb-2">
                        {story.program}
                      </span>
                      <h4 className="text-xl font-bold text-white">{story.name}</h4>
                      <p className="text-white/80 flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {story.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <Quote className="w-12 h-12 text-[#F97316] opacity-20 mb-4" />
                      <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{story.quote}"</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                      <div>
                        <p className="font-semibold text-[#1E3A8A]">{story.name}</p>
                        <p className="text-sm text-gray-500">{story.role}</p>
                      </div>

                      <Button
                        variant="outline"
                        className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-sm border-gray-200 hover:bg-[#1E3A8A] hover:text-white"
          onClick={goToPrev}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex gap-2">
          {successStories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#F97316] w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-sm border-gray-200 hover:bg-[#1E3A8A] hover:text-white"
          onClick={goToNext}
        >
          <ChevronRight className="w-5 h-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

