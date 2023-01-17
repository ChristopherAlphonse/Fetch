import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="fixed w-full h-auto z-100">
      <div className="transition-all bg-transparent md:py-8">
        <div className="max-w-7xl px-5 md:pr-0 nav:pr-5 mx-auto">
          <NavBar />
          <Hero />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
