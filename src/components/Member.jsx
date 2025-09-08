import member1 from "../assets/images/member1.png";
import member2 from "../assets/images/member2.png";

export default function Member() {
  return (
    <section id="member" className="relative py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            <img
              src={member1}
              alt="Paradise Circle"
              className="w-full h-auto object-cover mb-6"
            />
            <h3 className="font-garamond text-3xl md:text-4xl text-amber-900 mb-6 leading-tight">
              Be a Part of Paradise Circle
            </h3>
            <p className="font-dm font-bold text-black leading-relaxed">
              MEMBER LOUNGE • FREE VALET • SPECIAL PRICE COURT • FREE ACCESS
              <br />
              RECOVERY ROOM • EXTRA DISCOUNTS AND MANY MORE
            </p>
          </div>

          {/* Right Column - Join Us */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start lg:pl-8">
            <div className="relative w-full mb-8 lg:mb-12">
              <img
                src={member2}
                alt="Join Us"
                className="w-full object-cover"
                style={{ height: "450px", marginBottom: "30px" }}
              />
              <a
                href="#"
                className="bg-amber-900 text-white px-8 py-3 text-lg font-medium tracking-wider hover:bg-amber-800 transition-colors duration-300 inline-block min-w-[200px] text-center"
              >
                JOIN US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
