import { useState } from "react";
import axios from "axios";
import { useChatStore } from "../../store/chatStore";
import { Paperclip, SendHorizonal } from "lucide-react";
import { TailSpin,ThreeDots } from 'react-loader-spinner'

export default function PromptBox() {
  const setLoading = useChatStore((state) => state.setLoading);
  const isLoading = useChatStore((state) => state.isLoading);
  const activeId = useChatStore((state) => state.activeId);
  const addMessage = useChatStore((state) => state.addMessage);
  const [val, setVal] = useState("");
  const handleEnterKey = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    console.log("sent:");
  }
};

  const sendUserPrompt = async () => {
    const prompt = val;
    if (!prompt.trim() || isLoading) return;

    const userMsg = {
      id: null,
      role: "user",
      content: prompt,
      timestamp: new Date().toISOString(),
    };

    addMessage(userMsg);

    setLoading(true);

    // try {
    //   const res = await axios.post("http://127.0.0.1:8000/api/chat", {
    //     message: prompt,
    //   });

    //   const agentMsg = {
    //     id: crypto.randomUUID(),
    //     role: "agent",
    //     content: res.data.response,
    //     timestamp: new Date().toISOString(),
    //   };

    //   addMessage(agentMsg);
    // } catch (error) {
    //   console.log(error.response?.data);
    //   console.error("Chat error:", error);
    // } finally {
    //   setLoading(false);
    // }
    await new Promise((resolve)=>setTimeout(resolve,5000));
    setLoading(false)
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-6 ">
      <div className="mx-auto flex w-full max-w-3xl items-center rounded-4xl border border-yellow-300/10 bg-[#0d0f14]/90 px-4 py-2 shadow-[0_0_25px_5px_rgba(253,224,71,0.25)] transition focus-within:border-yellow-300">
        {/* Attach */}
        {
          isLoading?(
            <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-4xl text-zinc-900" 
        >
          <Paperclip className="h-4 w-4" />
        </button>
          ):(
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-4xl text-zinc-500 hover:bg-white/[0.06] hover:text-zinc-300"
        >
          <Paperclip className="h-4 w-4" />
        </button>)}

        {/* Text */}
        <textarea
          placeholder="Ask Flash to build something..."
          rows={1}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={handleEnterKey}
          className="flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-5 text-zinc-200 outline-none placeholder:text-zinc-600"
        />

        {/* Send */}
        {
          isLoading?(
            <TailSpin
  height="20"
  width="20"
  color="#fde047"
/>
          ):(
          <button
          type="button"
          onClick={()=>sendUserPrompt()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-4xl text-zinc-500 transition hover:bg-white/[0.06] hover:text-zinc-200"
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
          )
        }
        
      </div>
      {/* <p className="mt-3 text-center text-[10px] text-zinc-700">
        Flash can make mistakes. Review generated code before running it.
      </p> */}
    </div>
  );
}
