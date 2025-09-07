import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah jadi true kalau scroll lebih dari 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-black/50"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Field of Paradise Logo"
            className="h-16 w-auto md:h-20"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold tracking-wide text-white">
          <Link
            to="story"
            smooth={true}
            duration={600}
            offset={-80} // buat ngimbangin tinggi navbar
            className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
          >
            OUR STORY
          </Link>
          <Link
            to="courts"
            smooth={true}
            duration={600}
            offset={-80} // buat ngimbangin tinggi navbar
            className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
          >
            COURTS
          </Link>
          <Link
            to="clubs"
            smooth={true}
            duration={600}
            offset={-80} // buat ngimbangin tinggi navbar
            className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
          >
            CLUBS
          </Link>
          <Link
            to="events"
            smooth={true}
            duration={600}
            offset={-80} // buat ngimbangin tinggi navbar
            className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
          >
            EVENTS
          </Link>
        </nav>
      </div>
    </header>
  );
}
