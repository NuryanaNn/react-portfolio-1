import Service1 from '../assets/service1.png'
import Service2 from '../assets/service2.png'
import Service3 from '../assets/service3.png'


const Service =()=>{
    return(
        <div className="ServiceSection">
            <div className="title">
                <h3>Service</h3>
            </div>

            <div className="ServiceContent">
                <div className="card">
                    <img src={Service1} alt="" />
                    <h3>Branding</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veritatis repellat, ipsam excepturi ipsum dignissimos.</p>
                </div>
                <div className="card">
                <img src={Service2} alt="" />
                    <h3>Movies</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veritatis repellat, ipsam excepturi ipsum dignissimos.</p>
                </div>
                <div className="card">
                <img src={Service3} alt="" />
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veritatis repellat, ipsam excepturi ipsum dignissimos.</p>
                </div>
            </div>
        </div>
    )
}

export default Service