// src/components/Footer.jsx
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#9B4D42] text-white">
      <div className="max-w-5xl mx-auto px-16 py-12 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-10">
        {/* Location */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="font-serif text-xl">Field of Paradise HQ</p>
          <p>Pondok Indah, South Jakarta</p>
          <p>0811-1183-6928</p>
          <p className="italic">and more to come</p>
        </div>

        {/* Links middle */}
        <div className="space-y-3">
          <p>Book a Court</p>
          <p>Membership</p>
          <p>Our Story</p>
          <p>Events</p>
          <p>Contact</p>
        </div>

        {/* Links right */}
        <div className="space-y-3">
          <p>Join the Team</p>
          <p>FAQ</p>
          <p>Booking and Cancellation Policy</p>

          {/* Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white text-center py-6">
        <p className="text-[#9B4D42] font-serif text-lg tracking-wide">
          <span className="text-2xl">F</span>IELD OF{" "}
          <span className="text-2xl">P</span>ARADISE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
