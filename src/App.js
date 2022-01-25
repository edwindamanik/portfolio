import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import Jumbotron from './components/Jumbotron/Jumbotron.component';
import Skills from './components/Skills/Skills.component';
import Project from './components/Project/Project.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;