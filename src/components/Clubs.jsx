import club1 from "../assets/images/club1.png";
import club2 from "../assets/images/club2.png";
import club3 from "../assets/images/club3.png";

const clubs = [
  {
    name: "Bogor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: club1,
    link: "#",
  },
  {
    name: "Pondok Indah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: club2,
    link: "#",
  },
  {
    name: "Bintaro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: club3,
    link: "#",
  },
];

const Clubs = () => {
  return (
    <section id="clubs" className="bg-[#9b5c50] py-16 px-6">
      <div className="max-w-6xl mx-auto text-left mb-12">
        <h2 className="text-3xl font-serif text-white">List of Our Clubs</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {clubs.map((club, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Card dengan foto */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-64 object-cover"
              />
              {/* Overlay untuk nama dan deskripsi */}
              <div className="absolute bottom-0 w-full bg-black/40 p-4 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {club.name}
                </h3>
                <p className="text-white text-sm mt-1">{club.description}</p>
              </div>
            </div>

            {/* Link di bawah card */}
            <a
              href={club.link}
              className="mt-4 text-xs text-white hover:text-gray-200 underline"
            >
              VIEW LOCATION
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clubs;
