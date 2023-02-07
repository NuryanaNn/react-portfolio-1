import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Touch =()=>{
    return(
        <div className="getTouch">
            <div className="title">
                <h3>Get In Touch</h3>
            </div>

            <div className="touchContent">
                <div className="cardContact">
                    <h3>Email</h3>
                    <h5>hire.ndev@gmail.com</h5>

                    <h3>Call Me</h3>
                    <h5>087728353986</h5>

                    <h3>Address</h3>
                    <h5>Jl.Raya Wado Malangbong km 2 Sumedang</h5>
                </div>
                <div className="cardEmail">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Emails" />
                    <input type="text" placeholder="Phone" />
                    <textarea name="" placeholder="Your Messages" id="" cols="30" rows="10"></textarea>
                    <button>Send Message <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    )
}

export default Touch