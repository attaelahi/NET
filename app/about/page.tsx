import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Heart, Users, Globe, Award, Target } from "lucide-react"
import SiteHeader from "@/components/site-header"

import Images from '../images/logo (2).png';

const teamMembers = [
  {
    id: 1,
    name: "Ahmad Rahimi",
    role: "Executive Director",
    bio: "Ahmad has over 15 years of experience in nonprofit management and youth development. He founded Nawjawanan e Tholiyandeh with a vision to empower youth through education and leadership.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fatima Nazari",
    role: "Program Director",
    bio: "Fatima oversees all of our programs and ensures they align with our mission and goals. She has a background in education and community development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mohammad Karimi",
    role: "Community Outreach Manager",
    bio: "Mohammad builds and maintains relationships with community partners, volunteers, and donors. He is passionate about creating meaningful connections.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Zahra Ahmadi",
    role: "Education Coordinator",
    bio: "Zahra manages our educational support programs, including scholarships, tutoring, and educational workshops. She has a background in teaching.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Ali Hassan",
    role: "Leadership Development Specialist",
    bio: "Ali designs and facilitates our leadership development programs. He has extensive experience in youth leadership and community organizing.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Maryam Rasooli",
    role: "Finance Manager",
    bio: "Maryam oversees our financial operations and ensures we use our resources effectively to maximize our impact on youth and communities.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop",
  },
]

const partners = [
  {
    id: 1,
    name: "Community Foundation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2669&auto=format&fit=crop",
    type: "Funding Partner",
  },
  {
    id: 2,
    name: "Local University",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2671&auto=format&fit=crop",
    type: "Educational Partner",
  },
  {
    id: 3,
    name: "Youth Center",
    logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
    type: "Community Partner",
  },
  {
    id: 4,
    name: "Tech Innovation Hub",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    type: "Skills Training Partner",
  },
  {
    id: 5,
    name: "Health Clinic",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    type: "Health & Wellness Partner",
  },
  {
    id: 6,
    name: "Arts Council",
    logo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2680&auto=format&fit=crop",
    type: "Arts & Culture Partner",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?q=80&w=2670&auto=format&fit=crop"
            alt="About Nawjawanan e Tholiyandeh"
            fill
            className="object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">About Us</h1>
            <p className="max-w-2xl mb-8 text-lg text-white md:text-xl">
              Learn about our mission, vision, and the dedicated team behind Nawjawanan e Tholiyandeh.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#1E3A8A]/10">
                  <Heart className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-center text-[#1E3A8A]">Our Mission</h2>
                <p className="text-center text-gray-600">
                  To empower youth through education, leadership development, and community service, enabling them to
                  reach their full potential and become positive agents of change in their communities.
                </p>
              </div>

              <div className="p-8 bg-[#F9FAFB] rounded-xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#1E3A8A]/10">
                  <Target className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-center text-[#1E3A8A]">Our Vision</h2>
                <p className="text-center text-gray-600">
                  A world where all youth have access to the resources, opportunities, and support they need to thrive
                  and contribute meaningfully to their communities and society as a whole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Our Story</h2>
              <p className="max-w-2xl text-gray-600">How we started and where we're going</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">Our Beginnings</h3>
                  <p className="text-gray-600">
                    Nawjawanan e Tholiyandeh was founded in 2010 by a group of dedicated community leaders who
                    recognized the need for youth-focused programs in underserved communities. What began as a small
                    initiative with just 20 participants has grown into a comprehensive organization serving thousands
                    of youth each year.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">Growth and Impact</h3>
                  <p className="text-gray-600">
                    Over the years, we've expanded our programs to address the diverse needs of youth in our
                    communities. From educational support to leadership development, community service to skills
                    training, our holistic approach has made a significant impact on the lives of young people.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#1E3A8A]">Looking Forward</h3>
                  <p className="text-gray-600">
                    As we look to the future, we remain committed to our mission of empowering youth. We continue to
                    innovate and adapt our programs to meet the evolving needs of young people in a rapidly changing
                    world, while staying true to our core values of education, leadership, and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Our Values</h2>
              <p className="max-w-2xl text-gray-600">The principles that guide our work and define our organization</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Award className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in all our programs and services, continuously improving to better serve
                    youth and communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Heart className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Compassion</h3>
                  <p className="text-gray-600">
                    We approach our work with empathy and understanding, recognizing the unique challenges and potential
                    of each young person.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Users className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Inclusion</h3>
                  <p className="text-gray-600">
                    We value diversity and create inclusive environments where all youth feel welcome, respected, and
                    empowered.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Globe className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of community and work collaboratively with partners to create positive
                    change.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
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
                      className="w-6 h-6 text-[#1E3A8A]"
                    >
                      <path d="M2 12h5"></path>
                      <path d="M17 12h5"></path>
                      <path d="M12 2v5"></path>
                      <path d="M12 17v5"></path>
                      <path d="M4.93 4.93l3.54 3.54"></path>
                      <path d="M15.54 15.54l3.54 3.54"></path>
                      <path d="M4.93 19.07l3.54-3.54"></path>
                      <path d="M15.54 8.46l3.54-3.54"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace creativity and innovation, finding new ways to address challenges and create
                    opportunities for youth.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
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
                      className="w-6 h-6 text-[#1E3A8A]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Accountability</h3>
                  <p className="text-gray-600">
                    We are transparent and accountable in our operations, using resources effectively to maximize our
                    impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Our Team</h2>
              <p className="max-w-2xl text-gray-600">Meet the dedicated professionals who make our work possible</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-[#1E3A8A]">{member.name}</h3>
                    <p className="mb-4 text-sm font-medium text-[#F97316]">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Our Partners</h2>
              <p className="max-w-2xl text-gray-600">
                We collaborate with organizations that share our commitment to youth empowerment
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner.id} className="flex flex-col items-center p-6 text-center bg-[#F9FAFB] rounded-xl">
                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full">
                    <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1E3A8A]">{partner.name}</h3>
                  <p className="text-sm text-gray-500">{partner.type}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-600">
                Interested in partnering with us? We're always looking for organizations that share our vision.
              </p>
              <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Become a Partner</Button>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Annual Reports</h2>
              <p className="max-w-2xl text-gray-600">
                Transparency is important to us. View our annual reports to see how we use our resources and the impact
                we're making.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-[#1E3A8A]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Calendar className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl font-bold">2023</h3>
                    <p>Annual Report</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 bg-[#1E3A8A]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Calendar className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl font-bold">2022</h3>
                    <p>Annual Report</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 bg-[#1E3A8A]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Calendar className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl font-bold">2021</h3>
                    <p>Annual Report</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
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

