"use client";

export function AccentCorner({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const color = "#39FF14";
  const glow = "drop-shadow-[0_0_4px_rgba(57,255,20,0.6)]";
  
  const TopLeft = () => (
    <div className={`absolute top-0 left-0 pointer-events-none z-20 ${glow}`}>
      <div style={{ backgroundColor: color }} className="w-8 h-[2px] absolute top-[-1px] left-[-1px]" />
      <div style={{ backgroundColor: color }} className="w-[2px] h-8 absolute top-[-1px] left-[-1px]" />
    </div>
  );

  const TopRight = () => (
    <div className={`absolute top-0 right-0 pointer-events-none z-20 ${glow}`}>
      <div style={{ backgroundColor: color }} className="w-8 h-[2px] absolute top-[-1px] right-[-1px]" />
      <div style={{ backgroundColor: color }} className="w-[2px] h-8 absolute top-[-1px] right-[-1px]" />
    </div>
  );

  const BottomLeft = () => (
    <div className={`absolute bottom-0 left-0 pointer-events-none z-20 ${glow}`}>
      <div style={{ backgroundColor: color }} className="w-8 h-[2px] absolute bottom-[-1px] left-[-1px]" />
      <div style={{ backgroundColor: color }} className="w-[2px] h-8 absolute bottom-[-1px] left-[-1px]" />
    </div>
  );

  const BottomRight = () => (
    <div className={`absolute bottom-0 right-0 pointer-events-none z-20 ${glow}`}>
      <div style={{ backgroundColor: color }} className="w-8 h-[2px] absolute bottom-[-1px] right-[-1px]" />
      <div style={{ backgroundColor: color }} className="w-[2px] h-8 absolute bottom-[-1px] right-[-1px]" />
    </div>
  );

  switch (position) {
    case "top-left": return <TopLeft />;
    case "top-right": return <TopRight />;
    case "bottom-left": return <BottomLeft />;
    case "bottom-right": return <BottomRight />;
    default: return <TopLeft />;
  }
}

export function AccentLine({ direction = "horizontal", side = "bottom" }: { direction?: "horizontal" | "vertical", side?: "top" | "bottom" | "left" | "right" }) {
    const base = `absolute z-20 bg-[#39FF14] pointer-events-none drop-shadow-[0_0_4px_rgba(57,255,20,0.6)]`;
    if (direction === "horizontal") {
        return <div className={`${base} ${side === "top" ? "top-0" : "bottom-0"} left-0 w-full h-[1px] opacity-40`} />
    }
    return <div className={`${base} top-0 ${side === "left" ? "left-0" : "right-0"} w-[1px] h-full opacity-40`} />
}
