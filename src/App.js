import './App.css';
import Nav_bar from './component/NavBar/Nav_bar';
import Intro from './component/Intro/Intro';
import Services from './component/services/services';
import Skils from './component/Experince/skils';
import Works from './component/Work/Work';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonils from './component/Testimonils/Testimonils';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { useState } from 'react';
function App() {
  const [mood,Setmood]=useState(true);
  const change_mood=()=>{
    Setmood(!mood)
    
  }
  return (
    <div className={`App ${mood && 'dark_mood'}`}>
      <Nav_bar change_mood={change_mood} mood={mood}/>
      <Intro/>
      <Services/>
      <Skils/>
      {/* <Works/> */}
      <Portfolio/>
      <Testimonils/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
