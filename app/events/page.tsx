import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

import Images from '../images/logo (2).png';

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Leadership Workshop",
    date: "June 15, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Community Center, 123 Main St",
    description:
      "A hands-on workshop designed to develop leadership skills in youth ages 14-18. Participants will engage in team-building activities, public speaking exercises, and project planning.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2574&auto=format&fit=crop",
    capacity: 30,
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Community Service Day",
    date: "July 8, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "City Park, Downtown",
    description:
      "Join us for a day of giving back to our community. Activities include park clean-up, tree planting, and beautification projects. All ages welcome, but youth under 12 must be accompanied by an adult.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2574&auto=format&fit=crop",
    capacity: 100,
    registrationOpen: true,
  },
  {
    id: 3,
    title: "Educational Scholarship Fundraiser",
    date: "July 22, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Hotel Ballroom, 456 Center Ave",
    description:
      "An evening of dinner, entertainment, and inspiration to raise funds for our educational scholarship program. Hear from past scholarship recipients and learn how your support makes a difference.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop",
    capacity: 200,
    registrationOpen: true,
  },
  {
    id: 4,
    title: "Youth Tech Bootcamp",
    date: "August 5-7, 2025",
    time: "9:00 AM - 3:00 PM daily",
    location: "Tech Innovation Hub, 789 Future St",
    description:
      "A three-day intensive bootcamp introducing youth to coding, digital design, and technology entrepreneurship. No prior experience necessary. For ages 13-18.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop",
    capacity: 25,
    registrationOpen: true,
  },
  {
    id: 5,
    title: "Back to School Supply Drive",
    date: "August 20, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Community Center, 123 Main St",
    description:
      "Help us ensure that all students have the supplies they need to succeed this school year. Drop off donations or volunteer to help distribute supplies to families in need.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
    capacity: 50,
    registrationOpen: true,
  },
  {
    id: 6,
    title: "Youth Arts Festival",
    date: "September 12, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Cultural Arts Center, 321 Creative Way",
    description:
      "A celebration of youth creativity featuring art exhibitions, performances, workshops, and more. Come support young artists and enjoy a day of cultural enrichment.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2680&auto=format&fit=crop",
    capacity: 300,
    registrationOpen: false,
  },
]

const pastEvents = [
  {
    id: 101,
    title: "Youth Leadership Conference",
    date: "March 15, 2025",
    location: "Convention Center",
    description: "A day of inspiring speakers, workshops, and networking for young leaders.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop",
    participants: 150,
  },
  {
    id: 102,
    title: "Community Clean-up Day",
    date: "April 22, 2025",
    location: "Riverside Park",
    description: "Youth volunteers came together to clean up our local park and waterways.",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2574&auto=format&fit=crop",
    participants: 75,
  },
  {
    id: 103,
    title: "Career Exploration Fair",
    date: "May 10, 2025",
    location: "High School Gymnasium",
    description: "Students explored various career paths through interactive booths and presentations.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop",
    participants: 200,
  },
]

export default function EventsPage() {
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
            <Link href="/events" className="font-medium text-[#1E3A8A] hover:text-[#F97316]">
              Events
            </Link>
            <Link href="/contact" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
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
        <section className="relative h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
            alt="Events and Activities"
            fill
            className="object-cover"
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 mx-auto text-center md:px-6">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Events & Activities</h1>
            <p className="max-w-2xl mb-8 text-lg text-white md:text-xl">
              Join us for upcoming events and activities that empower youth and strengthen our community.
            </p>
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">Register for an Event</Button>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Featured Event</h2>
              <p className="max-w-2xl text-gray-600">Don't miss our upcoming Youth Leadership Workshop</p>
            </div>

            <div className="overflow-hidden bg-[#F9FAFB] rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=2574&auto=format&fit=crop"
                    alt="Youth Leadership Workshop"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white rounded-full bg-[#F97316]">
                    Featured Event
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#1E3A8A]">Youth Leadership Workshop</h3>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-[#1E3A8A]" />
                      <span>June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-[#1E3A8A]" />
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#1E3A8A]" />
                      <span>Community Center, 123 Main St</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-[#1E3A8A]" />
                      <span>30 spots available</span>
                    </div>
                  </div>

                  <p className="mb-6 text-gray-600">
                    A hands-on workshop designed to develop leadership skills in youth ages 14-18. Participants will
                    engage in team-building activities, public speaking exercises, and project planning.
                  </p>

                  <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-8 h-auto">
                <TabsTrigger
                  value="upcoming"
                  className="flex-1 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="flex-1 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        {!event.registrationOpen && (
                          <div className="absolute top-0 right-0 px-3 py-1 m-4 text-xs font-semibold text-white bg-gray-800 rounded-full">
                            Coming Soon
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">{event.title}</h3>

                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#F97316]" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-[#F97316]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-[#F97316]" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <p className="mb-6 text-sm text-gray-600 line-clamp-3">{event.description}</p>

                        <Button
                          className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
                          disabled={!event.registrationOpen}
                        >
                          {event.registrationOpen ? "Register" : "Registration Opening Soon"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 px-3 py-1 m-4 text-xs font-semibold text-white bg-gray-800 rounded-full">
                          Past Event
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">{event.title}</h3>

                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#F97316]" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-[#F97316]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4 text-[#F97316]" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>

                        <p className="mb-6 text-sm text-gray-600">{event.description}</p>

                        <Button variant="outline" className="w-full">
                          View Event Recap
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Calendar */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Event Calendar</h2>
              <p className="max-w-2xl text-gray-600">
                Plan ahead with our event calendar. Filter by program type or age group to find events that interest
                you.
              </p>
            </div>

            <div className="p-6 bg-[#F9FAFB] rounded-xl">
              <div className="flex flex-col items-center justify-center h-64">
                <Calendar className="w-16 h-16 mb-4 text-[#1E3A8A]" />
                <p className="text-gray-600">Our interactive calendar is coming soon. Check back for updates!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Host an Event */}
        <section className="py-16 bg-[#1E3A8A] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Host an Event With Us</h2>
                <p className="mb-6">
                  Are you interested in hosting a youth-focused event in partnership with Nawjawanan e Tholiyandeh?
                  We're always looking for opportunities to collaborate with organizations that share our mission.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">Submit a Proposal</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-xl md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
                  alt="Host an event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event FAQ */}
        <section className="py-16 bg-[#F9FAFB]">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1E3A8A] md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-2xl text-gray-600">Find answers to common questions about our events</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">How do I register for an event?</h3>
                  <p className="text-gray-600">
                    You can register for events directly through our website by clicking the "Register" button on the
                    event page. You'll receive a confirmation email with details after registration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Are there age restrictions for events?</h3>
                  <p className="text-gray-600">
                    Age requirements vary by event. Each event listing includes information about the target age group.
                    Some events are open to all ages, while others are designed for specific age ranges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">
                    What if I need to cancel my registration?
                  </h3>
                  <p className="text-gray-600">
                    If you need to cancel, please do so at least 48 hours before the event so we can offer your spot to
                    someone else. You can cancel through your account or by contacting us directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#1E3A8A]">Are there costs associated with events?</h3>
                  <p className="text-gray-600">
                    Many of our events are free, while others have a nominal fee to cover materials or other costs.
                    Scholarship options are available for events with fees - please contact us to learn more.
                  </p>
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

