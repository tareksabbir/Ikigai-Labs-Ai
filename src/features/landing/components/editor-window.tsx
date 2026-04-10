"use client";




interface EditorWindowProps {
  fileName: string;
  dotColor?: string;
  otherFile?: string;
  children: React.ReactNode;
  className?: string;
}

export default function EditorWindow({
  fileName,
  dotColor = "bg-emerald-400/70",
  otherFile,
  children,
  className = "",
}: EditorWindowProps) {
  return (
    <div className={`bg-[#080808] flex-1 border-b sm:border-b-0 sm:border-r border-white/[0.06] flex flex-col rounded-tl-xl overflow-hidden shadow-xl min-w-0 ${className}`}>
      {/* Editor tab bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-2 sm:px-3 py-2 bg-[#0a0a0a] overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-1.5 mr-2 shrink-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="px-2 sm:px-2.5 py-1 bg-white/5 text-white/70 border border-white/10 rounded text-[10px] font-mono flex items-center gap-1.5 shrink-0">
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
          {fileName}
        </div>
        {otherFile && (
          <div className="px-2 sm:px-2.5 py-1 text-white/30 text-[10px] font-mono hidden sm:block">
            {otherFile}
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 md:p-5 text-[10px] sm:text-[11px] md:text-[12px] leading-[1.85] flex-1 font-mono text-white/70 overflow-x-auto whitespace-pre">
        {children}
      </div>
    </div>
  );
}
