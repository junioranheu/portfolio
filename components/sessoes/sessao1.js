import React, { useEffect, useState } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import Styles from '../../styles/index.module.css';
import Conteudo from '../../utils/traducao/sessao1';

export default function Sessao1(props) {
    const [conteudo] = useState(Conteudo());

    useEffect(() => {
        console.log(conteudo);
    }, [conteudo]);

    return (
        <section className={Styles.sessao1} ref={props.refSessao1} style={{ backgroundColor: props.corFundo, color: props.corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <Bounce triggerOnce direction='up'>
                        <a className={Styles.pre}><span>#1</span>{conteudo[0]}</a>
                    </Bounce>

                    <Bounce triggerOnce direction='left'>
                        <h1 className={Styles.semMargem}>{conteudo[1]}</h1>
                    </Bounce>

                    <Bounce triggerOnce direction='right'>
                        <h3 className={Styles.margemTopPequena}>{conteudo[2]}</h3>
                    </Bounce>

                    <Fade triggerOnce cascade>
                        <ul className={Styles.anchornav}>
                            <li><span onClick={() => props.handleScroll(props.refSessao2)}>{conteudo[3]} <span>{conteudo[4]}</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao3)}>{conteudo[5]} <span>{conteudo[6]}</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao4)}>{conteudo[7]} <span>{conteudo[8]}</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao5)}>{conteudo[9]} <span>{conteudo[10]}</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao7)}>{conteudo[11]} <span>{conteudo[12]}</span></span></li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
