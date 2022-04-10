import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/footer.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoFooter from '../../utils/traducao/conteudoFooter';

export default function Footer() {
    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoFooter(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoFooter(idiomaContext));
    }, [idiomaContext]);

    return (
        <footer className={Styles.footer}>
            <div className={Styles.direita}>
                <span>{conteudo[0]}</span>
            </div>
        </footer>
    )
}