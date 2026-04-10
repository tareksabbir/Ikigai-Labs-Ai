import React from "react";
import Image from "next/image";

export default function UseCases() {
  return (
    <section className="pb-24 bg-black text-white relative z-10   mt-12">
      <div className="max-w-7xl mx-auto px-6 w-[92%] relative">
        {/* Header Section */}
        <div className="mb-12">
          <p
            className="text-white/40 text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-plex-mono, monospace)" }}
          >
            {"// Use cases"}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em]">
            <span className="text-white">One tool.</span>{" "}
            <span className="text-white/40">Every use case.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#0a0a0a] w-fit rounded-xl border border-white/5 p-1.5 shadow-lg">
          <button className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg font-medium shadow-sm">
            Full-stack
          </button>
          <button className="px-4 py-2 text-white/50 hover:text-white transition-colors text-sm rounded-lg font-medium">
            Debug & refactor
          </button>
          <button className="px-4 py-2 text-white/50 hover:text-white transition-colors text-sm rounded-lg font-medium">
            API integration
          </button>
          <button className="px-4 py-2 text-white/50 hover:text-white transition-colors text-sm rounded-lg font-medium">
            Testing & CI/CD
          </button>
        </div>

        {/* Media Container */}
        <div className="relative w-full h-125 md:h-150 rounded-2xl overflow-hidden shadow-2xl group border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500">
          <Image
            src="/hero.avif"
            alt="Use cases showcase"
            fill
            className="absolute inset-0 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
          />
          
          {/* Overlay to darken background slightly if needed */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Code Editor */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-162.5 bg-[#0c0c0c]/95 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-2xl">
            <div className="font-mono text-[13px] md:text-sm leading-[1.8] text-white/80 overflow-x-auto whitespace-pre">
              <div>
                <span className="text-orange-400">import</span> {"{ NextApiRequest, NextApiResponse }"} <span className="text-orange-400">from</span> <span className="text-emerald-400">&apos;next&apos;</span>
              </div>
              <div>
                <span className="text-orange-400">import</span> {"{ supabase }"} <span className="text-orange-400">from</span> <span className="text-emerald-400">&apos;@/lib/supabase&apos;</span>
              </div>
              <br />
              <div>
                <span className="text-orange-400">export default async function</span> <span className="text-blue-400">handler</span>{"("}
              </div>
              <div>{"  "}req: NextApiRequest,</div>
              <div>{"  "}res: NextApiResponse</div>
              <div>{") {"}</div>
              <div>
                {"  "}<span className="text-orange-400">if</span> (req.<span className="text-yellow-400">method</span> === <span className="text-emerald-400">&apos;GET&apos;</span>) {"{"}
              </div>
              <div>
                {"    "}<span className="text-white/40">{"// AI suggestion: Add pagination and filtering"}</span>
              </div>
              <div>
                {"    "}<span className="text-orange-400">const</span> {"{ data, error }"} = <span className="text-orange-400">await</span> supabase
              </div>
              <div>
                {"      "}.<span className="text-yellow-400">from</span>(<span className="text-emerald-400">&apos;products&apos;</span>)
              </div>
              <div>
                {"      "}.<span className="text-yellow-400">select</span>(<span className="text-emerald-400">&apos;*&apos;</span>)
              </div>
              <div>
                {"      "}.<span className="text-yellow-400">order</span>(<span className="text-emerald-400">&apos;created_at&apos;</span>, {"{ ascending:"} <span className="text-purple-400">false</span> {"})"}
              </div>
              <br />
              <div>
                {"    "}<span className="text-orange-400">if</span> (error) <span className="text-orange-400">return</span> res.<span className="text-yellow-400">status</span>(<span className="text-purple-400">500</span>).<span className="text-yellow-400">json</span>({"{"} error {"}"})
              </div>
              <div>
                {"    "}<span className="text-orange-400">return</span> res.<span className="text-yellow-400">status</span>(<span className="text-purple-400">200</span>).<span className="text-yellow-400">json</span>(data)
              </div>
              <div>{"  }"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 md:mt-16">
          <div className="max-w-3xl">
            <p className="text-white/40 text-[13px] md:text-sm font-medium mb-4">
              Full-stack development
            </p>
            <p className="text-xl md:text-[22px] text-white/90 font-medium leading-[1.4] tracking-tight">
              Build frontend and backend seamlessly. Exact understands your entire stack—from React
              components to database queries—and helps you ship faster with context-aware suggestions.
            </p>
          </div>
          <button className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors shrink-0">
            Start building
          </button>
        </div>
      </div>
    </section>
  );
}
