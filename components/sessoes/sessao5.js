import Image from 'next/image';
import React from 'react';
import Spotify1 from '../../static/images/projetos/spotify1.webp';
import Styles from '../../styles/index.module.css';

export default function Sessao5({ refSessao5, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao5} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 100 C 20 0 50 0 100 100 Z'></path>
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>Projetos pessoais</a>
                    <h2>Projeto #1 — Spotify</h2>

                    <p className={Styles.lead}>
                        Um clone do Spotify.<br/>
                        Desenvolvido para praticar React.js, Next.js, .NET, API Rest, JWT token, e etc.<br/>
                    </p>

                    <div className={Styles.divImagem}>
                        <Image src={Spotify1} />
                    </div>
                </div>
            </div>
        </section>
    )
}
