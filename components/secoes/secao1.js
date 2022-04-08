import React from 'react';
import Styles from '../../styles/index.module.css';

export default function Secao1(props) {
    return (
        <section className={Styles.secao1} ref={props.refSessao1} style={{ backgroundColor: props.corFundo, color: props.corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre} ><span>#1</span>Olá</a>
                    <h2 className={Styles.semMargem}>Olá :)</h2>
                    <h3 className={Styles.margemTopPequena}>Seja bem-vind@ ao meu portfólio</h3>

                    <ul className={Styles.anchornav}>
                        <li><span onClick={() => props.handleScroll(props.refSessao2)}>Sobre <span>#2 Quem sou eu?</span></span></li>
                        <li><span onClick={() => props.handleScroll(props.refSessao3)}>Skills <span>#2 Minhas habilidades</span></span></li>
                        <li><span onClick={() => props.handleScroll(props.refSessao4)}>Carreira <span>#3 Onde trabalhei</span></span></li>
                        <li><span onClick={() => props.handleScroll(props.refSessao5)}>Projetos <span>#4 Projetos pessoais</span></span></li>
                        <li><span onClick={() => props.handleScroll(props.refSessao7)}>Contato <span>#5 Me escreva uma mensagem</span></span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
