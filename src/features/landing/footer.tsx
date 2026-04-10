"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/custom/logo";
import { ArrowUpRight } from "lucide-react";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/navigation";



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
