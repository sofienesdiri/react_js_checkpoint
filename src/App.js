import logo from './logo.svg';
import './App.css';
import NavBarBlack from './components/NavBarBlack';
import Formulaire from './components/Forrmulaire';
import AboutUs from './components/AboutUs';
import SlideWeb from './components/SlideWeb';

function App() {
  return (
    <div id="sofiene">
      <NavBarBlack/>
      <AboutUs/>
      <SlideWeb/>
      <Formulaire/>
    </div>
  );
}

export default App;
