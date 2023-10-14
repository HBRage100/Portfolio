import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar hmTxt="Home" abtTxt="About" sklTxt="Skills" cntTxt="Contact" />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
