import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InfoGrid from './components/InfoGrid';
import Verification from './components/Verification';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#334155] selection:bg-[#f26522] selection:text-white">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <InfoGrid />
                  <Verification />
                </>
              }
            />

            {/* ABOUT PAGE */}
            <Route path="/about" element={<About />} />

            {/* CONTACT PAGE */}
            <Route path="/contact" element={<Contact />} />

            {/* GALLERY PAGE */}
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;