import React from "react";
import { Sparkles } from "lucide-react";

// --- Use Cases Data ---
export const USE_CASE_CODE = (
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
);

// --- Core Features Data ---

// Card 1
export const CARD1_EDITOR = (
  <>
    <div>
      <span className="text-white/30">const</span> {"[email, setEmail] = useState("}
      <span className="text-emerald-300/80">&apos;&apos;</span>)
    </div>

    <div>
      <span className="text-white/30">const</span> {"[password, setPassword] = useState("}
      <span className="text-emerald-300/80">&apos;&apos;</span>)
    </div>

    <br />
    <div className="text-white/25">{"// Action: Add password validation"}</div>
    <div>
      <span className="text-white/30">const handleSignUp =</span>{" "}
      <span className="text-rose-400/80">async</span> () ={">"} {"{"}
    </div>
    <div>
      {"  "}<span className="text-rose-400/60">if</span> (password.length {"<"}{" "}
      <span className="text-orange-300/80">8</span>) {"{"}
    </div>
    <div>
      {"    "}<span className="text-rose-400/60">throw new</span>{" "}
      <span className="text-yellow-200/80">Error</span>(
      <span className="text-emerald-300/70">&apos;Password must be 8+ chars&apos;</span>)
    </div>
    <div>{"  }"}</div>
    <br />
    <div>
      {"  "}<span className="text-white/30">const</span> {"{ data, error }"} ={" "}
      <span className="text-rose-400/60">await</span> supabase.auth.signUp({"{"}
    </div>
    <div>{"    "}email, password</div>
    <div>{"  })"}</div>
  </>
);

export const CARD1_TERMINAL = (
  <>
    <div className="flex justify-between gap-4">
      <span className="truncate">→ Building module...</span>
      <span className="text-emerald-400/80 shrink-0">✓ Done</span>
    </div>
    <div className="flex justify-between gap-4">
      <span className="truncate">→ Resolving dependencies...</span>
      <span className="text-emerald-400/80 shrink-0">✓ Done</span>
    </div>
    <div className="flex justify-between gap-4">
      <span className="truncate">→ Type checking...</span>
      <span className="text-yellow-400/80 shrink-0">⚠ 2 warnings</span>
    </div>
  </>
);

export const CARD1_AI_CHAT = (
  <>
    <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-3 py-2 text-[10px] sm:text-[11px] text-white/55 border border-white/[0.06] max-w-[80%]">
      password validation
    </div>

    <div className="flex flex-col gap-2 text-[10px] sm:text-[11px] leading-[1.65] bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05]">
      <div className="flex items-center gap-1.5 text-white/90 font-medium">
        <Sparkles size={11} className="text-white" />
        <span>Exact</span>
        <span className="ml-auto text-white/20 text-[9px]">4:38 PM</span>
      </div>
      <div className="text-white/45 leading-relaxed">
        I&apos;ll create a secure auth system with email validation, password strength check (8+ chars), and Supabase integration.
      </div>
      <div className="mt-1 space-y-0.5">
        <div className="text-white/25 text-[9.5px] mb-1">Generated</div>
        <div className="flex items-center gap-1.5 text-white/55">
          <span className="text-emerald-400/70">+</span> UserAuth.tsx{" "}
          <span className="text-white/20 text-[9px]">new</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/55">
          <span className="text-amber-400/70">~</span> lib/supabase.ts{" "}
          <span className="text-white/20 text-[9px]">modified</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg px-2.5 sm:px-3 py-1.5 text-white/80 text-[10px] sm:text-[10.5px] flex items-center gap-1 transition-colors">
          ✓ Apply
        </button>
        <button className="hover:bg-white/5 rounded-lg px-2.5 sm:px-3 py-1.5 text-white/30 text-[10px] sm:text-[10.5px] transition-colors">
          ✕ Reject
        </button>
      </div>
    </div>

    <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-3 py-2 text-[10px] sm:text-[11px] text-white/55 border border-white/[0.06] max-w-[80%]">
      Optimize the database queries
    </div>

    <div className="flex flex-col gap-1.5 text-[10px] sm:text-[11px] bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05]">
      <div className="flex items-center gap-1.5 text-white/90 font-medium">
        <Sparkles size={11} className="text-white animate-pulse" />
        <span>Exact</span>
        <span className="ml-auto text-white/20 text-[9px]">4:39 PM</span>
      </div>
      <div className="flex items-center gap-2 text-white/35 mt-1">
        <div className="flex gap-0.5">
          <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1 h-1 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
        <span>Analyzing...</span>
      </div>
    </div>
  </>
);

// Card 2
export const CARD2_EDITOR_LINES = [
  { n: 1, code: (<><span className="text-rose-400/70">import</span> {"{ useState }"} <span className="text-rose-400/70">from</span> <span className="text-emerald-300/70">&apos;react&apos;</span></>) },
  { n: 2, code: (<><span className="text-rose-400/70">import</span> {"{ supabase }"} <span className="text-rose-400/70">from</span> <span className="text-emerald-300/70">&apos;@/lib/supabase&apos;</span></>) },
  { n: 3, code: null },
  { n: 4, code: (<><span className="text-rose-400/70">export function</span> <span className="text-yellow-200/80">UserAuth</span>() {"{"}</>) },
  { n: 5, code: (<>{"  "}<span className="text-white/30">const</span> {"[email, setEmail] = useState("}<span className="text-emerald-300/70">&apos;&apos;</span>)</>) },
  { n: 6, code: (<>{"  "}<span className="text-white/30">const</span> {"[password, setPassword] = useState("}<span className="text-emerald-300/70">&apos;&apos;</span>)</>) },

  { n: 7, code: null },
  { n: 8, code: (<span className="text-white/25">{"  // AI suggestion: Add password validation"}</span>) },
  { n: 9, code: (<>{"  "}<span className="text-white/30">const</span> handleSignUp = <span className="text-rose-400/70">async</span> () ={">"} {"{"}</>) },
];

