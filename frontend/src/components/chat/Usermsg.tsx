export default function Usermsg({ message }) {
  return (
    <div className="max-w-[80%] rounded-2xl bg-white/10 px-4 py-3">
      <p className="whitespace-pre-wrap text-sm">{message.content}</p>
    </div>
  );
}