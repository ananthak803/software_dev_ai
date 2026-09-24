import { Zap } from "lucide-react";
export default function HomeHeader() {
    return (
        <header className="mb-8 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-lg shadow-violet-500/10">
                    <Zap className="h-4 w-4 text-yellow-300" />
                </div>

                <div>
                    <h1 className="text-sm font-semibold tracking-tight">
                        Flash
                    </h1>

                    <p className="text-[11px] text-zinc-500">
                        AI Development IDE
                    </p>
                </div>
            </div>

            {/* Settings */}
            <button
                type="button"
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-400 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
                Settings
            </button>
        </header>
    );
}