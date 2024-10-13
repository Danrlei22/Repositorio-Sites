import Styles from './Projects.module.css';

function Projects(){

    return (
        <section id={Styles.projects}>
          <div className={Styles.projectTile}>
            <a id="github" href="https://github.com/Danrlei22">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQa6i-ud2trSwiWGJJmem5To4toJPz9zHbug&s" alt="Meu github" />
            </a>
          </div>
        </section>

    )
}

export default Projects