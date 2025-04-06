import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App