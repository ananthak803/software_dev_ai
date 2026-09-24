import {
  FileCode2,
  FolderOpen,
  Terminal,
  WandSparkles,
} from "lucide-react";
export default function ChatSuggestions() {
    const suggestedPrompts = [
  {
    icon: WandSparkles,
    title: "Build a feature",
    description: "Create a complete feature from a description",
  },
  {
    icon: FileCode2,
    title: "Explain my code",
    description: "Understand how a file or function works",
  },
  {
    icon: Terminal,
    title: "Fix an error",
    description: "Debug an error and find the root cause",
  },
  {
    icon: FolderOpen,
    title: "Project Summary",
    description: "Analyze the project structure and architecture",
  },
];
  return (
    <section className="mx-auto mt-8 grid max-w-4xl gap-4 px-6 sm:grid-cols-4">
      {suggestedPrompts.map((prompt) => {
        const Icon = prompt.icon;

        return (
          <button
            key={prompt.title}
            type="button"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045] align-center"
          >
            {/* <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" /> */}

            <div className="relative flex gap-3 align-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Icon className="h-4 w-4 text-yellow-300" />
              </div>

              
                <h3 className="text-sm font-medium text-zinc-200 p-1">
                  {prompt.title}
                </h3>

                {/* <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                  {prompt.description}
                </p> */}
              
            </div>
          </button>
        );
      })}
    </section>
  );
}