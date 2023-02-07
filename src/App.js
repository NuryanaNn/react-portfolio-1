
import './App.css';
import './style/style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import ProjectCount from './components/ProjectCount';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Team from './components/Team';
import Touch from './components/Touch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="Hero">
        <Hero/>
      </div>
      <div className="AboutUs">
        <About/>
      </div>
      <div className="Service">
        <Service/>
      </div>
      <div className="ProjectCount">
        <ProjectCount/>
      </div>
      <div className="Project">
        <Projects/>
      </div>
      <div className="Resume">
        <Resume/>
      </div>
      <div className="OurTeam">
        <Team/>
      </div>
      <div className="getInTouch">
        <Touch/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
