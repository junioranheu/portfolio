import React, { useState } from 'react';
import Styles from '../../styles/index.module.css';

export default function Sessao7({ refSessao7, corFundo, corTexto }) {
    const mensagem = ['um bom domingo', 'uma boa segunda-feira', 'uma boa terça-feira', 'uma boa quarta-feira', 'uma boa quinta-feira', 'uma boa sexta-feira', 'um bom sábado'];
    const [diaDaSemana] = useState(mensagem[new Date().getDay()]);

    return (
        <section className={Styles.section} ref={refSessao7} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre} ><span>#5</span>Entre em contato comigo</a>
                    <h2>
                        Para trabalhos, me envie um e-mail em:<br />
                        <span><a href='mailto:junioranheu@gmail.com'>junioranheu@gmail.com</a></span>
                    </h2>

                    <p className={Styles.lead}>
                        Outros links:
                        &nbsp;<a href='https://github.com/junioranheu' target='_blank' rel='noreferrer'>Github</a>,
                        &nbsp;<a href='https://www.linkedin.com/in/junioranheu/' target='_blank' rel='noreferrer'>Linkedin</a> e
                        &nbsp;<a href='https://www.facebook.com/JuniorAnheu' target='_blank' rel='noreferrer'>Facebook</a>.
                    </p>

                    <br />
                    <p className={Styles.lead}>
                        Obrigado por chegar até aqui.<br />Tenha {diaDaSemana} :)
                    </p>
                </div>
            </div>
        </section>
    )
}
