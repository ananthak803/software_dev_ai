import {
  ArrowUp,
  Bot,
  FileCode2,
  FolderOpen,
  Paperclip,
  Sparkles,
  Terminal,
  WandSparkles,
} from "lucide-react";
import { useChatStore } from "../../store/chatStore";
import axios from "axios";
import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

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
    title: "Understand my project",
    description: "Analyze the project structure and architecture",
  },
];

function ChatBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute left-[-250px] top-[45%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[130px]" />

      <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function ChatHeader({ children }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/[0.06] px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
            <Sparkles className="h-4 w-4 text-violet-300" />
          </div>

          <div>
            <h1 className="text-sm font-semibold text-zinc-200">Flash</h1>

            <p className="text-[10px] text-zinc-600">New conversation</p>
          </div>
        </div>

        {children}
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        <span className="text-[11px] text-zinc-400">DeepSeek Coder</span>
      </div>
    </header>
  );
}

function ChatWelcome() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-20 text-center">
      <div className="relative mb-7">
        <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-2xl" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-white/[0.05] shadow-2xl shadow-violet-500/10">
          <Bot className="h-7 w-7 text-violet-300" />
        </div>
      </div>

      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
        What are you building?
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
        Describe what you want to build, change, or fix. Flash will understand
        your project, create a plan, and work through the task with you.
      </p>
    </section>
  );
}

function ChatSuggestions() {
  return (
    <section className="mx-auto mt-12 grid max-w-3xl gap-3 px-6 sm:grid-cols-2">
      {suggestedPrompts.map((prompt) => {
        const Icon = prompt.icon;

        return (
          <button
            key={prompt.title}
            type="button"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045]"
          >
            <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />

            <div className="relative flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Icon className="h-4 w-4 text-violet-300" />
              </div>

              <div>
                <h3 className="text-xs font-medium text-zinc-200">
                  {prompt.title}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                  {prompt.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
}

function PromptComposer() {
  const setLoading = useChatStore((state) => state.setLoading);
  const isLoading = useChatStore((state) => state.isLoading);
  const activeId = useChatStore((state) => state.activeId);
  const addMessage = useChatStore((state) => state.addMessage);
  const [value, setValue] = useState("");

  const SendUserPrompt = async () => {
    const prompt = value;
    if (!prompt.trim() || isLoading) return;

    const userMsg = {
      id: null,
      role: "user",
      content: prompt,
      timestamp: new Date().toISOString(),
    };

    addMessage(userMsg);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/chat",
        {
          message: prompt,
        },
      );

      const agentMsg = {
        id: crypto.randomUUID(),
        role: "agent",
        content: res.data.response,
        timestamp: new Date().toISOString(),
      };

      addMessage(agentMsg);
    } catch (error) {
      console.log(error.response?.data);
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <div className="rounded-2xl border border-white/[0.1] bg-[#0d0f14]/90 shadow-2xl shadow-black/30 backdrop-blur-xl transition focus-within:border-violet-400/30 focus-within:shadow-violet-500/5">
        <textarea
          placeholder="Ask Flash to build something..."
          rows={3}
          className="w-full resize-none bg-transparent px-5 pt-4 text-sm leading-6 text-zinc-200 outline-none placeholder:text-zinc-600"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex items-center justify-between px-3 pb-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300"
            >
              <Paperclip className="h-4 w-4" />
            </button>

            <span className="hidden text-[10px] text-zinc-700 sm:block">
              Attach files
            </span>
          </div>

          <button
            onClick={SendUserPrompt}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-lg shadow-white/5 transition hover:bg-zinc-200"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] text-zinc-700">
        Flash can make mistakes. Review generated code before running it.
      </p>
    </div>
  );
}

function ChatBottom() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#08090d] via-[#08090d] to-transparent pb-6 pt-20">
      <PromptComposer />
    </div>
  );
}

function UserMessage({ message }) {
  return (
    <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3">
      <p className="whitespace-pre-wrap text-sm">{message.content}</p>
    </div>
  );
}

function AgentMessage({ message }) {
  return (
    <div className="max-w-[80%] px-4 py-3">
      <p className="whitespace-pre-wrap text-sm text-gray-200">
        {message.content}
      </p>
    </div>
  );
}

function MessageList() {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-6 flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {message.role === "user" ? (
            <UserMessage message={message} />
          ) : (
            <AgentMessage message={message} />
          )}
        </div>
      ))}
    </div>
  );
}



function ConversationDropDown() {
  const [open, setOpen] = useState(false);

  const conversations = useChatStore((state) => state.conversations);

  const activeId = useChatStore((state) => state.activeId);

  const setActiveId = useChatStore((state) => state.setActiveId);

  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeId,
  );

  const handleSelect = (id) => {
    setActiveId(id);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-w-[220px] items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
      >
        <span className="max-w-[180px] truncate">
          {activeConversation?.title || "New Conversation"}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-white/10 bg-[#111217] shadow-2xl">
          <button
            onClick={() => {
              setActiveId(null);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 border-b border-white/10 px-4 py-3 text-left text-sm hover:bg-white/5"
          >
            <Plus size={16} />

            <span>New Conversation</span>
          </button>

          <div className="max-h-80 overflow-y-auto p-2">
            {conversations.length === 0 ? (
              <div className="px-3 py-4 text-center text-sm text-gray-500">
                No conversations
              </div>
            ) : (
              conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => handleSelect(conversation.id)}
                  className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeId === conversation.id
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="truncate">{conversation.title}</div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Chat() {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08090d] text-white">
      <ChatBackground />

      {messages.length > 0 ? (
        <div className="relative flex min-h-screen">
          <div className="flex min-w-0 flex-1 flex-col">
            <ChatHeader>
              <ConversationDropDown />
            </ChatHeader>

            <main className="flex-1 overflow-y-auto pb-40">
              <MessageList />
            </main>

            <ChatBottom />
          </div>
        </div>
      ) : (
        <div className="relative flex min-h-screen flex-col">
          <ChatHeader />

          <main className="flex-1 overflow-y-auto pb-56">
            <ChatWelcome />
            <ChatSuggestions />
          </main>

          <ChatBottom />
        </div>
      )}
    </div>
  );
}
