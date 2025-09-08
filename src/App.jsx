import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Courts from "./components/Courts";
import Partners from "./components/Partner";
import Facilities from "./components/Facilities";
import Member from "./components/Member";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Courts />
      <Partners />
      <Facilities />
      <Member />
      <section
        id="clubs"
        className="h-screen bg-gray-800 text-white flex items-center justify-center"
      >
        <h2 className="text-3xl">CLUBS SECTION</h2>
      </section>
    </>
  );
}

export default App;
