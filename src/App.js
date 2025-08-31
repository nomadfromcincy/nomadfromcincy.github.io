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
import AnimatedSection from './components/AnimatedSection/AnimatedSection';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Header />
      <main>
        <AnimatedSection direction="left"><Home /></AnimatedSection>
        <AnimatedSection direction="right"><About /></AnimatedSection>
        <AnimatedSection direction="left"><Services /></AnimatedSection>
        <AnimatedSection direction="up"><PreviousClients /></AnimatedSection>
        <AnimatedSection direction="left"><Clients /></AnimatedSection>
        <AnimatedSection direction="right"><WhyWorkWithMe /></AnimatedSection>
        <AnimatedSection direction="up"><Contact /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;