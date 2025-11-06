import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "For Partners", path: "/for-partners" },
    { label: "For Moms", path: "/for-moms" },
    { label: "Blog", path: "/blog" },
    { label: "Podcast", path: "/podcast" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
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
      <div className="text-3xl arisev font-semibold" style={{ color: "#E8C5A8" }}>
        AJ
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {links.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className="relative pb-1 group"
              style={{ color: "#E8C5A8" }}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`
                      pointer-events-none absolute left-0 bottom-0 w-full h-[2px] bg-[#E8C5A8]
                      transition-transform duration-300 origin-left 
                      group-hover:scale-x-100
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Burger Button (Mobile/Tablet) */}
      <button
        className="md:hidden text-[#E8C5A8] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-center py-6 md:hidden">
          <ul className="flex flex-col gap-6 text-lg">
            {links.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block"
                  style={{ color: "#E8C5A8" }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
