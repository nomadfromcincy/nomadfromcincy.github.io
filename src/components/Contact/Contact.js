import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getContactContent } from '../../services/contactService';

const Contact = () => {
  const [content, setContent] = useState(null);
  
  useEffect(() => {
    const loadContent = async () => {
      const data = await getContactContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  return (
    <section id="contact" className="w-full bg-white py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left side text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Let’s dig into your business needs.
          </h2>
          <p className="text-lg">
            Schedule a free introductory call.
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <FaEnvelope className="text-primary" />
            <span className="text-base">
              {content ? content.find((item) => item.title === 'Email')?.text : 'Loading...'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-primary" />
            <span className="text-base">
              {content ? content.find((item) => item.title === 'Phone')?.text : 'Loading...'}
            </span>
          </div>
        </div>

        {/* Right side form */}
        {/* <div className="bg-light p-6 rounded-xl shadow-md space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">How May I Help You?</h3>
            <p className="text-sm text-gray-600">
              Please fill out the form below with your details and message, and I will get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
