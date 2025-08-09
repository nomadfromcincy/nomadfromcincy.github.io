import React from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import PreviousClients from './components/PreviousClients/PreviousClients';
import Clients from './components/Clients/Clients';
import WhyWorkWithMe from './components/WhyWorkWithMe/WhyWorkWithMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <PreviousClients />
        <Clients />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
