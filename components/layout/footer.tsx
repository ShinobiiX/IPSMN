"use client"

import Link from "next/link"
import { MapPin, Mail, Phone, Shield, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">IPSMN</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              A premier Training and Consulting Organization dedicated to developing human capital for sustainable Occupational Safety and Health (OSH) across Nigeria and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Programmes", "Membership", "Events", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-background/70 hover:text-accent transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Offices */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">IPSMN CORPORATE OFFICES</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm text-background/70 leading-relaxed">
                    <p className="font-semibold text-white mb-1">Ogun State Office</p>
                    <p>10-12 JK Aladetan Sports Drive,</p>
                    <p>Ife-Oluwa Estate, Mowe,</p>
                    <p>Ogun State, Nigeria.</p>
                  </div>
                </div>
                {/*
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm text-background/70 leading-relaxed">
                    <p className="font-semibold text-white mb-1">Second Office Location</p>
                    <p>Street Address Line 1,</p>
                    <p>Street Address Line 2,</p>
                    <p>City, State, Country.</p>
                  </div>
                </div>
                */}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a 
                    href="mailto:ipsmn2012@gmail.com" 
                    className="text-sm text-background/70 hover:text-white transition-colors"
                  >
                    ipsmn2012@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <div className="flex flex-col text-sm text-background/70">
                    <a href="tel:+234833428840" className="hover:text-white transition-colors">
                      +234 833 428 840
                    </a>
                    <a href="tel:+2348156023583" className="hover:text-white transition-colors">
                      +234 815 602 3583
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-background/10 text-center sm:flex sm:justify-between sm:text-left">
          <p suppressHydrationWarning className="text-xs text-background/50 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Institute of Proficient Safety Measures, Nigeria (IPSMN). All rights reserved.
          </p>
          <p className="text-xs text-background/50 italic">
            The Registered Office of the INSTITUTE is Situate in Federal Republic of Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}