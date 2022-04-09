import React, { useState } from 'react';
import Framer1 from '../../static/images/projetos/framer1.webp';
import Framer2 from '../../static/images/projetos/framer2.webp';
import Framer3 from '../../static/images/projetos/framer3.webp';
import Framer4 from '../../static/images/projetos/framer4.webp';
import Framer5 from '../../static/images/projetos/framer5.webp';
import Styles from '../../styles/index.module.css';
import Carousel from '../outros/carousel';

export default function Sessao6({ corFundo, corTexto }) {
    const [urlProjeto] = useState('https://framer-anheu.vercel.app/');

    return (
        <section className={Styles.section} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 0 100 10 0 10' />
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>Projeto #2 — Framer</a>
                    </h2>

                    <p className={Styles.lead}>
                        Clonagem da ferramenta Framer.<br />
                        Desenvolvido para, também, praticar React.js e Next.js.<br />
                        Plataforma com múltiplas páginas, layouts diferentes e 100% responsivo. 🤓
                    </p>

                    <Carousel imgs={[Framer1, Framer2, Framer3, Framer4, Framer5]} url={urlProjeto} />
                </div>
            </div>
        </section>
    )
}
