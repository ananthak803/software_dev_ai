export default function ChatWelcome() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
      <div className="relative mb-7">
        <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-2xl" />

        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-white/[0.05] shadow-2xl shadow-violet-500/10">
          <Bot className="h-7 w-7 text-violet-300" />
        </div> */}
      </div>

      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        What are you building?
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
        Describe what you want to build, change, or fix. Flash will understand
        your project, create a plan, and work through the task with you.
      </p>
    </section>
  );
}