import club1 from "../assets/images/club1.png";
import club2 from "../assets/images/club2.png";
import club3 from "../assets/images/club3.png";

const clubs = [
  {
    name: "Bogor",
    description:
      "For those seeking active leisure, enjoy our state-of-the-art padel courts, where sport and lifestyle come together in a vibrant community atmosphere.",
    image: club1,
    link: "https://maps.app.goo.gl/4VqTXWTPBrfNwGKz7",
  },
  {
    name: "Pondok Indah",
    description:
      "Bringing a fresh and dynamic sporting experience to this prestigious area. Here, sport meets elegance — offering the community not just a place to play, but a new lifestyle to embrace.",
    image: club2,
    link: "https://maps.app.goo.gl/NbeQyt1nTwvmgjjA7",
  },
  {
    name: "Bekasi",
    description:
      "The first padel court experience to Grand Wisata Bekasi, introducing a new way to stay active, socialize, and enjoy a modern sporting lifestyle within this thriving community.",
    image: club3,
    link: "https://maps.app.goo.gl/2WN1dbgBTr92SCwA9",
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
              target="_blank"
              rel="noopener noreferrer"
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
