import Logo from '../assets/logo.png'

const Navbar =()=>{
    return(
        <div className="Navbars">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="burger">
                <div className="bars"></div>
                <div className="bars bars2"></div>
                <div className="bars"></div>
            </div>
        </div>

    )
}

export default Navbar