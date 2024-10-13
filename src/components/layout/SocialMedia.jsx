import Styles from './SocialMedia.module.css'

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function SocialMedia() {
    return (
        <section className={Styles.sociaisMedia}>
            <a href="#" id="contato"></a>
            <h2>Meus contatos</h2>

            <div className={Styles.icons}>
                <ul className={Styles.listIcons}>
                    <li>
                        <a href="https://github.com/Danrlei22" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={Styles.iconGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/danrlei-vieira-85b335231/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={Styles.iconLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/danrlei.vieira/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={Styles.iconInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5545999638658" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className={Styles.iconWhatssapp} />
                        </a>
                    </li>
                </ul>

                <div className={Styles.containerEmail}>
                    <MdEmail className={Styles.iconEmail} />
                    <p>E-mail:danrlei_vieira@hotmail.com</p>
                </div>

            </div>
        </section >
    )
}

export default SocialMedia