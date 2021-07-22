import './style.css';
import Logo from '../../img/logo.png'

function Header() {
    return <div className="headerArea">
        <img src={Logo} className="logo" alt="Logo" />
        <nav className="navArea">
            <a href='/' className = "link">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" className="imageProfile" alt="Profile" />
            </a>
        </nav>

    </div>

}

export default Header;