import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
  <div>
    <Navbar/>
    <div>
      <Home />
      <About />
      <Footer/>
    </div>
  </div>
  );
}

export default App;