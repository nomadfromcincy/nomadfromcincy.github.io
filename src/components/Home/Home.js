import React, { useEffect, useState } from 'react';
import { getHomeContent } from '../../services/homeService';
import { FaCommentDots } from 'react-icons/fa';
import placeholder from '../../assets/temp.png';
import headshot from '../../assets/headshot.png';
import logo from '../../assets/logo.png'

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getHomeContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  return (
    <section id="home" className="min-h-screen bg-light flex items-center justify-center px-4 py-16">
      <div className="w-4/5 max-w-7xl bg-accent rounded-3xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10 justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            {content ? content.find((item) => item.title_fld === 'MainTitle')?.data : 'Loading...'}
          </h1>
          <p className="text-lg text-gray-800">
            {content ? content.find((item) => item.title_fld === 'SubTitle')?.data : 'Loading...'}
          </p>
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <FaCommentDots className="w-4 h-4" />
            <span className="sm:inline">Let's Chat</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center">
          <div className="w-full max-h-[400px] md:max-h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Thyone Consulting Logo"
              className="max-h-full w-3/5 object-contain mx-auto"
            />
          </div>

          {/* Logo Overlapping */}
          <img
            src={headshot}
            alt="Damon Portrait"
            className="absolute bottom-2 right-2 w-24 transform translate-x-1/3 translate-y-1/3 rounded-full border-4 border-blue-800 shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
