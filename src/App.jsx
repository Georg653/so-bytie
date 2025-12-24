import React from 'react';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import HowToHelp from './sections/HowToHelp/HowToHelp';
import FAQ from './sections/FAQ/FAQ';
import Institutions from './sections/Institutions/Institutions';
import CollectionPoints from './sections/CollectionPoints/CollectionPoints';
import Donation from './sections/Donation/Donation';
import Footer from './sections/Footer/Footer';
import Decorations from './components/Decorations/Decorations';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <div className="content-with-bg">
          <Decorations />
          <About />
          <HowToHelp />
          <FAQ />
          <Institutions />
          <CollectionPoints />
          <Donation />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;