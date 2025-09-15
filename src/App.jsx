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

// Import gambar utama
import about from "./assets/images/about.png";
import club1 from "./assets/images/club1.png";
import club2 from "./assets/images/club2.png";
import club3 from "./assets/images/club3.png";
import court1 from "./assets/images/court1.png";
import court2 from "./assets/images/court2.png";
import court3 from "./assets/images/court3.png";
import event1 from "./assets/images/event1.png";
import facility1 from "./assets/images/facility1.png";
import facility2 from "./assets/images/facility2.png";
import facility3 from "./assets/images/facility3.png";
import facility4 from "./assets/images/facility4.png";
import hero from "./assets/images/hero.png";
import logo from "./assets/images/logo.png";
import member1 from "./assets/images/member1.png";
import member2 from "./assets/images/member2.png";
import partner from "./assets/images/partner.png";
import submitMember from "./assets/images/submit-member.png";
import titlePartner from "./assets/images/title-partner.png";
import CAMANI_LogoWord_500x from "./assets/images/CAMANI_LogoWord_500x.webp";
import PBC_by_LBC from "./assets/images/PBC by LBC.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      about,
      club1,
      club2,
      club3,
      court1,
      court2,
      court3,
      event1,
      facility1,
      facility2,
      facility3,
      facility4,
      hero,
      logo,
      member1,
      member2,
      partner,
      submitMember,
      titlePartner,
      CAMANI_LogoWord_500x,
      PBC_by_LBC,
    ];
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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

export default App;
