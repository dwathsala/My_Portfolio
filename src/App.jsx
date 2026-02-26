import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (

    <div >
      <Header />
      <main className="relative">
        <div className="pt-20"> 
          <Hero />

        </div>
      </main>
    </div>
  );
}

export default App;