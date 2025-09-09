import court1 from "../assets/images/court1.png";
import court2 from "../assets/images/court2.png";
import court3 from "../assets/images/court3.png";

export default function Courts() {
  const courts = [
    {
      id: 1,
      image: court1,
      title: "Regular Court",
      desc: "Court A, B & C.",
    },
    {
      id: 2,
      image: court2,
      title: "Center Court",
      desc: "Standart Tournament Court.",
    },
    {
      id: 3,
      image: court3,
      title: "VIP Court",
      desc: "VIP Court sets a new standard for a premium padel experience.",
    },
  ];

  return (
    <section id="courts" className="relative py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Title on the left */}
        <div className="md:col-span-1 flex justify-start self-center">
          <h2 className="font-garamond italic text-4xl md:text-5xl text-amber-900 leading-tight">
            Discover <br /> Our Courts
          </h2>
        </div>

        {/* Cards on the right */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {courts.map((court) => (
            <div key={court.id} className="flex flex-col">
              {/* Image - portrait style */}
              <img
                src={court.image}
                alt={court.title}
                className="w-full h-[420px] object-cover mb-6"
              />

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-garamond text-2xl mb-4 text-amber-900">
                    {court.title}
                  </h3>
                  <p className="font-dm text-gray-700">{court.desc}</p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
