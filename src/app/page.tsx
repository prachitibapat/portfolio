import Navbar from "@/components/Navbar";
import BackgroundGradient from "@/components/BackgroundGradient";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundGradient />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
