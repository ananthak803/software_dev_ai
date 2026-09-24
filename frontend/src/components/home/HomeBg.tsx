export default function HomeBg() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {/* Main purple glow */}
            <div className="absolute left-1/2 top-[-280px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-[140px]" />

            {/* Blue glow */}
            <div className="absolute left-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-yellow-300/10 blur-[120px]" />

       
            <div className="absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-yellow-300/10 blur-[120px]" />

            {/* Grid */}
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