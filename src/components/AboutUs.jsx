import aboutImg from "../assets/images/about.png";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 bg-white text-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image content (kiri) */}
        <div className="flex justify-center md:justify-start">
          <img
            src={aboutImg}
            alt="About Field of Paradise"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Text content (kanan, rata tengah) */}
        <div className="text-center md:text-center text-amber-900">
          <h2 className="font-garamond italic text-4xl md:text-5xl mb-6">
            About Us
          </h2>
          <p className="mb-4 text-lg leading-relaxed font-dm">
            Field of Paradise is more than just a sports destination.
          </p>
          <p className="text-lg leading-relaxed font-dm">
            We are a community built on passion, wellness, and connection. With
            world-class courts, exclusive clubs, and curated events, our mission
            is to bring people together in an environment that balances
            competition, relaxation, and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}
