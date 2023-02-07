
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDribbble, faBehance, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero =()=>{
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["FREELANCER", "TEACHER", "WEB DEVELOPER", "DESIGNER"],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop:true
        });
    
        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    return(
        <div className="HeroSection">
            <div className="socialMedia">
                <ul>
                    <li>Follow Me On:</li>
                    <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                </ul>
            </div>

            <div className="HeroTeks">
                <h3>Hallo There! I am NDEV</h3>
                <span ref={el}></span>

            </div>

            <div className="mouseAnimation">
                <div className="mouse"></div>
            </div>
        </div>
    )
}

export default Hero
