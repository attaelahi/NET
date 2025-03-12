import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
import LanguageSelector from "@/components/language-selector"
import imagess from './images/logo (2).png';

interface InnerPageTemplateProps {
  title: string
  subtitle?: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
  heroImage?: string
  children: React.ReactNode
}

export default function InnerPageTemplate({
  title,
  subtitle,
  breadcrumbs,
  heroImage = "/placeholder.svg?height=400&width=1920",
  children,
}: InnerPageTemplateProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Nawjawanan e Tholiyandeh Logo"
              width={40}
              height={40}
              className="object-contain"
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
            <Link href="/contact" className="font-medium text-gray-600 hover:text-[#1E3A8A]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
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
        {/* Page Header */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="container relative z-20 flex flex-col items-start justify-center h-full px-4 mx-auto md:px-6">
            <Breadcrumb className="mb-4">
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={crumb.href} className="text-white/80 hover:text-white">
                    {crumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</h1>
            {subtitle && <p className="max-w-2xl text-lg text-white/90">{subtitle}</p>}
          </div>
        </section>

        {/* Page Content */}
        <div className="container px-4 py-12 mx-auto md:px-6">{children}</div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#1E3A8A] text-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Nawjawanan e Tholiyandeh Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-lg font-bold">Nawjawanan e Tholiyandehhh</span>
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

