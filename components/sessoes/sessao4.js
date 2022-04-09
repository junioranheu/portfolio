import React from 'react';
import Styles from '../../styles/index.module.css';
import Timeline from '../timeline/timeline';

export default function Sessao4({ refSessao4, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao4} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>Carreira</a>
                    <h2>Minha carreira</h2>

                    <Timeline />
                </div>
            </div>
        </section>
    )
}
