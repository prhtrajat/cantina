
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FoodCards from './components/Food-Cards/Food-Cards';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FoodCards />
      <About />
      <Footer />
    </div>
  );
}

export default App;
