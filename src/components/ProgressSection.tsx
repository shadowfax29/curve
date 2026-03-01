import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CircleProgress = ({ value, max, label, color }: { value: number; max: number; label: string; color: string }) => {
  const [current, setCurrent] = useState(0);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = (current / max) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setCurrent(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
        <text x="60" y="55" textAnchor="middle" className="fill-foreground font-display text-2xl font-bold" fontSize="24">
          {current}
        </text>
        <text x="60" y="73" textAnchor="middle" className="fill-muted-foreground text-xs" fontSize="11">
          / {max}
        </text>
      </svg>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const ProgressSection = () => (
  <section id="progress" className="py-28 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[140px]" style={{ background: "hsl(220, 90%, 60%)" }} />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          See Your Progress <span className="gradient-text">Clearly</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Beautiful visualizations that keep you motivated.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass-card p-10 max-w-3xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-12 mb-10">
          <CircleProgress value={1850} max={2742} label="Calories (kcal)" color="hsl(130, 50%, 40%)" />
          <CircleProgress value={1600} max={2000} label="Water (ml)" color="hsl(210, 100%, 55%)" />
          <CircleProgress value={95} max={150} label="Protein (g)" color="hsl(258, 70%, 58%)" />
        </div>

        {/* Simple trend line */}
        <div className="h-px bg-border mb-4" />
        <svg viewBox="0 0 600 100" className="w-full h-20" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="hsl(258, 70%, 58%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,80 100,60 200,70 300,30 400,45 500,20 600,35"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 0,
            }}
          />
        </svg>
        <p className="text-muted-foreground text-xs text-center mt-2">7-day calorie trend</p>
      </motion.div>
    </div>
  </section>
);

export default ProgressSection;
