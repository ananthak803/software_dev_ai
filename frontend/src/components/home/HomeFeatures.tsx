import {
    Bot,
    Code2,
    GitBranch,
    Terminal,
} from "lucide-react";
export default function HomeFeatures() {
    const features = [
    {
        icon: Bot,
        title: "AI Coding Agent",
        description:
            "Plan, write, debug and refactor your code with an autonomous AI agent.",
    },
    {
        icon: Code2,
        title: "Powerful Editor",
        description:
            "A VS Code-like editor powered by Monaco with tabs, syntax highlighting and more.",
    },
    {
        icon: Terminal,
        title: "Built-in Terminal",
        description:
            "Run commands, install dependencies and execute your project without leaving the IDE.",
    },
    {
        icon: GitBranch,
        title: "Git Ready",
        description:
            "Work with branches, diffs and commits directly inside your development environment.",
    },
];
    return (
        <section className="mt-28">
            {/* Section heading */}
            <div className="mb-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                    Everything you need
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    Your development workspace
                </h3>
            </div>

            {/* Feature cards */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.045]"
                        >
                            {/* Glow */}
                            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

                            <div className="relative">
                                {/* Icon */}
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                                    <Icon className="h-5 w-5 text-violet-300" />
                                </div>

                                {/* Title */}
                                <h4 className="text-sm font-semibold text-white">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="mt-2 text-xs leading-6 text-zinc-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}