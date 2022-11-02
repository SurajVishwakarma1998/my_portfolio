
import './App.css';
import About from './component/About';
import Card from './component/Card';
import Contect from './component/Contect';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Midsec from './component/Midsec';
import Navbar from './component/Navbar';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Midsec />
       <Card />
       <Project />
       <section className="bottom">
       <Contect />
       <About />
       </section>
       <Footer/>
    </div>
  );
}

export default App;
