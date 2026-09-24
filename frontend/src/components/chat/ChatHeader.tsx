import {  Zap } from 'lucide-react';
export default function ChatHeader({ children }) {
  return (
    <header className="flex h-12 items-center justify-between border-b border-white/[0.06] px-3 py-3">
      <div className="flex items-center">
        <div className="flex items-center ">
          <div className="flex h-9 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] gap-2">
                    <Zap className="h-4 w-4 text-yellow-300" />
            <h1 className="text-sm font-semibold text-zinc-200">Flash</h1>

                </div>
        </div>

        {children}
      </div>

      {/* <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        <span className="text-[11px] text-zinc-400">Qwen Coder</span>
      </div> */}
    </header>
  );
}