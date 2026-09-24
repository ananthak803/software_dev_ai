import { useState } from "react";
import { useChatStore } from "../../store/chatStore";
import { ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectListDropDown() {
  const [open, setOpen] = useState(false);

  const projects = useChatStore((state) => state.projects);
  const activeId = useChatStore((state) => state.activeId);
  const setActiveId = useChatStore((state) => state.setActiveId);
  console.log(projects)

  // const activeConversation = projects.find(
  //   (project) => project.id === activeId
  // );

  // If there is no active project, show New Conversation
  const displayTitle = activeId?.title;

  // const handleSelect = (id) => {
  //   setActiveId(id);
  //   setOpen(false);
  // };

  // const handleNewConversation = () => {
  //   setActiveId(null);
  //   setOpen(false);
  // };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-w-[220px] items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
      >
        <span className="max-w-[180px] truncate">{displayTitle}</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-white/10 bg-[#111217] shadow-2xl">
          <Link
            to="/new"
            className="flex w-full items-center gap-2 border-b border-white/10 px-4 py-3 "
          >
            <Plus size={16} />
            <span>Create new project</span>
          </Link>

          {/* Conversations */}
          <div className="max-h-80 overflow-y-auto p-2">
            {projects.length === 0 ? (
              <div className="px-3 py-4 text-center text-sm text-gray-500">
                No Projects yet
              </div>
            ) : (
              projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => {
                    setActiveId(project);
                    setOpen(false);
                  }}
                  className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeId?.id === project.id
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="truncate">
                    {project.title || "Untitled Project"}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
