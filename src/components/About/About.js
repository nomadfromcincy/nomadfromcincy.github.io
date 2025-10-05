import { useState, useEffect } from 'react';
import { getAboutContent } from '../../services/aboutService';

const About = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getAboutContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  return (
    <section id="about" className="w-full bg-primary text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">ABOUT DAMON</h2>
        {content ? content.find((item) => item.title_fld === 'About')?.data : <p>Loading...</p>}
      </div>
    </section>
  );
};

export default About;
