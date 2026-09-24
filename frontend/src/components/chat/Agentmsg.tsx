export default function Agentmsg({ message }) {
  return (
    <div className="max-w-[80%] px-4 py-3">
      <p className="whitespace-pre-wrap text-sm text-gray-200">
        {message.content}
      </p>
    </div>
  );
}