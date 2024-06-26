import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio/">
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="sticky top-0 z-1">
          <Hero />
        </div>
        <div className="">
          <div className="relative z-2">
            <About />
            <Experience />
            <Tech />
            <Works />
          </div>
        </div>
        <div className="relative z-0 h-full">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
