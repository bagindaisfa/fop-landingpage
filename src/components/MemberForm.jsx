// src/components/MemberForm.jsx
import submitMember from "../assets/images/submit-member.png";

const MemberForm = () => {
  return (
    <section
      id="member-form"
      className="relative w-full h-full flex items-center justify-end overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={submitMember}
        alt="Submit Member"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-md w-full py-20 px-10 text-left">
        {/* Title */}
        <h2 className="text-4xl font-serif font-semibold leading-snug mb-8">
          Discover Member <br /> Privileges
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-[#A64B43] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#8c3e37] transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MemberForm;
