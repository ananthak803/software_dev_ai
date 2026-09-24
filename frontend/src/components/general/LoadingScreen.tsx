import { Zap } from "lucide-react";
import { TailSpin } from "react-loader-spinner";
import {useChatStore} from "../../store/chatStore"
export default function LoadingScreen() {
    
  return (
   <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/20 backdrop-blur-[2px]">
      <div className="flex flex-col items-center">

        {/* Glow */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-yellow-300/10 blur-2xl" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-300/20 bg-[#0d0f14] shadow-[0_0_35px_rgba(253,224,71,0.25)]">
            <Zap className="h-7 w-7 text-yellow-300" />
          </div>
        </div>

        {/* Spinner */}
        <div className="mt-8">
          <TailSpin
            height="24"
            width="24"
            color="#fde047"
          />
        </div>

        {/* Text */}
        <h2 className="mt-5 text-lg font-medium text-zinc-200">
          Creating Project...
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Setting everything up for you
        </p>
      </div>
    </div>
  );
}