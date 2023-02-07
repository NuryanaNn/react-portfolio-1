import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDribbble, faBehance, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import Team3 from '../assets/team3.jpg'


const Team =()=>{
    return(
        <div className="OurTeam">
            <div className="title">
                <h3>Our Team</h3>
            </div>

            <div className="TeamContent">
                <div className="card">
                    <img src={Team1} alt="" />
                    <div className="overlay"></div>
                    <div className="sci">
                        <ul>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                        </ul>
                    </div>
                    <div className="nameTeks">
                        <h3>Eliza</h3>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Team2} alt="" />
                    <div className="overlay"></div>
                    <div className="sci">
                        <ul>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                        </ul>
                    </div>
                    <div className="nameTeks">
                        <h3>NDEV</h3>
                        <p>Founder</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Team3} alt="" />
                    <div className="overlay"></div>
                    <div className="sci">
                        <ul>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                        </ul>
                    </div>
                    <div className="nameTeks">
                        <h3>Eliz</h3>
                        <p>Tester</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team