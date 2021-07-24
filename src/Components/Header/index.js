import './style.css';
import Logo from '../../img/logo.png'

function Header({black}) {
    return <header className={black}>
        <img src={Logo} className="logo" alt="Logo" />
        <nav className="navArea">
            <a href='/' className = "link">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" className="imageProfile" alt="Profile" />
            </a>
        </nav>

    </header>

}

export default Header;