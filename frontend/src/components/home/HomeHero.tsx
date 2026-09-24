import {
    ArrowRight,
    FolderGit2,
    Plus,
    Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function HomeHero({ScrollTo}) {
    const navigate=useNavigate();
    return (
        <section className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/10  px-3 py-1.5 text-xs text-yellow-300">
                <Zap className="h-3.5 w-3.5" />

                AI-powered development environment
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Build software with

                <span className="block bg-gradient-to-r from-yellow-300  to-yellow-200 bg-clip-text text-transparent">
                    an AI that actually codes.
                </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                A local-first development environment where your AI agent can
                understand your project, write code, run commands, debug errors,
                and help you ship faster.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {/* New Project */}
                <button
                    onClick={()=>navigate("/new")}
                    type="button"
                    className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-zinc-100"
                >
                    <Plus className="h-4 w-4" />

                    Create new project

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Recent Project */}
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    onClick={ScrollTo}
                >
                    <FolderGit2 className="h-4 w-4" />

                    Open recent project
                </button>
            </div>
        </section>
    );
}
