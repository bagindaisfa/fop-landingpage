import logoImg from "../assets/images/logo.png";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="story"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content (kiri tengah) */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24 text-white">
        <div className="max-w-xl">
          <h1 className="font-garamond italic text-4xl md:text-5xl mb-6">
            Our Story
          </h1>
          <p className="mb-4">
            Field of Paradise fosters a premium luxury, social atmosphere where
            players of all levels connect, compete and grow together.
          </p>
          <p>
            Beyond the game, Field of Paradise is a destination – a
            sophisticated yet welcoming space where sport, wellness, and social
            life come together seamlessly.
          </p>
        </div>
      </div>

      {/* CTA Buttons - hanya tombol di tengah bawah */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <a
          href="#book"
          className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
        >
          BOOK A COURT
        </a>
        <a
          href="#member"
          className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
        >
          BECOME A MEMBER
        </a>
      </div>
    </section>
  );
}
