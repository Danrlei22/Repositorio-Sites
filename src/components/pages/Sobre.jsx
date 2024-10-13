import Styles from './Sobre.module.css';

function Sobre() {
    return (
        <div className={Styles.skills}>

            <h1>Olá, eu sou o Danrlei</h1>
            <h2>um desenvolvedor web</h2>

            <p className={Styles.descricao}>Ao longo da minha jornada acadêmica, desenvolvi uma paixão pela programação e pelo desenvolvimento de software. Agora, na reta final do curso, decidi que quero seguir carreira na área de front-end.</p>

            <hr />

            <h3><span>Tenho conhecimento em:</span></h3>
            <p><span>Banco de dados:</span> MySQL, SQL, Oracle.</p>
            <p><span>Controle de versão:</span> Git, GitHub.</p>
            <p><span>Engenharia de software:</span> princípios e boas práticas.</p>
            <p><span>Linguagens de programação</span> (em ordem de uso): HTML, CSS, C, C#, React, JavaScript, Python, Node.js, C++ e PHP.</p>

            <hr />

            <h3><span>Skills:</span></h3>
            <div>
                <ul>
                    <li>Forte vontade de aprender e enfrentar novos desafios.</li>
                    <li>Iniciativa, proatividade e bom relacionamento interpessoal.</li>
                    <li>Espírito de evolução constante, responsabilidade e autonomia nas atividades.</li>
                    <li>Capacidade de se adaptar rapidamente a novas tecnologias e desafios.</li>
                    <li>Habilidade para trabalhar em equipe, colaborando com desenvolvedores, designers e stakeholders.</li>
                </ul>
            </div>
        </div>
    )

}

export default Sobre