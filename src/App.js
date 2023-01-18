import Navbar from "./components/Navbar";
import About from "./container/about/About";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Skills from "./container/skills/Skills";
// import Testimonial from "./container/testimonial/Testimonial";
import Work from "./container/work/Work";
import './App.scss'

function App() {
  return (
    <div  className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        
        <Footer/>
    </div>
  );
}

export default App;
