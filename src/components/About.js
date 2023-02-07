import User from '../assets/user.png'

const About =() =>{
    return(
        <div className="AboutUs">
            <div className="title">
                <h3>About Us</h3>
            </div>

            <div className="aboutContent">
                <div className="images">
                    <img src={User} alt="" />
                </div>
                <div className="aboutMeContent">
                    <h3>Hello I am Ndev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio nobis sequi similique assumenda laudantium facilis magni quod quas. Itaque.</p>
                    <div className="skills">
                        <ul>
                            <li>Web Developer</li>
                            <li>UI/UX Design</li>
                            <li>Product Design</li>
                        </ul>
                    </div>

                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default About