import { Plus,FolderGit2,GitBranch,Clock3,MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function RecentProjects({sectionRef}) {
    
const recentProjects = [
    {
        name: "flash-website",
        path: "~/Projects/flash-website",
        language: "TypeScript",
        lastOpened: "2 hours ago",
        branch: "main",
    },
    {
        name: "ai-dashboard",
        path: "~/Projects/ai-dashboard",
        language: "React",
        lastOpened: "Yesterday",
        branch: "develop",
    },
    {
        name: "api-server",
        path: "~/Projects/api-server",
        language: "Python",
        lastOpened: "3 days ago",
        branch: "main",
    },
];
const navigate=useNavigate();
    return (
        <section className="mt-24 pb-16" ref={sectionRef}>
            {/* Heading */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Workspace
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                        Recent projects
                    </h3>
                </div>

                {/* New project button */}
                <button
                    onClick={()=>navigate("/new")}
                    type="button"
                    className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/[0.07] hover:text-white sm:flex"
                >
                    <Plus className="h-3.5 w-3.5" />

                    New project
                </button>
            </div>

            {/* Project list */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                {recentProjects.map((project, index) => (
                    <div
                        key={project.name}
                        className={`group flex w-full items-center gap-4 px-5 py-4 transition hover:bg-white/[0.045] ${index !== recentProjects.length - 1
                                ? "border-b border-white/[0.06]"
                                : ""
                            }`}
                    >
                        {/* Project icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <FolderGit2 className="h-5 w-5 text-zinc-400 transition group-hover:text-violet-300" />
                        </div>

                        {/* Project info */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <h4 className="truncate text-sm font-medium text-zinc-200 group-hover:text-white">
                                    {project.name}
                                </h4>

                                {/* Language */}
                                <span className="hidden rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-zinc-500 sm:block">
                                    {project.language}
                                </span>
                            </div>

                            <p className="mt-1 truncate text-xs text-zinc-600">
                                {project.path}
                            </p>
                        </div>

                        {/* Branch */}
                        <div className="hidden items-center gap-1.5 text-xs text-zinc-600 md:flex">
                            <GitBranch className="h-3.5 w-3.5" />

                            {project.branch}
                        </div>

                        {/* Last opened */}
                        <div className="hidden items-center gap-1.5 text-xs text-zinc-600 lg:flex">
                            <Clock3 className="h-3.5 w-3.5" />

                            {project.lastOpened}
                        </div>

                        {/* More */}
                        <MoreHorizontal className="h-4 w-4 shrink-0 text-zinc-700 transition group-hover:text-zinc-400" />
                    </div>
                ))}
            </div>
        </section>
    );
}
