import React, { useContext, useEffect, useState } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao7 from '../../utils/traducao/conteudoSessao7';

export default function Sessao7({ refSessao7, corFundo, corTexto }) {
    const mensagemBr = ['um ótimo domingo', 'uma ótima segunda-feira', 'uma ótima terça-feira', 'uma ótima quarta-feira', 'uma ótima quinta-feira', 'uma ótima sexta-feira', 'um ótimo sábado'];
    const mensagemEn = ['a great sunday', 'a great monday', 'a great tuesday', 'a great wednesday', 'a great thursday', 'a great friday', 'a great saturday'];
    const mensagemEsp = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const [diaDaSemana, setDiaDaSemana] = useState(null);

    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao7(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao7(idiomaContext));

        // Definir a mensagem do dia da semana;
        if (idiomaContext === '1' || idiomaContext === 1 || idiomaContext === null) {
            setDiaDaSemana(mensagemBr[new Date().getDay()]);
        } else if (idiomaContext === '2' || idiomaContext === 2) {
            setDiaDaSemana(mensagemEn[new Date().getDay()]);
        } else if (idiomaContext === '3' || idiomaContext === 3) {
            setDiaDaSemana(mensagemEsp[new Date().getDay()]);
        }
    }, [idiomaContext]);

    return (
        <section className={Styles.section} ref={refSessao7} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre} ><span>#6</span>{conteudo[0]}</a>
                    <h2>
                        {conteudo[1]}<br />
                        <span className={Styles.spanContatoEmail}><a href='mailto:junioranheu@gmail.com'>junioranheu@gmail.com</a></span>
                    </h2>

                    <Fade triggerOnce cascade>
                        <p className={Styles.lead}>
                            {conteudo[2]}<br />
                            <a href='https://www.linkedin.com/in/junioranheu/' target='_blank' rel='noreferrer'>Linkedin</a>,&nbsp;
                            <a href='https://www.instagram.com/junioranheu/' target='_blank' rel='noreferrer'>Instagram</a>{conteudo[3]}&nbsp;
                            <a href='https://www.facebook.com/JuniorAnheu' target='_blank' rel='noreferrer'>Facebook</a>.
                        </p>

                        <br />
                        <p className={Styles.lead}>
                            {conteudo[4]} <a href='https://github.com/junioranheu' target='_blank' rel='noreferrer'>Github</a>.
                        </p>

                        <br />
                        <p className={Styles.lead}>
                            {conteudo[5]}
                        </p>
                    </Fade>

                    <Bounce triggerOnce direction='right' delay={3000}>
                        <p className={Styles.lead}>
                            {conteudo[6]} {diaDaSemana} :)
                        </p>
                    </Bounce>
                </div>
            </div>
        </section>
    )
}
