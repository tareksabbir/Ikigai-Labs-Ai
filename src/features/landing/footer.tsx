"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/custom/logo";
import { Github, Twitter, ArrowUpRight } from "lucide-react";

// High-fidelity Discord SVG for a premium look
const DiscordIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "/changelog" },
      { label: "Documentation", href: "/documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Community", href: "/community" },
      { label: "Help Center", href: "/help-center" },
      { label: "Status", href: "/status" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: DiscordIcon, href: "#", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Ambient backgrounds */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-6 w-[92%] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-16 lg:gap-24">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-8">
            <Link href="/" className="scale-100 origin-left transition-opacity hover:opacity-80">
              <Logo />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              The AI-powered code interface for the next generation of engineers. 
              Built with precision, designed for productivity.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {FOOTER_LINKS.map((group) => (group && (
              <div key={group.title} className="flex flex-col gap-6">
                <h4 className="text-white text-[13px] font-semibold tracking-wider uppercase opacity-90">
                  {group.title}
                </h4>
                <nav className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200 flex items-center group/link w-fit font-light"
                    >
                      {link.label}
                      <ArrowUpRight 
                        size={12} 
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-1 transition-all duration-200" 
                      />
                    </Link>
                  ))}
                </nav>
              </div>
            )))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px]">
          <p className="text-white/20 font-light">
            © {new Date().getFullYear()} ikigai-labs Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/terms" className="text-white/20 hover:text-white/40 transition-colors font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/20 hover:text-white/40 transition-colors font-light">
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors pl-8 border-l border-white/5 font-light"
            >
              Back to top
              <span className="group-hover:-translate-y-0.5 transition-transform duration-200">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
