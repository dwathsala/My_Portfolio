import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* The Header is global. It stays here forever. */}
      <Header />

      <main className="relative">
        <Hero />
        
      </main>

    </div>
  );
}

export default App;