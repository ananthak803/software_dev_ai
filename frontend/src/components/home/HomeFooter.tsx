export default function HomeFooter() {
    return (
        <footer className="border-t border-white/[0.06] py-6">
            <div className="flex flex-col items-center justify-between gap-3 text-[11px] text-zinc-600 sm:flex-row">
                <span>Flash IDE</span>

                <div className="flex items-center gap-4">
                    {/* Status */}
                    <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        Local environment
                    </span>

                    <span>v0.1.0</span>
                </div>
            </div>
        </footer>
    );
}