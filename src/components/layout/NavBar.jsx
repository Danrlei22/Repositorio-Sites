import './NavBar.module.css';

function NavBar() {
    return (
        <nav> 
            <ul>
                <li><a href="#">Apresentação</a></li>
                <li><a href="#github" id="profile-link" target="_blank">Trabalhos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    );
}

export default NavBar