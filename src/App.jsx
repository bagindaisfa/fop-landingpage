import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Courts from "./components/Courts";
import Partners from "./components/Partner";
import Facilities from "./components/Facilities";
import Member from "./components/Member";
import Events from "./components/Events";
import Clubs from "./components/Clubs";
import MemberForm from "./components/MemberForm";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // kalau page sudah complete sebelum effect jalan
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  } else {
    return (
      <>
        <Navbar />
        <Hero />
        <AboutUs />
        <Courts />
        <Partners />
        <Facilities />
        <Member />
        <Events />
        <Clubs />
        <MemberForm />
        <Footer />
      </>
    );
  }
}

export default App;
