import Header from './components/Header'; // Is this line here?
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header /> 
      <main className='relative'>
        <div className="pt-5"> 
          <Hero />
        </div>
      </main>
    </div>
  );
}