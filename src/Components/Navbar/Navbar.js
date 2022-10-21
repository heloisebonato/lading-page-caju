import logoCaju from "../../assets/images/logo-caju.png"
import "./Navbar.css";

function Navbar() {

    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item slam-left">
                    <a href="https://www.caju.com.br/">
                        <img src={logoCaju} alt="logo da caju" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar