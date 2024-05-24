import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="scroll-container" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
          <div className="sticky top-0 z-1" style={{scrollSnapAlign: 'start'}}>
            <Hero />
          </div>
          <div className="relative z-2" style={{ scrollSnapAlign: 'start' }}>
            <About />
          </div>
          <div style={{ scrollSnapAlign: 'start' }}>
            <Experience />
          </div>
          <div style={{ scrollSnapAlign: 'start' }}>
            <Tech />
          </div>
          <div style={{ scrollSnapAlign: 'start' }}>
            <Works />
          </div>
          <div style={{ scrollSnapAlign: 'start' }}>
            <Feedbacks />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App