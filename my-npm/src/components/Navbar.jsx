
const Navbar = () => {
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent shadow">
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
              className="relative pb-1"
              style={{ color: "#E8C5A8" }}
            >
              {item}
              <span
                className="pointer-events-none absolute left-0 bottom-0 w-full h-[2px] bg-[#E8C5A8] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 hover:scale-x-100"
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
