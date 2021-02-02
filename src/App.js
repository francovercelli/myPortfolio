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
import Contact from "./pages/contact-form/contact-form.component"
import FooterPanel from './components/footer/footer.component'
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";



import './App.css';

const App = () => {
  return (
    <div style={{ position: "relative" }}>   
      <MyNavbar />
      <Particles className="particles particles-box" params={particlesOptions}   /> 
      <MyCarousal />
      <TitleMessage />


    { /*About me */}
      <div> 
        <Parallax  blur={{ min: -30, max: 30 }}  bgImageAlt=""  strength={-200}   >
        <Fade duration={500}>
          <About />
        </Fade>
        </Parallax>
      </div>

     {/* Skills */ }
      <div className="container"> 
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <Skills />
            </Fade>
          </Container>
      </div>

      {/*Prohject timeline*/}
      <div className="container"> 
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <ProjectTimeline />
            </Fade>
          </Container>
      </div>

        {/*Contact*/}
        <div> 
          <Container className="container-box rounded">
            <Fade duration={500}>
            <hr />
              <Contact />
            </Fade>
          </Container>
      </div>

       {/* Footer Component */}
       <FooterPanel />

    </div>
  );
}

export default App;
