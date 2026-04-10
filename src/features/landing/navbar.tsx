"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/custom/logo";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

const NAV_LINKS = [
  { label: "Product", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Dashboard", href: "/dashboard", authOnly: true },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useAuth();
  const isSignedIn = !!userId;

  const visibleLinks = NAV_LINKS.filter(link => !link.authOnly || isSignedIn);

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
            {visibleLinks.map((link) => (
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
            {!isSignedIn ? (
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 cursor-pointer">
                  <SignInButton mode="modal" />
                </div>
                <button className="bg-white text-[#080808] text-sm font-medium px-4 py-2 rounded-xl hover:opacity-85 hover:-translate-y-px transition-all duration-200">
                  Get Started
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  href="/dashboard/"
                  className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <UserButton />
              </div>
            )}
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
              {visibleLinks.map((link) => (
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
              {!isSignedIn ? (
                <>
                  <Link
                    href="#"
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </Link>
                  <button className="bg-white text-[#080808] text-sm font-medium px-4 py-2 rounded-xl hover:opacity-85 transition-all duration-200 w-full items-center justify-center flex">
                    Get Started
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                  <span className="text-sm font-medium text-white/40">Profile</span>
                  <UserButton />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
