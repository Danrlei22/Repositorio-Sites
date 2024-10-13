import './NavBar.module.css';
import '../pages/Sobre.jsx';
import '../styles/Projects.jsx';
import './SocialMedia.jsx'

function NavBar() {
    return (
        <nav> 
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
}

export default NavBar