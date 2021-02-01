import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/tittle-message.component'
import About from './pages/about/about.component'
import Skills from "./pages/skills/skills.component"
import ProjectTimeline from "./components/projects-timeline/projects-timeline.component"


import './App.css';
import context from "react-bootstrap/esm/AccordionContext";
import { Timeline } from "@merc/react-timeline";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>   
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />

      <div> 
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background2.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

    
      <div className="container"> 
          <Container className="container-box rounded">
            <Fade duration={500}>
              <Skills />
            </Fade>
          </Container>
      </div>

      {/*Prohject timeline*/}
      <div className="container"> 
          <Container className="container-box rounded">
            <Fade duration={500}>
              <ProjectTimeline />
            </Fade>
          </Container>
      </div>
     
      
    </div>
  );
}

export default App;
