import Usermsg from "./Usermsg";
import Agentmsg from "./Agentmsg";
import {useChatStore} from "../../store/chatStore"
export default function MsgList() {
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
            <Usermsg message={message} />
          ) : (
            <Agentmsg message={message} />
          )}
        </div>
      ))}
    </div>
  );
}