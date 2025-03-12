import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Calendar } from "lucide-react"

import Images from '../images/logo (2).png';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nawjawanan e Tholiyandeh Logo"
              width={40}
              height={40}
              className="object-cover rounded-md"
            />
            <span className="hidden text-lg font-bold text-[#1E3A8A] md:inline-block">Nawjawanan e Tholiyandeh</span>
            <span className="text-lg font-bold text-[#1E3A8A] md:hidden">NET</span>
          </div>

          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href="/" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
              Home
            </Link>
            <Link href="/programs" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
              Programs
            </Link>
            <Link href="/about" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
              About Us
            </Link>
            <Link href="/events" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
              Events
            </Link>
            <Link href="/contact" className="font-medium text-[#1E3A8A] hover:text-[#F97316]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">Donate</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Open menu</span>
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="max-w-2xl text-lg text-white md:text-xl">
              We'd love to hear from you. Reach out with questions, feedback, or to get involved.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Mail className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Email</h3>
                  <p className="text-gray-600">info@nawjawanan.org</p>
                  <p className="text-gray-600">support@nawjawanan.org</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Phone className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Phone</h3>
                  <p className="text-gray-600">+123 456 7890</p>
                  <p className="text-gray-600">+123 456 7891</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <MapPin className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Address</h3>
                  <p className="text-gray-600">123 Community Ave</p>
                  <p className="text-gray-600">City, Country</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Clock className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Hours</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#1E3A8A]">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email address" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} required />
                  </div>

                  <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Send Message</Button>
                </form>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#1E3A8A]">Our Location</h2>
                <div className="overflow-hidden rounded-xl">
                  <div className="relative h-[400px] bg-gray-200">
                    {/* This would be replaced with an actual map component in a real implementation */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <MapPin className="w-12 h-12 mb-4 text-[#1E3A8A]" />
                      <p className="text-gray-600">Map loading...</p>
                      <p className="mt-2 text-sm text-gray-500">123 Community Ave, City, Country</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">Getting Here</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">By Public Transport:</span> Bus routes 10, 15, and 22 stop directly
                      in front of our building.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">By Car:</span> Parking is available in the adjacent lot. First 2
                      hours are free for visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">How Can We Help?</h2>
              <p className="max-w-2xl text-gray-600">Choose the option that best fits your needs</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <MessageSquare className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">General Inquiries</h3>
                  <p className="mb-4 text-gray-600">
                    Have a question about our organization or programs? We're here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Users className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Volunteer Opportunities</h3>
                  <p className="mb-4 text-gray-600">
                    Interested in volunteering with us? Learn about current opportunities.
                  </p>
                  <Button variant="outline" className="w-full">
                    Volunteer With Us
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
                    <Calendar className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">Schedule a Visit</h3>
                  <p className="mb-4 text-gray-600">
                    Want to visit our center or meet with our team? Schedule a visit.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-2xl text-gray-600">Find quick answers to common questions</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">What are your office hours?</h3>
                  <p className="text-gray-600">
                    Our office is open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends and
                    major holidays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">
                    How can I donate to support your programs?
                  </h3>
                  <p className="text-gray-600">
                    You can donate online through our website, by mail, or by phone. We accept various payment methods,
                    including credit cards, bank transfers, and checks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">How can I get involved as a volunteer?</h3>
                  <p className="text-gray-600">
                    We have various volunteer opportunities available. You can fill out our volunteer application form
                    online or contact our volunteer coordinator directly at volunteer@nawjawanan.org.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Do you offer internships for students?</h3>
                  <p className="text-gray-600">
                    Yes, we offer internships for high school and college students throughout the year. Please contact
                    our education coordinator at education@nawjawanan.org for more information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-[#10B981] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Connected</h2>
              <p className="mb-8">
                Subscribe to our newsletter to receive updates on our programs, events, and success stories.
              </p>
              <form className="flex flex-col w-full max-w-md mx-auto space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button type="submit" className="bg-white text-[#10B981] hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

