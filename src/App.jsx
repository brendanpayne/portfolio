import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio/">
      <div className="relative z-0 bg-primary">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="sticky top-0 z-1">
          <Hero />
        </div>
        <main>
          <div className="relative z-2">
            <About />
            <Experience />
            <Tech />
            <Works />
          </div>
          <div className="relative z-0 h-full">
            <Contact />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
