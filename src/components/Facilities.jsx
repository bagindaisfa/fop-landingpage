import facility1 from "../assets/images/facility1.png";
import facility2 from "../assets/images/facility2.png";
import facility3 from "../assets/images/facility3.png";
import facility4 from "../assets/images/facility4.png";

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      image: facility1,
      title: "Recovery Room",
      desc: "A dedicated space equipped with modern amenities to help players relax and recover after matches.",
    },
    {
      id: 2,
      image: facility2,
      title: "Dine in Restaurant & Cafe",
      desc: "Experience fine dining and casual cafe moments with curated menus for every taste.",
    },
    {
      id: 3,
      image: facility3,
      title: "Meeting Room",
      desc: "A professional yet comfortable space for business gatherings and private meetings.",
    },
    {
      id: 4,
      image: facility4,
      title: "Playground",
      desc: "A safe and fun area designed for families and kids to enjoy while staying active.",
    },
  ];

  return (
    <section id="facilities" className="relative py-20 bg-white text-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="font-garamond italic text-4xl md:text-5xl text-amber-900 text-center mb-16">
          Our Club Facilities
        </h2>

        {/* Facilities Grid */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="font-garamond text-xl mb-3 text-amber-900">
                {facility.title}
              </h3>
              <p className="font-dm text-gray-700 leading-relaxed text-sm">
                {facility.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
