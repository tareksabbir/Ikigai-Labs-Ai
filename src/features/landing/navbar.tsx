"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/custom/logo";
import { SignInButton } from "@clerk/nextjs";

const NAV_LINKS = [
  { label: "Product", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center bg-black/60 backdrop-blur-xl border-b border-white/8"
    >
      <div className="w-[92%] max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <Link href="/" className="scale-90 origin-left">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            
            <Link
              href="#"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
            >
             <SignInButton/>
            </Link>
            <button className="bg-white text-[#080808] text-sm font-medium px-4 py-2 rounded-lg hover:opacity-85 hover:-translate-y-px transition-all duration-200">
              Get Started
            </button>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full overflow-hidden md:hidden bg-black/40 border-t border-white/5"
          >
            <div className="w-[92%] max-w-7xl mx-auto flex flex-col gap-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-1" />
              <Link
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <button className="bg-white text-[#080808] text-sm font-medium px-4 py-2 rounded-lg hover:opacity-85 transition-all duration-200 w-full items-center justify-center flex">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
