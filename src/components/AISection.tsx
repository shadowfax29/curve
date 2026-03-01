import { motion } from "framer-motion";
import { Sparkles, Zap, Brain } from "lucide-react";

const AISection = () => (
  <section id="ai" className="py-28 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[150px]" style={{ background: "hsl(258, 70%, 58%)" }} />

    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" /> AI-Powered
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            AI-Powered{" "}
            <span className="gradient-text">Meal Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            Curve's AI assistant analyzes your meal names instantly and provides
            estimated calories, protein, carbs, fats, and fiber — helping you
            track smarter without manual calculation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glow-card p-8 space-y-6">
            {/* Sparkle decorations */}
            <div className="absolute top-4 right-6 animate-sparkle" style={{ animationDelay: "0s" }}>
              <Sparkles className="w-4 h-4 text-primary/60" />
            </div>
            <div className="absolute bottom-8 left-6 animate-sparkle" style={{ animationDelay: "1s" }}>
              <Sparkles className="w-3 h-3 text-accent/60" />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-purple)" }}>
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg">Smart Analysis</p>
                <p className="text-muted-foreground text-sm">Instant macro breakdown</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm">
                "Grilled chicken salad" →{" "}
                <span className="text-foreground font-medium">
                  420 kcal · 38g protein · 12g carbs
                </span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Accuracy", value: "95%" },
                { label: "Response", value: "<1s" },
                { label: "Foods", value: "10K+" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-3 text-center">
                  <p className="font-display text-xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AISection;
