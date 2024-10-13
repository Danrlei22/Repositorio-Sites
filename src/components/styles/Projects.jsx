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
      <div className={Styles.containerProjects}>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={custos} alt="Projeto de custo de uma aplicação" />
          <h2 className={Styles.titleProject}>Custos</h2>
          <p className={Styles.descProject}>Um projeto de gestão de custos.</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={cinemania} alt="Projeto descrição de filmes" />
          <h2 className={Styles.titleProject}>CineMania</h2>
          <p className={Styles.descProject}>Um projeto de descrição de filmes.</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={tarefa} alt="Projeto de tarefas" />
          <h2 className={Styles.titleProject}>Tarefas</h2>
          <p className={Styles.descProject}>Um projeto de tarefas.</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={pizzariaZ} alt="***" />
          <h2 className={Styles.titleProject}>****</h2>
          <p className={Styles.descProject}>*****</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={cursoFeito} alt="Projeto feito apartir de um curso" />
          <h2 className={Styles.titleProject}>****</h2>
          <p className={Styles.descProject}>*****</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={frontEnd} alt="*****" />
          <h2 className={Styles.titleProject}>****</h2>
          <p className={Styles.descProject}>*****</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={landingPage} alt="****" />
          <h2 className={Styles.titleProject}>****</h2>
          <p className={Styles.descProject}>*****</p>
        </div>

        <div className={Styles.project} >
          <img className={Styles.imgProject} src={landingPage2} alt="****" />
          <h2 className={Styles.titleProject}>****</h2>
          <p className={Styles.descProject}>*****</p>
        </div>

      </div>
    </section>

  )
}

export default Projects