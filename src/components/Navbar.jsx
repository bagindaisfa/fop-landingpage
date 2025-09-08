import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Field of Paradise Logo"
              className="h-10 w-auto md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {[
                { to: "story", text: "OUR STORY" },
                { to: "courts", text: "COURTS" },
                { to: "clubs", text: "CLUBS" },
                { to: "events", text: "EVENTS" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="px-2 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { to: "story", text: "OUR STORY" },
                { to: "courts", text: "COURTS" },
                { to: "clubs", text: "CLUBS" },
                { to: "events", text: "EVENTS" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
