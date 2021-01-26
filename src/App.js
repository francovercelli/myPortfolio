import React from "react";

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/tittle-message.component'
import './App.css';

const App = () => {
  return (
    <div>
      
        
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
    </div>
  );
}

export default App;
