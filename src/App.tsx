import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToWork from "./components/HowToWork";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowToWork />
        <Services />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
