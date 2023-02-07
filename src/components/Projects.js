import Portpolio1 from '../assets/port1.png'
import Portpolio2 from '../assets/port2.png'
import Portpolio3 from '../assets/port3.png'
import Portpolio4 from '../assets/port4.png'
import Portpolio5 from '../assets/port5.png'
import Portpolio6 from '../assets/port6.png'

const Projects =()=>{
    return(
        <div className="Project">
            <div className="title">
                <div className="titles">
                    <h3>Project</h3>
                </div>
                <div className="showAll">
                    <button>Show All</button>
                </div>
            </div>

            <div className="ProjectContent">
                <div className="card">
                    <img src={Portpolio1} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Portpolio2} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Portpolio3} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Portpolio4} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Portpolio5} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Portpolio6} alt="" />
                    <div className="teks">
                        <h3>Web Developer</h3>
                        <p>Branding</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects