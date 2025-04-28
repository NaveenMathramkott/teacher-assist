import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
