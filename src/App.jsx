import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './styles/main.scss';


export default function App() {
  return (
    <div>
        <Header />
      <main className="container">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}