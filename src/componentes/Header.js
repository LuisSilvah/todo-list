import { MagnifyingGlass, Bell } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png"
import "../styles/header.css"


function Header() {

    function Logout () {
        localStorage.removeItem("usuario")
        localStorage.removeItem("autenticado")

        window.location.reload()
    }

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <span className="task">task</span>
                </div>

                <div className="search">
                    <MagnifyingGlass size={16} color="#ffffffaf" />
                    <input type="text" placeholder="Search everything" className="input" />
                </div>
            </div>

            <div className="menu">
                <Link to="/projects" className="menu-item">Projects</Link>

                <Link to="/settings" className="menu-item">Settings</Link>

                <div className="menu-item logout" onClick={Logout}>Logout</div>
            </div>

            <div className="sino">
                <Bell size={26} weight="fill" />
            </div>
        </header>
    );
}

export default Header;
