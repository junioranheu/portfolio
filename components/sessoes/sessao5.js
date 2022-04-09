import React, { useState } from 'react';
import Spotify1 from '../../static/images/projetos/spotify1.webp';
import Spotify2 from '../../static/images/projetos/spotify2.webp';
import Spotify3 from '../../static/images/projetos/spotify3.webp';
import Styles from '../../styles/index.module.css';
import Carousel from '../outros/carousel';

export default function Sessao5({ refSessao5, corFundo, corTexto }) {
    const [urlProjeto] = useState('https://spotify-anheu.vercel.app/');

    return (
        <section className={Styles.section} ref={refSessao5} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 100 C 20 0 50 0 100 100 Z'></path>
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>Projetos pessoais</a>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>Projeto #1 — Spotify</a>
                    </h2>

                    <p className={Styles.lead}>
                        Um clone do Spotify.<br />
                        Desenvolvido para praticar React.js, Next.js, .NET, API Rest, JWT token, e etc.<br />
                    </p>

                    <Carousel imgs={[Spotify1, Spotify2, Spotify3]} url={urlProjeto} />
                </div>
            </div>
        </section >
    )
}
