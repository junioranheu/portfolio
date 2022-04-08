import React from 'react';
import Styles from '../../styles/index.module.css';

export default function Secao5({ refSessao5, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao5} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 100 C 20 0 50 0 100 100 Z'></path>
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>Projetos pessoais</a>
                    <h2>Projeto #1</h2>
                    <p className={Styles.lead}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </section>
    )
}
