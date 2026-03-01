import { motion } from "framer-motion";

const CTA = () => (
  <section id="cta" className="py-28 relative overflow-hidden">
    {/* Gradient strip */}
    <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-purple)" }} />
    <div className="absolute inset-0 bg-background/80" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform{" "}
          <span className="gradient-text">Your Diet?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Join thousands tracking smarter with Curve's AI-powered insights.
        </p>
        <a href="#" className="gradient-button inline-block px-10 py-5 rounded-full text-lg">
          Download Curve Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTA;
