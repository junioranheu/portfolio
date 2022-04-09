import React, { useState } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import Styles from '../../styles/index.module.css';

export default function Sessao7({ refSessao7, corFundo, corTexto }) {
    const mensagem = ['um ótimo domingo', 'uma ótima segunda-feira', 'uma ótima terça-feira', 'uma ótima quarta-feira', 'uma ótima quinta-feira', 'uma ótima sexta-feira', 'um ótimo sábado'];
    const [diaDaSemana] = useState(mensagem[new Date().getDay()]);

    return (
        <section className={Styles.section} ref={refSessao7} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre} ><span>#6</span>Entre em contato comigo</a>
                    <h2>
                        Para me contatar, envie um e-mail para:<br />
                        <span className={Styles.spanContatoEmail}><a href='mailto:junioranheu@gmail.com'>junioranheu@gmail.com</a></span>
                    </h2>

                    <Fade triggerOnce cascade>
                        <p className={Styles.lead}>
                            Outros links para contato:<br />
                            <a href='https://www.linkedin.com/in/junioranheu/' target='_blank' rel='noreferrer'>Linkedin</a>,&nbsp;
                            <a href='https://www.instagram.com/junioranheu/' target='_blank' rel='noreferrer'>Instagram</a> e&nbsp;
                            <a href='https://www.facebook.com/JuniorAnheu' target='_blank' rel='noreferrer'>Facebook</a>.
                        </p>

                        <br />
                        <p className={Styles.lead}>
                            Veja todos meus projetos pessoais em meu <a href='https://github.com/junioranheu' target='_blank' rel='noreferrer'>Github</a>.
                        </p>

                        <br />
                        <p className={Styles.lead}>
                            Obrigado por chegar até aqui.
                        </p>
                    </Fade>

                    <Bounce triggerOnce direction='right' delay={3000}>
                        <p className={Styles.lead}>
                            Tenha {diaDaSemana} :)
                        </p>
                    </Bounce>
                </div>
            </div>
        </section>
    )
}
