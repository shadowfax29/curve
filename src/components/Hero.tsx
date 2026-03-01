import { motion } from "framer-motion";
import screenshotDashboard from "@/assets/screenshot-dashboard.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(258, 70%, 58%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px]" style={{ background: "hsl(220, 90%, 60%)" }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-secondary mb-6 text-muted-foreground">
            AI-Powered Calorie Tracking
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Track Smart.{" "}
            <br />
            Eat Smart.{" "}
            <br />
            <span className="gradient-text">Transform Your Curve.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            AI-powered calorie tracking with real-time macro analysis, progress
            insights, and intelligent meal breakdown.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="gradient-button px-8 py-4 rounded-full text-base">
              Download App
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full text-base font-medium border border-border text-foreground hover:bg-secondary transition-colors duration-200"
            >
              View Features
            </a>
          </div>
        </motion.div>

        {/* Right – Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="animate-float">
            <div className="phone-mockup w-[280px] md:w-[320px]">
              <img
                src={screenshotDashboard}
                alt="Curve app dashboard showing calorie and water tracking with progress rings"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
