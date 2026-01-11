const DecisionPulse = () => {
  return (
    <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
      {/* The Core */}
      <div className="w-4 h-4 bg-foreground rounded-full z-10 glow-point" />

      {/* Expanding Rings */}
      <div className="absolute w-full h-full border border-foreground/5 rounded-full animate-spin-slow" />
      <div className="absolute w-3/4 h-3/4 border border-foreground/10 rounded-full animate-spin-slow-reverse" />
      <div className="absolute w-1/2 h-1/2 border border-foreground/20 rounded-full animate-spin-slow" />

      {/* Pulse Animation */}
      <div className="absolute w-12 h-12 bg-foreground/20 rounded-full animate-pulse-ring" />
      <div
        className="absolute w-12 h-12 bg-foreground/10 rounded-full animate-pulse-ring"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Labels */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-8 text-right hidden md:block">
        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
          Focus
        </span>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-8 text-left hidden md:block">
        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
          Action
        </span>
      </div>
    </div>
  );
};

export default DecisionPulse;