import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Globe, Calendar, Award } from "lucide-react"
import SiteHeader from "@/components/site-header"

import Images from '../images/logo (2).png';

const programs = [
  {
    id: 1,
    title: "Educational Support",
    icon: "BookOpen",
    description: "Providing resources, mentorship, and scholarships to help youth achieve academic success.",
    longDescription:
      "Our Educational Support program aims to break down barriers to education by providing scholarships, tutoring, mentorship, and educational resources to underserved youth. We believe that education is the foundation for personal growth and community development.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
    stats: {
      students: 1200,
      scholarships: 150,
      tutors: 75,
    },
    activities: [
      "One-on-one tutoring",
      "Scholarship programs",
      "Educational workshops",
      "School supply distribution",
      "Digital literacy training",
    ],
  },
  {
    id: 2,
    title: "Leadership Development",
    icon: "Users",
    description: "Building the next generation of community leaders through workshops and hands-on experience.",
    longDescription:
      "Our Leadership Development program empowers youth to become effective leaders in their communities. Through workshops, mentorship, and practical experience, participants develop essential leadership skills, confidence, and a commitment to positive social change.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2574&auto=format&fit=crop",
    stats: {
      participants: 850,
      workshops: 48,
      communityProjects: 35,
    },
    activities: [
      "Leadership workshops",
      "Public speaking training",
      "Community project planning",
      "Conflict resolution training",
      "Youth-led initiatives",
    ],
  },
  {
    id: 3,
    title: "Community Service",
    icon: "Heart",
    description: "Engaging youth in meaningful volunteer opportunities that address local needs.",
    longDescription:
      "Our Community Service program connects youth with volunteer opportunities that make a real difference in their communities. Participants gain valuable skills and experience while developing empathy, social responsibility, and a deeper connection to their communities.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2574&auto=format&fit=crop",
    stats: {
      volunteers: 1500,
      serviceHours: 10000,
      communityPartners: 45,
    },
    activities: [
      "Community clean-ups",
      "Food distribution drives",
      "Elder care visits",
      "Environmental conservation",
      "Public health campaigns",
    ],
  },
  {
    id: 4,
    title: "Skills Training",
    icon: "Lightbulb",
    description: "Equipping youth with practical skills for employment and entrepreneurship.",
    longDescription:
      "Our Skills Training program provides youth with practical, marketable skills that enhance their employability and entrepreneurial potential. From technical skills to financial literacy, we prepare participants for success in today's competitive job market.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    stats: {
      trainees: 950,
      courses: 25,
      jobPlacements: 320,
    },
    activities: [
      "Technical skills workshops",
      "Entrepreneurship training",
      "Financial literacy courses",
      "Job readiness preparation",
      "Internship placements",
    ],
  },
  {
    id: 5,
    title: "Health & Wellness",
    icon: "Heart",
    description: "Promoting physical and mental health through education and activities.",
    longDescription:
      "Our Health & Wellness program promotes holistic well-being among youth through education, activities, and support services. We address physical health, mental health, and social well-being to help youth lead balanced, healthy lives.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop",
    stats: {
      participants: 1100,
      workshops: 65,
      healthCampaigns: 18,
    },
    activities: [
      "Mental health awareness",
      "Sports and fitness activities",
      "Nutrition education",
      "Substance abuse prevention",
      "Peer support groups",
    ],
  },
  {
    id: 6,
    title: "Arts & Culture",
    icon: "Globe",
    description: "Celebrating diversity and creativity through artistic expression.",
    longDescription:
      "Our Arts & Culture program celebrates diversity and fosters creativity through various forms of artistic expression. Participants develop creative skills, cultural awareness, and self-confidence while preserving and sharing their cultural heritage.",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2670&auto=format&fit=crop",
    stats: {
      participants: 750,
      exhibitions: 24,
      performances: 36,
    },
    activities: [
      "Visual arts workshops",
      "Music and dance programs",
      "Cultural exchange events",
      "Theater and performance",
      "Traditional crafts preservation",
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
            alt="Youth programs"
            fill
            className="object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Programs</h1>
            <p className="max-w-2xl mb-8 text-lg text-white md:text-xl">
              Discover how we're empowering youth and building stronger communities through our diverse range of
              programs.
            </p>
          </div>
        </section>

        {/* Programs Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container px-4 mx-auto md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full max-w-3xl mx-auto mb-6 h-auto flex flex-wrap justify-center gap-2 bg-transparent">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white">
                  All Programs
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="leadership"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white"
                >
                  Leadership
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white"
                >
                  Community Service
                </TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white">
                  Skills Training
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {programs.map((program) => (
                    <div key={program.id} className="overflow-hidden bg-white rounded-lg shadow-sm">
                      <div className="relative h-48">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="mb-4 text-gray-600">{program.description}</p>
                        <Link href={`/programs/${program.id}`}>
                          <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Learn More</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would filter the programs accordingly */}
              <TabsContent value="education" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {programs
                    .filter((p) => p.id === 1)
                    .map((program) => (
                      <div key={program.id} className="overflow-hidden bg-white rounded-lg shadow-sm">
                        <div className="relative h-48">
                          <Image
                            src={program.image || "/placeholder.svg"}
                            alt={program.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-xl font-bold text-white">{program.title}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="mb-4 text-gray-600">{program.description}</p>
                          <Link href={`/programs/${program.id}`}>
                            <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Learn More</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              {/* Similar content for other tabs */}
            </Tabs>
          </div>
        </section>

        {/* Featured Program */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Featured Program</h2>
              <p className="max-w-2xl text-gray-600">
                Our Leadership Development program has shown exceptional results in empowering youth to become community
                leaders.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2574&auto=format&fit=crop"
                  alt="Leadership Development"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">Leadership Development</h3>
                <p className="mb-6 text-gray-600">
                  Our Leadership Development program empowers youth to become effective leaders in their communities.
                  Through workshops, mentorship, and practical experience, participants develop essential leadership
                  skills, confidence, and a commitment to positive social change.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-[#F97316]">850+</p>
                    <p className="text-sm text-gray-500">Participants</p>
                  </div>
                  <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-[#F97316]">48</p>
                    <p className="text-sm text-gray-500">Workshops</p>
                  </div>
                  <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-[#F97316]">35</p>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                </div>

                <Link href="/programs/2">
                  <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                    Learn More About This Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Program Impact */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Program Impact</h2>
              <p className="max-w-2xl text-gray-600">
                Our programs have made a significant difference in the lives of youth and communities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E3A8A]/10">
                  <Users className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">5,000+</h3>
                <p className="text-gray-600">Youth Empowered</p>
              </div>

              <div className="p-6 text-center bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E3A8A]/10">
                  <Award className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">150+</h3>
                <p className="text-gray-600">Scholarships Awarded</p>
              </div>

              <div className="p-6 text-center bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E3A8A]/10">
                  <Calendar className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">120+</h3>
                <p className="text-gray-600">Programs Completed</p>
              </div>

              <div className="p-6 text-center bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E3A8A]/10">
                  <Globe className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">25</h3>
                <p className="text-gray-600">Communities Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-[#3b556b] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get Involved</h2>
              <p className="mb-8">
                There are many ways to support our programs and make a difference in the lives of youth.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  Volunteer
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#1E3A8A] text-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={Images}
                  alt="Nawjawanan e Tholiyandeh Logo"
                  width={40}
                  height={40}
                  className="object-cover rounded-md"
                />
                <span className="text-lg font-bold">Nawjawanan e Tholiyandeh</span>
              </div>
              <p className="text-sm text-white/80">
                Empowering youth for a better tomorrow through education, leadership, and community service.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-sm text-white/80 hover:text-white">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-sm text-white/80 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-sm text-white/80 hover:text-white">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <address className="not-italic">
                <p className="mb-2 text-sm text-white/80">123 Community Ave</p>
                <p className="mb-2 text-sm text-white/80">City, Country</p>
                <p className="mb-2 text-sm text-white/80">info@nawjawanan.org</p>
                <p className="text-sm text-white/80">+123 456 7890</p>
              </address>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/20">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/80">
                © {new Date().getFullYear()} Nawjawanan e Tholiyandeh. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-sm text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

