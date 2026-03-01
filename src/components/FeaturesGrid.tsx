import { motion } from "framer-motion";
import {
  Utensils,
  Calculator,
  PieChart,
  Target,
  TrendingUp,
  Bell,
  Sparkles,
  Moon,
} from "lucide-react";

const features = [
  { icon: Utensils, title: "Add & Track Daily Meals", desc: "Log meals effortlessly with a clean, intuitive interface." },
  { icon: Calculator, title: "Automatic Calorie & Macro Calculation", desc: "Instant nutritional breakdown for every meal." },
  { icon: PieChart, title: "Real-Time Macro Breakdown", desc: "See protein, carbs & fat ratios at a glance." },
  { icon: Target, title: "Daily Calorie Goal Tracking", desc: "Set targets and stay on track every day." },
  { icon: TrendingUp, title: "Progress Monitoring & Trends", desc: "Visualize your journey with beautiful charts." },
  { icon: Bell, title: "Smart Reminders & Notifications", desc: "Never miss a meal log with timely nudges." },
  { icon: Sparkles, title: "AI Meal Breakdown Assistant", desc: "Let AI estimate nutrition from meal names." },
  { icon: Moon, title: "Dark Mode Support", desc: "Designed for comfortable use day and night." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesGrid = () => (
  <section id="features" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Everything You <span className="gradient-text">Need</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Powerful features to transform your nutrition habits.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-secondary">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesGrid;
