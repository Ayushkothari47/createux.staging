import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Resume", "Services", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = scrolled ? "rgba(20, 20, 20, 0.7)" : "rgba(0, 0, 0, 0.7)";

  return (
    <nav
      className="fixed top-0 left-0 w-full text-white shadow-md transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
        {/* Left - Name */}
        <div className="text-xl">Prashant Sharma</div>

        {/* Right - Menu + Call Button */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-colors ${
                  active === item ? "text-[#ff5052]" : "text-gray-300"
                } hover:text-[#ff5052]`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+910123456789"
            className="hidden md:flex items-center gap-2 bg-[#ff5052] text-white px-4 py-2 rounded-full hover:bg-[#ff5052] transition-colors"
          >
            <FaPhoneAlt />
            +91 0123456789
          </a>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 pb-4"
          style={{ backgroundColor: bgColor }}
        >
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`cursor-pointer py-2 border-b border-white/10 ${
                active === item ? "text-[#ff5052]" : "text-white"
              } hover:text-[#ff5052]`}
            >
              {item}
            </div>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-[#ff5052] text-white px-4 py-2 rounded-full hover:bg-[#ff5052] transition-colors"
          >
            <FaPhoneAlt />
            +1 234 567 890
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
