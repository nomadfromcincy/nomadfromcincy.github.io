import { useEffect, useState } from 'react';
import { getWhyWorkWithMeContent } from '../../services/whyWorkWithMeService';

const WhyWorkWithMe = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getWhyWorkWithMeContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  return (
    <section id="why" className="w-full bg-primary text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">WHY WORK WITH ME</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          {content ? content.find((item) => item.title_fld === 'WhyWorkWithMeText')?.data : 'Loading...'}
          You won’t get a slide deck that sits on a shelf. I’ve been in the operator’s seat — managing P&Ls, raising capital, and scaling real businesses. My approach is collaborative, candid, and outcome-focused. I roll up my sleeves and work alongside your team to build what matters.
        </p>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
