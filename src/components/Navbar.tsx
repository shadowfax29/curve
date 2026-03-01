import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // Adjust the path to your logo image
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur" : ""
      }`}
    >
     <div className="container mx-auto flex items-center justify-between py-4 px-6">
  <a href="#" className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
    
    {/* Logo Image */}
    <img
      src={logo}   // put your image inside public folder
      alt="Curve Logo"
      className="w-12 h-12  rounded-full object-contain mix-blend-lighten"
    />

    <span className="gradient-text">Curve</span>
  </a>

  <div className="hidden md:flex items-center gap-8">
    {["Features", "Showcase", "AI", "Progress"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item}
      </a>
    ))}
  </div>

  <a
    href="#cta"
    className="gradient-button px-5 py-2.5 rounded-full text-sm"
  >
    Download
  </a>
</div>
    </motion.nav>
  );
};

export default Navbar;
