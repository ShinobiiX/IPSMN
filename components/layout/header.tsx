"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Membership", href: "/membership" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-xl' : 'bg-primary shadow-lg'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:scale-110">
            <Shield className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-primary-foreground">
              IPSM
            </span>
            <span className="text-xs text-primary-foreground/80">
              Nigeria
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 transition-all duration-300 hover:bg-primary-foreground/10 hover:text-primary-foreground group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-accent transition-all duration-300 -translate-x-1/2 group-hover:w-4/5" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button 
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-primary-foreground transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-6">
            <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} aria-hidden="true" />
            <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} aria-hidden="true" />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-primary border-t border-primary-foreground/10">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                style={{ 
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div 
              className="pt-4"
              style={{ 
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
                transition: 'all 0.3s ease'
              }}
            >
              <Button 
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
