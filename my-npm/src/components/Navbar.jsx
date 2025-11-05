import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    "Home",
    "About",
    "For Partners",
    "For Moms",
    "Blog",
    "Podcast",
    "Resources",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="arisev text-xl font-semibold" style={{ color: "#E8C5A8" }}>
        YourLogo
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="relative pb-1 group"
              style={{ color: "#E8C5A8" }}
            >
              {item}
              <span
                className="pointer-events-none absolute left-0 bottom-0 w-full h-[2px] bg-[#E8C5A8] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
