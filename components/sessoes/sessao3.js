import React from 'react';
import Styles from '../../styles/index.module.css';
import Skills from '../skills/skills';

export default function Sessao3({ refSessao3, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao3} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 0 100 10 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#3</span>Skills</a>

                    <h2>Conhecimentos e habilidades.</h2>

                    <p className={Styles.lead}>
                        Com {(new Date().getFullYear() - 2017)} anos de carreira, acredito veemente — e, ainda, humildemente 😎 —
                        que estes sejam os meus níveis atuais nas linguagens, frameworks, etc., abaixo.
                    </p>

                    <Skills />
                </div>
            </div>
        </section>
    )
}
