import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Heart, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CounterAnimation from "@/components/counter-animation"
import ProgramCard from "@/components/program-card"
import SuccessStoryCarousel from "@/components/success-story-carousel"
import NewsletterSignup from "@/components/newsletter-signup"
import SiteHeader from "@/components/site-header"
import Images from './images/logo (2).png';
import Imagess from'./images/back.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={Imagess}
            alt="Youth volunteers working together"
            fill
            className="object-cover"
            priority
          />
          <div className="container relative z-20 flex flex-col items-start justify-center h-full px-4 mx-auto md:px-6">
            <h1 className="max-w-3xl mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Empowering Youth for a Better Tomorrow
            </h1>
            <p className="max-w-2xl mb-8 text-lg text-white md:text-xl">
              Building communities through education, leadership, and service. Join us in creating lasting change.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white">
                Join Our Mission
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Our Programs</h2>
              <p className="max-w-2xl text-gray-600">
                Discover how we're making a difference through our diverse range of youth-focused initiatives.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProgramCard
                icon="BookOpen"
                title="Educational Support"
                description="Providing resources, mentorship, and scholarships to help youth achieve academic success."
                imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
              />
              <ProgramCard
                icon="Users"
                title="Leadership Development"
                description="Building the next generation of community leaders through workshops and hands-on experience."
                imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2574&auto=format&fit=crop"
              />
              <ProgramCard
                icon="Heart"
                title="Community Service"
                description="Engaging youth in meaningful volunteer opportunities that address local needs."
                imageUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2574&auto=format&fit=crop"
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white">
                View All Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-[#1E3A8A] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Impact</h2>
              <p className="max-w-2xl">
                Real numbers that showcase our commitment to youth empowerment and community development.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-6 text-center bg-white/10 rounded-xl">
                <Users className="w-12 h-12 mb-4 text-[#F97316]" />
                <CounterAnimation end={5000} duration={2} className="text-4xl font-bold" />
                <p className="mt-2 text-sm">Youth Empowered</p>
              </div>

              <div className="flex flex-col items-center p-6 text-center bg-white/10 rounded-xl">
                <Calendar className="w-12 h-12 mb-4 text-[#F97316]" />
                <CounterAnimation end={120} duration={2} className="text-4xl font-bold" />
                <p className="mt-2 text-sm">Programs Completed</p>
              </div>

              <div className="flex flex-col items-center p-6 text-center bg-white/10 rounded-xl">
                <Globe className="w-12 h-12 mb-4 text-[#F97316]" />
                <CounterAnimation end={25} duration={2} className="text-4xl font-bold" />
                <p className="mt-2 text-sm">Communities Served</p>
              </div>

              <div className="flex flex-col items-center p-6 text-center bg-white/10 rounded-xl">
                <Heart className="w-12 h-12 mb-4 text-[#F97316]" />
                <CounterAnimation end={10000} duration={2} className="text-4xl font-bold" />
                <p className="mt-2 text-sm">Volunteer Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <SuccessStoryCarousel />
          </div>
        </section>

        {/* Donation & Events Section */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Donation Panel */}
              <div className="p-8 bg-white rounded-xl shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">Support Our Mission</h3>
                <p className="mb-6 text-gray-600">
                  Your contribution helps us continue empowering youth and building stronger communities.
                </p>

                <Tabs defaultValue="one-time" className="w-full">
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="one-time" className="flex-1">
                      One-time
                    </TabsTrigger>
                    <TabsTrigger value="monthly" className="flex-1">
                      Monthly
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="one-time" className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="w-full">
                        $25
                      </Button>
                      <Button variant="outline" className="w-full">
                        $50
                      </Button>
                      <Button variant="outline" className="w-full">
                        $100
                      </Button>
                    </div>
                    <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white">Donate Now</Button>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="w-full">
                        $10/mo
                      </Button>
                      <Button variant="outline" className="w-full">
                        $25/mo
                      </Button>
                      <Button variant="outline" className="w-full">
                        $50/mo
                      </Button>
                    </div>
                    <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white">Become a Supporter</Button>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Upcoming Events */}
              <div className="p-8 bg-white rounded-xl shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">Upcoming Events</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center justify-center min-w-[60px] bg-[#1E3A8A] text-white rounded p-2">
                          <span className="text-sm font-medium">JUN</span>
                          <span className="text-2xl font-bold">15</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Youth Leadership Workshop</h4>
                          <p className="text-sm text-gray-500">9:00 AM - 1:00 PM • Community Center</p>
                          <Button variant="link" className="p-0 mt-1 h-auto text-[#F97316]">
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center justify-center min-w-[60px] bg-[#1E3A8A] text-white rounded p-2">
                          <span className="text-sm font-medium">JUL</span>
                          <span className="text-2xl font-bold">08</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Community Service Day</h4>
                          <p className="text-sm text-gray-500">10:00 AM - 4:00 PM • City Park</p>
                          <Button variant="link" className="p-0 mt-1 h-auto text-[#F97316]">
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#10B981] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Connected</h2>
              <p className="mb-8">
                Join our newsletter to receive updates on our programs, events, and success stories.
              </p>
              <NewsletterSignup />
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
                  width={100}
                  height={100}
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

