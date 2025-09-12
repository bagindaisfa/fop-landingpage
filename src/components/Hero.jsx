import React from "react";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  const encodedMessage = encodeURIComponent(
    "Halo saya ingin menjadi member Field of Paradise"
  );

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const url = isMobile
    ? `https://wa.me/6281111836928?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=6281111836928&text=${encodedMessage}`;

  return (
    <section
      id="story"
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content (center left) */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl text-white">
            <h1 className="font-garamond italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Our Story
            </h1>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
              <p>
                Field of Paradise fosters a premium luxury, social atmosphere
                where players of all levels connect, compete and grow together.
              </p>
              <p>
                Beyond the game, Field of Paradise is a destination – a
                sophisticated yet welcoming space where sport, wellness, and
                social life come together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons - centered at bottom */}
      <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a
              href="https://courtside.id/mitra?mitra_id=9f594287-e300-400c-a169-862d467ef524"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 border border-white text-sm sm:text-base text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              BOOK A COURT
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 border border-white text-sm sm:text-base text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              BECOME A MEMBER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
