import Image from "next/image";
import HeroSection from "./component/HeroSection"
import CyclicImage from "./component/CyclicImage";
import ButtonSection from "./component/ButtomSection";
import Footer from './component/Footer'
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CyclicImage/>
      <ButtonSection/>
      <Footer/>
    </div>
  );
}
