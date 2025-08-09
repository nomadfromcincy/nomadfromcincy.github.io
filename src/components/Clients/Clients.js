import React, { useEffect, useState } from 'react';
import { getClientsContent } from '../../services/clientsService';

const IdealClients = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await getClientsContent();
      if (data.length > 0) {
        setContent(data);
      }
    };
    loadContent();
  }, []);

  const clients = content?.map((item) => item.itemData) || [];

  return (
    <section id="clients" className="min-h-screen bg-light flex items-center justify-center">
        <div className="w-4/5 max-w-7xl bg-accent rounded-3xl shadow-xl p-0 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">IDEAL CLIENTS</h2>

                <div className="space-y-6 text-lg md:text-xl font-medium">
                {clients.map((item, index) => (
                    <div
                    key={index}
                    className="border-b border-black pb-4 last:border-none"
                    >
                    {item}
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default IdealClients;
