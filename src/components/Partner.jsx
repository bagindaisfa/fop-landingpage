import partnerImg from "../assets/images/partner.png";

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="font-garamond italic text-4xl md:text-5xl text-amber-900 text-center mb-16">
          Partners
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {/* Left - Partner Image */}
          <div className="flex justify-center">
            <img
              src={partnerImg}
              alt="Partner"
              className="w-[480px] h-[480px] object-contain"
            />
          </div>

          {/* Right - Partner Description Box */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-amber-900 text-white p-10 rounded-lg shadow-lg w-[480px] h-[480px] flex flex-col justify-center text-center md:text-left">
              <h3 className="font-garamond italic text-2xl md:text-3xl mb-4">
                Our Trusted Partner
              </h3>
              <p className="font-dm leading-relaxed">
                We are proud to collaborate with our exclusive partner, bringing
                premium quality and excellence to Field of Paradise. Together,
                we aim to deliver unmatched experiences for our community of
                players and members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
