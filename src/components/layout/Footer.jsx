import React from 'react';

import Styles from './Footer.module.css';

import { FaCopyright } from 'react-icons/fa';

function Footer() {

    return (
        <footer>
            <p>Meu portfólio particular.</p>
            <p><FaCopyright className={Styles.copyright} /> Criador por Danrlei <span>2024</span>.</p>
        </footer>
    )
}

export default Footer