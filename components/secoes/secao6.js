import React from 'react';
import Styles from '../../styles/index.module.css';

export default function Secao6({ corFundo, corTexto }) {
    return (
        <section className={Styles.section} style={{ backgroundColor: corFundo, color: corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <h2>Projeto #2</h2>
                    <p className={Styles.lead}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>

            <svg className={`${Styles.bottom} ${Styles.svgEnfeite}`} xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='100' viewBox='0 0 100 102' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 0 L50 100 L100 0 Z'></path>
            </svg>
        </section>
    )
}
