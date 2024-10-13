import Styles from './Projects.module.css';

import custos from '../../assets/image/projetos/custos.PNG'
import cinemania from '../../assets/image/projetos/cinemania.PNG'
import tarefa from '../../assets/image/projetos/tarefa.PNG'
import cursoFeito from '../../assets/image/projetos/cursoFeito.PNG'
import frontEnd from '../../assets/image/projetos/frontEnd.PNG'
import pizzariaZ from '../../assets/image/projetos/pizzariaZ.PNG'
import landingPage from '../../assets/image/projetos/landingPage.PNG'
import landingPage2 from '../../assets/image/projetos/landingPage2.PNG'


function Projects() {

  return (
    <section>
      <a href="#" id="projetos"> </a>
      <div className={Styles.title}>Meus Projetos</div>

      <p className={Styles.descTitle}>Abaixo estão os projetos que desenvolvi. Se quiser saber mais sobre eles, é só clicar no projeto, e você será direcionado para o GitHub.</p>

      <div className={Styles.containerProjects}>

      

        <div className={Styles.project} >
          <a href="https://github.com/Danrlei22/Costs" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={custos} alt="Projeto de custo de uma aplicação" /></a>
          <h2 className={Styles.titleProject}>Custos</h2>
          <p className={Styles.descProject}>React, JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/CineMania" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={cinemania} alt="Projeto descrição de filmes" /></a>
          <h2 className={Styles.titleProject}>CineMania</h2>
          <p className={Styles.descProject}>React, JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Tarefas" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={tarefa} alt="Projeto de tarefas" /></a>
          <h2 className={Styles.titleProject}>Tarefas</h2>
          <p className={Styles.descProject}>React, JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Pizzaria-Z" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={pizzariaZ} alt="Projeto de uma pizzaria" /></a>
          <h2 className={Styles.titleProject}>Pizzaria Z</h2>
          <p className={Styles.descProject}>JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Prot-tipo-curso-front-end" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={cursoFeito} alt="Projeto feito apartir de um curso" /></a>
          <h2 className={Styles.titleProject}>Projeto feito apartir de um curso</h2>
          <p className={Styles.descProject}>JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Informativo-front-end" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={frontEnd} alt="*****" /></a>
          <h2 className={Styles.titleProject}>Material informativo sobre front-end</h2>
          <p className={Styles.descProject}>JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Landing-Page" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={landingPage} alt="Landing Page" /></a>
          <h2 className={Styles.titleProject}>Landing Page</h2>
          <p className={Styles.descProject}>JavaScript, CSS3 e HTML5</p>
        </div>

        <div className={Styles.project} >
        <a href="https://github.com/Danrlei22/Landing-Page2" target="_blank" rel="noopener noreferrer"><img className={Styles.imgProject} src={landingPage2} alt="Landing Page 2" /></a>
          <h2 className={Styles.titleProject}>Landing Page 2</h2>
          <p className={Styles.descProject}>JavaScript, CSS3 e HTML5</p>
        </div>

      </div>
    </section>

  )
}

export default Projects