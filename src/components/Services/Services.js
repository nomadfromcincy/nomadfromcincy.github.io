import React, { useState, useEffect } from 'react';
import { getServicesContent } from '../../services/servicesService';

const Services = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getServicesContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const services = content?.map((item) => item.itemData) || [];

  return (
    <section id="services" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          CORE SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isOpen = openIndexes.has(index);

            return (
                <div
                    key={service.title}
                    className={`group border border-black rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white`}
                    >
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="mb-4">{service.subtitle}</p>

                    <button
                        onClick={() => toggleOpen(index)}
                        className={`w-full mt-4 px-4 py-2 rounded-md font-semibold border-2 border-primary bg-primary text-white 
                        transition group-hover:bg-white group-hover:text-primary`}
                    >
                        {isOpen ? 'Hide Details' : 'More Information'}
                    </button>

                    {isOpen && (
                        <div className="mt-4 space-y-3 text-sm">
                        {service.details.map((detail, i) => (
                            <p key={i}>
                            <strong>{detail.heading}</strong> {detail.text}
                            </p>
                        ))}
                        </div>
                    )}
                </div>            
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
