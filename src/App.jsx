import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* The Header is global. It stays here forever. */}
      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>

    </div>
  );
}

export default App;