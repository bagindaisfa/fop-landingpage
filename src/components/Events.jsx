import eventImg from "../assets/images/event1.png";
import { MapPin, ArrowRight } from "lucide-react";

export default function Events() {
  const event = {
    date: "03",
    month: "OCT",
    title: "Field of Paradise Pondok Indah Trial Open",
    location: "Pondok Indah, South Jakarta",
    desc: "Giving you the chance to be among the very first to enjoy the experience before the official grand opening. Come explore, try it out, and be part of this exciting beginning. Limited slots available, so make sure you don’t miss it!",
  };

  return (
    <section id="events" className="relative py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h3 className="font-dm font-bold text-lg">Upcoming Events</h3>
          <div className="text-gray-600 flex items-center gap-4">
            <span className="cursor-pointer">&lt;</span>
            <span>October 2025</span>
            <span className="cursor-pointer">&gt;</span>
          </div>
        </div>

        {/* Event Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Event Image */}
          <div className="relative">
            <img
              src={eventImg}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
            
            {/* Date Box - positioned at bottom-right of image */}
            <div className="absolute left-[85%] top-[20%] md:right-0 md:bottom-0 md:translate-y-1/2 md:translate-x-1/2 bg-white shadow-lg p-3 md:p-6 text-center w-16 h-16 md:w-24 md:h-24 flex flex-col justify-center">
              <div className="text-xl md:text-4xl font-bold text-amber-900 leading-none">
                {event.date}
              </div>
              <div className="text-sm md:text-2xl font-semibold text-amber-900">
                {event.month}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="md:pl-8" style={{ maxWidth: 550 }}>
            <h2 className="font-garamond text-3xl md:text-4xl mb-4">
              {event.title}
            </h2>
            <div className="flex items-center gap-2 text-amber-900 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-dm font-semibold">{event.location}</span>
            </div>
            <p className="font-dm text-gray-700">{event.desc}</p>

            {/* Arrow button */}
            <div className="mt-6 flex justify-end">
              <button className="border border-amber-900 rounded-full p-2 hover:bg-amber-900 hover:text-white transition">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}
