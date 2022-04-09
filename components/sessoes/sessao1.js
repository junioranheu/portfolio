import React from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';
import Styles from '../../styles/index.module.css';

export default function Sessao1(props) {
    return (
        <section className={Styles.sessao1} ref={props.refSessao1} style={{ backgroundColor: props.corFundo, color: props.corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <Bounce triggerOnce direction='up'>
                        <a className={Styles.pre}><span>#1</span>Olá</a>
                    </Bounce>

                    <Bounce triggerOnce direction='left'>
                        <h1 className={Styles.semMargem}>Olá :)</h1>
                    </Bounce>

                    <Bounce triggerOnce direction='right'>
                        <h3 className={Styles.margemTopPequena}>Seja bem-vind@ ao meu portfólio</h3>
                    </Bounce>

                    <Fade triggerOnce cascade>
                        <ul className={Styles.anchornav}>
                            <li><span onClick={() => props.handleScroll(props.refSessao2)}>Sobre <span>#2 Quem sou eu?</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao3)}>Skills <span>#2 Minhas habilidades</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao4)}>Carreira <span>#3 Minha carreira</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao5)}>Projetos <span>#4 Projetos pessoais</span></span></li>
                            <li><span onClick={() => props.handleScroll(props.refSessao7)}>Contato <span>#5 Me escreva uma mensagem</span></span></li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
