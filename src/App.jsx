import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';


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
      </main>

    </div>
  );
}

export default App;