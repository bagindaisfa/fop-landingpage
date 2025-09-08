import member1 from "../assets/images/member1.png";
import member2 from "../assets/images/member2.png";

export default function Member() {
  return (
    <section id="member" className="relative py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Member Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* First content - wider (span 3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <img
              src={member1}
              alt="Paradise Circle"
              className="w-70 h-80 object-cover mb-6"
            />
            <h3 className="font-garamond text-3xl mb-4 text-amber-900">
              Be a Part of Paradise Circle
            </h3>
            <p className="font-dm font-bold text-black leading-relaxed">
              MEMBER LOUNGE • FREE VALET • SPECIAL PRICE COURT • FREE ACCESS{" "}
              <br />
              RECOVERY ROOM • EXTRA DISCOUNTS AND MANY MORE
            </p>
          </div>

          {/* Second content - smaller (span 2 cols) */}
          <div className="md:col-span-2 flex flex-col items-center">
            <img
              src={member2}
              alt="Join Us"
              className="w-50 h-80 object-cover mb-6"
            />
            <a
              href="#"
              className="px-6 py-3 bg-amber-900 text-white hover:bg-white hover:text-amber-900 border border-amber-900 transition"
            >
              JOIN US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
