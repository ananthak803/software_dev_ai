import { useState } from "react";
import { ArrowLeft, FolderPlus } from "lucide-react";
import ChatHeader from "./chat/ChatHeader";
import LoadingScreen from "./general/LoadingScreen";
import { useChatStore } from "../store/chatStore";
import {  useNavigate } from "react-router-dom";

export default function NewProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const setLoading = useChatStore((state) => state.setLoading);
  const isLoading = useChatStore((state) => state.isLoading);
  const setActiveId=useChatStore((state)=>state.setActiveId);
  const addProject=useChatStore((state)=>state.addProject);
  const navigate=useNavigate();
  const handleCreate = async () => {
    if (!projectName.trim() || isLoading) return;
    const desc=description.trim();

    setLoading(true);

    try {
      // Your API call will go here
      await new Promise((resolve) => setTimeout(resolve, 5000));
    const res={
      title:projectName,
      id:crypto.randomUUID(),
      description:desc,
      timestamp:Date.now(),
    }
    // setActiveId(res);
    addProject(res);
    } catch (error) {
      console.error("Failed to create project:", error);
    } finally {
      // Hide loading screen
      setLoading(false);
      navigate("/chat");
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100">
      <ChatHeader>
        <div />
      </ChatHeader>

       {isLoading && (
        <LoadingScreen />
      )}
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-5">

          {/* Header */}
          <div className="mb-8">
            <button
              onClick={()=>navigate("/")}
              type="button"
              className="mb-5 flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/5">
                <FolderPlus className="h-5 w-5 text-yellow-300" />
              </div>

              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create a new project
                </h1>

                <p className="mt-1 text-sm text-zinc-500">
                  Start building something new with Flash.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-7">

            {/* Project name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Project name
              </label>

              <input
                disabled={isLoading}
                type="text"
                placeholder="My awesome project"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0d0f14] px-4 py-3 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-600 focus:border-yellow-300/40 focus:ring-1 focus:ring-yellow-300/10 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Description
                <span className="ml-2 text-xs font-normal text-zinc-600">
                  Optional
                </span>
              </label>

              <textarea
                disabled={isLoading}
                rows={4}
                placeholder="What are you building?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0f14] px-4 py-3 text-sm leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-600 focus:border-yellow-300/40 focus:ring-1 focus:ring-yellow-300/10 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Create */}
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={handleCreate}
                disabled={!projectName.trim() || isLoading}
                className="flex items-center gap-2 rounded-xl bg-yellow-300 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FolderPlus className="h-4 w-4" />
                Create project
              </button>
            </div>

          </div>
        </div>
      
    </div>
  );
}