export const CARD2_GHOST_LINES = [
  { n: 10, code: (<span className="text-white/20">{"  // ▋ Ghost text suggestion:"}</span>) },
  { n: 11, code: (<span className="text-white/30">{"    "}<span className="text-rose-400/40">if</span> (password.length {"<"} <span className="text-orange-300/40">8</span>) {"{"}</span>) },
  { n: "", code: (<span className="text-white/30">{"      "}<span className="text-rose-400/40">throw new</span> <span className="text-yellow-200/40">Error</span>(<span className="text-emerald-300/30">&apos;Password must be 8+ chars&apos;</span>)</span>) },
  { n: "", code: (<span className="text-white/30">{"    }"}</span>) },
  { n: "", code: (<span className="text-white/30">{"    "}<span className="text-white/20">const</span> {"{ data, error }"} = <span className="text-rose-400/40">await</span> supabase.auth.signUp({"{"}</span>) },
  { n: "", code: (<span className="text-white/30">{"      "}email, password</span>) },
  { n: "", code: (<span className="text-white/30">{"    })"}</span>) },
  { n: "", code: (<span className="text-white/30">{"  }"}</span>) },
];

// Card 3
export const CARD3_EDITOR = (
  <>
    <div>{"const [email, setEmail] = useState('')"}</div>
    <div>{"const [password, setPassword] = useState('')"}</div>

    <br />
    <div className="text-white/15">{"// AI suggestion: Add password validation"}</div>
    <div>{"const handleSignUp = async () => {"}</div>
    <div>{"  if (password.length < 8) {"}</div>
    <div className="text-white/20">{"    throw new Error('Password must be 8+ chars')"}</div>
    <div>{"  }"}</div>
  </>
);

export const CARD3_TERMINAL = (
  <>
    <div className="bg-sky-500/[0.06] border border-sky-500/[0.12] rounded-lg px-2.5 sm:px-3 py-2 mb-3 flex items-start gap-2">
      <Sparkles size={10} className="text-sky-400/70 mt-0.5 shrink-0" />
      <div>
        <div className="text-sky-300/70 text-[10px] font-medium mb-0.5">Exact suggestion</div>
        <div className="text-white/35 text-[10px] sm:text-[10.5px]">
          Run{" "}
          <span className="text-white/60 bg-white/[0.06] px-1 rounded font-mono text-[9px] sm:text-[10px]">npm run type-check</span>
          {" "}to catch type errors before build
        </div>
      </div>
    </div>

    <div className="space-y-1.5 text-white/35">
      <div className="flex justify-between gap-3">
        <span className="truncate"><span className="text-white/20">$</span> Analyzing codebase...</span>
        <span className="text-emerald-400/70 shrink-0">✓ Done</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="truncate"><span className="text-white/20">$</span> Installing dependencies...</span>
        <span className="text-emerald-400/70 shrink-0">✓ Done</span>
      </div>
      <div className="flex justify-between gap-3">
        <span className="truncate"><span className="text-white/20">$</span> Running tests (14/16)...</span>
        <span className="text-yellow-400/70 shrink-0">⚠ 2 failed</span>
      </div>
      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/[0.04]">
        <span className="text-white/20">$</span>
        <span className="text-white/50">▋</span>
      </div>
    </div>
  </>
);

export const CARD3_AI_CHAT = (
  <>
    <div className="self-end bg-white/[0.06] rounded-xl rounded-br-sm px-2.5 py-1.5 text-[10px] sm:text-[10.5px] text-white/50 mb-3 sm:mb-4 max-w-[85%] text-right">
      fix the failing tests
    </div>

    <div className="bg-white/[0.03] rounded-xl rounded-tl-sm p-3 border border-white/[0.05] text-[10px] sm:text-[10.5px] space-y-2 sm:space-y-2.5">
      <div className="flex items-center gap-1.5 text-white/80 font-medium">
        <Sparkles size={11} className="text-white" />
        <span>Exact</span>
      </div>
      <div className="text-white/40 leading-relaxed">
        Found 2 issues in{" "}
        <span className="text-white/60 font-mono text-[9px] sm:text-[10px] bg-white/[0.06] px-1 rounded">auth.test.ts</span>:
      </div>
      <div className="space-y-1.5">
        <div className="flex items-start gap-1.5 text-white/35">
          <span className="text-red-400/70 shrink-0 mt-px">✕</span>
          <span>Missing mock for supabase client</span>
        </div>
        <div className="flex items-start gap-1.5 text-white/35">
          <span className="text-red-400/70 shrink-0 mt-px">✕</span>
          <span>Async handler not awaited</span>
        </div>
      </div>
      <div className="flex gap-2 pt-1">
        <button className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg px-2 sm:px-2.5 py-1.5 text-white/75 text-[10px] flex items-center gap-1 transition-colors">
          ✓ Fix both
        </button>
        <button className="hover:bg-white/5 rounded-lg px-2 sm:px-2.5 py-1.5 text-white/30 text-[10px] transition-colors">
          Explain
        </button>
      </div>
    </div>
  </>
);
