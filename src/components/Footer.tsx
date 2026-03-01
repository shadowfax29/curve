const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div>
          <p className="font-display text-xl font-bold gradient-text">Curve</p>
          <p className="text-muted-foreground text-sm mt-1">Calories Tracker</p>
        </div>
        <div className="flex gap-6 justify-center">
          {["Features", "Download", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-right">
          © 2026 Curve. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
