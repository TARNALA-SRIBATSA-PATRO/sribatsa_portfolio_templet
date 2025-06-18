
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
