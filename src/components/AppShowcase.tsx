import { motion } from "framer-motion";
import screenshotDashboard from "@/assets/screenshot-dashboard.jpeg";
import screenshotSaved from "@/assets/screenshot-saved.jpeg";
import screenshotAddMeal from "@/assets/screenshot-addmeal.jpeg";

const screens = [
  {
    src: screenshotDashboard,
    title: "Dashboard",
    desc: "Track calories, water & macro trends at a glance.",
    alt: "Curve dashboard with circular calorie and water tracking rings and weekly trend chart",
  },
  {
    src: screenshotSaved,
    title: "Saved Meals",
    desc: "Quickly revisit your logged meals by date.",
    alt: "Saved meals screen showing gradient date card and empty state",
  },
  {
    src: screenshotAddMeal,
    title: "AI Add Meal",
    desc: "AI-powered nutrition estimates in one tap.",
    alt: "Add meal screen with AI assist toggle and nutritional detail fields",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AppShowcase = () => (
  <section id="showcase" className="py-28 relative">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Designed for <span className="gradient-text">Simplicity</span>.
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          Built for Results.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {screens.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group glass-card p-6 flex flex-col items-center hover:border-primary/30 transition-colors duration-300"
          >
            <div className="phone-mockup w-[220px] mb-6 group-hover:scale-[1.03] transition-transform duration-500">
              <img src={s.src} alt={s.alt} className="w-full h-auto" loading="lazy" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AppShowcase;
