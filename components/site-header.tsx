"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import LanguageSelector from "@/components/language-selector"

import imagess from '../app/images/logo (2).png';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-2">
          <Image
 src={imagess}
            alt="Nawjawanan e Tholiyandeh Logo"
            width={70}
            height={70}
            className="object-cover rounded-md"
          />
           <a href="/">
  <span className="hidden text-lg font-bold text-[#1E3A8A] md:inline-block">Nawjawanan e Tholiyandeh</span>
</a>
          <span className="text-lg font-bold text-[#1E3A8A] md:hidden">NET</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium ${
                isActive(link.href) ? "text-[#1E3A8A] hover:text-[#F97316]" : "text-gray-600 hover:text-[#1E3A8A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">Donate</Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col pt-16 bg-white md:hidden">
          <nav className="container flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 text-lg font-medium border-b border-gray-100 ${
                  isActive(link.href) ? "text-[#1E3A8A]" : "text-gray-600"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white" onClick={closeMenu}>
                Donate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

