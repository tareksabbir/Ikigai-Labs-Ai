"use client";

import { Settings, Search, HelpCircle } from "lucide-react";


interface AISidebarProps {
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
}

export default function AISidebar({
  children,
  className = "",
  placeholder = "Ask Exact...",
}: AISidebarProps) {
  return (
    <div className={`bg-[#080808] w-full sm:w-64 md:w-72 flex flex-col justify-between border-t sm:border-t-0 border-white/[0.06] p-3 sm:p-3.5 ${className}`}>
      <div className="flex flex-col gap-3 sm:gap-4 overflow-y-auto">
        {children}
      </div>

      <div className="mt-3 sm:mt-4 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 flex flex-col gap-2">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none outline-none text-white/70 placeholder:text-white/25 w-full px-1 text-[11px] sm:text-[11.5px]"
        />
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2 sm:gap-2.5 text-white/25">
            <button className="hover:text-white/55 transition-colors">
              <Settings size={11} />
            </button>
            <button className="hover:text-white/55 transition-colors">
              <Search size={11} />
            </button>
            <button className="hover:text-white/55 transition-colors">
              <HelpCircle size={11} />
            </button>
          </div>
          <button className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
