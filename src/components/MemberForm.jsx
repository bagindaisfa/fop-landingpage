import { useState } from 'react';
import submitMember from "../assets/images/submit-member.png";

const MemberForm = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // WhatsApp number (replace with actual business number)
    const phoneNumber = '6281111836928'; // Replace with actual WhatsApp number
    
    // Format and encode the message
    const encodedMessage = `*New Member Inquiry*%0A%0A` +
                   `*Name:* ${encodeURIComponent(formData.name)}%0A` +
                   `*Email:* ${encodeURIComponent(formData.email)}`;
    const url = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp with the message
    window.open(url, '_blank');
    
    // Reset form and show success message
    setFormData({ name: '', email: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };
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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#A64B43] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#8c3e37] transition disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? 'Sending...' : 'SUBMIT'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="text-green-300 text-sm">
                Thank you! You'll be redirected to WhatsApp shortly.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default MemberForm;
