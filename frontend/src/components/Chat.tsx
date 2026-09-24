import { Group, Panel, Separator } from "react-resizable-panels";
import { useChatStore } from "../store/chatStore";

import ChatBg from "./chat/ChatBg";
import ChatHeader from "./chat/ChatHeader";
import ProjectListDropDown from "./chat/ProjectListDropDown";


export default function Chat() {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#08090d] text-white ">
      <ChatBg />

      <ChatHeader>
        <div className="mx-4">
          <ProjectListDropDown/>
        </div>
      </ChatHeader>

      {/* Resizable 3-Column Layout */}
      <div className="relative flex-1 min-h-0 w-full p-1">
        <Group orientation="horizontal" className="h-full w-full">
          {/* Section 1: Left */}
          <Panel
            defaultSize="3%"
            minSize="3%"
            maxSize="3%"
            className=" rounded-md border border-white/10  p-2"
          ></Panel>

          <Separator className="w-[2px] " />
          <Panel
            defaultSize="20%"
            minSize="0%"
            maxSize="40%"
            className=" rounded-md border border-white/10  p-2"
          >
            dfd
          </Panel>

          <Separator className="w-[2px]  hover:bg-yellow-300 transition-colors cursor-col-resize" />

          <Panel
            defaultSize="50%"
            minSize="20%"
            className="rounded-md border border-white/10 p-2"
          >
            fdfd
          </Panel>

          <Separator className="w-[2px]  hover:bg-yellow-300 transition-colors cursor-col-resize" />

          <Panel
            defaultSize="30%"
            minSize="15%"
            className="p-2 rounded-md border border-white/10"
          >
            fdfd
          </Panel>
        </Group>
      </div>
    </div>
  );
}
