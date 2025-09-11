import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import partner1 from "../assets/images/partner.png";
import partner2 from "../assets/images/club1.png";
import partner3 from "../assets/images/club2.png";

const partners = [
  {
    img: partner1,
    name: "Kopi Kalyan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    img: partner2,
    name: "Partner Dua",
    description:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
  },
  {
    img: partner3,
    name: "Partner Tiga",
    description:
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.",
  },
];

export default function Partners() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  const current = partners[index];

  return (
    <section id="partners" className="relative py-20 bg-[#f8f8f6]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="font-garamond text-4xl md:text-5xl text-amber-900 text-center mb-16">
          Partners
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {/* Left - Partner Image */}
          <div className="w-full max-w-[480px] mx-auto h-auto min-h-[300px] md:h-[480px] relative mt-8 md:mt-0">
            <img
              src={current.img}
              alt={current.name}
              className="w-full h-auto max-h-[480px] object-cover rounded-lg"
            />
          </div>

          {/* Right - Partner Description Box */}
          <div className="w-full max-w-[480px] mx-auto h-auto min-h-[300px] md:h-[480px] relative mt-8 md:mt-0">
            {/* Navigation buttons */}
            <div className="absolute -top-12 right-0 flex space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center border border-amber-900 text-amber-900 rounded-full hover:bg-amber-900 hover:text-white transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center border border-amber-900 text-amber-900 rounded-full hover:bg-amber-900 hover:text-white transition"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="bg-amber-900 text-white p-6 md:p-10 rounded-lg shadow-lg w-full h-full flex flex-col justify-center text-center md:text-left">
              <h3 className="font-garamond text-2xl md:text-3xl mb-4">
                {current.name}
              </h3>
              <p className="font-dm leading-relaxed">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
