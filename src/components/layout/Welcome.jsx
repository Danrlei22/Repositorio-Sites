import Styles from './Welcome.module.css';

import perfilUtpr from '../../assets/image/perfilUtfpr.jpeg'

import Sobre from '../pages/Sobre';



function Welcome() {
    return (
        <section className={Styles.welcome}>
            <div className={Styles.container}>
                <div className={Styles.left}>
                    <img src={perfilUtpr} alt="Imagem de terno de perfil" />
                </div>

                <div className={Styles.right}>
                    <Sobre />
                </div>
            </div>
        </section >
    );
}

export default Welcome;