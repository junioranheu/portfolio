import React, { Fragment, useContext, useEffect, useRef } from 'react';
import Sessao1 from '../components/sessoes/sessao1';
import Sessao2 from '../components/sessoes/sessao2';
import Sessao3 from '../components/sessoes/sessao3';
import Sessao4 from '../components/sessoes/sessao4';
import Sessao5 from '../components/sessoes/sessao5';
import Sessao6 from '../components/sessoes/sessao6';
import Sessao7 from '../components/sessoes/sessao7';
import SessaoFinal from '../components/sessoes/sessaoFinal';
import { IdiomaContext } from '../utils/context/idiomaContext';

export default function Index() {
    const [idiomaContext] = useContext(IdiomaContext);

    useEffect(() => {
        if (idiomaContext === '1' || idiomaContext === 1 || idiomaContext === null) {
            document.title = 'Portfólio — @junioranheu';
        } else if (idiomaContext === '2' || idiomaContext === 2) {
            document.title = 'Portfolio — @junioranheu';
        } else if (idiomaContext === '3' || idiomaContext === 3) {
            document.title = 'Portafolio — @junioranheu';
        }
    }, [idiomaContext]);

    const refSessao1 = useRef(null);
    const refSessao2 = useRef(null);
    const refSessao3 = useRef(null);
    const refSessao4 = useRef(null);
    const refSessao5 = useRef(null);
    const refSessaoFinal = useRef(null);

    function handleScroll(ref) {
        ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    return (
        <Fragment>
            {/* Olá */}
            <Sessao1
                refSessao1={refSessao1}
                refSessao2={refSessao2}
                refSessao3={refSessao3}
                refSessao4={refSessao4}
                refSessao5={refSessao5}
                refSessaoFinal={refSessaoFinal}
                handleScroll={handleScroll}
                corFundo={'#FDEF52'}
                corTexto={'#181818'}
            />

            {/* Sobre */}
            <Sessao2 refSessao2={refSessao2} corFundo={'#FFF'} corTexto={'#181818'} />

            {/* Skills */}
            <Sessao3 refSessao3={refSessao3} corFundo={'#DE5F5F'} corTexto={'#FFF'} />

            {/* Carreira */}
            <Sessao4 refSessao4={refSessao4} corFundo={'#343436'} corTexto={'#FFF'} />

            {/* Projeto 1 */}
            <Sessao5 refSessao5={refSessao5} corFundo={'#1EB955'} corTexto={'#FFF'} />

            {/* Projeto 2 */}
            <Sessao6 corFundo={'#C873E6'} corTexto={'#FFF'} />

            {/* Projeto 3 */}
            <Sessao7 corFundo={'#9900F0'} corTexto={'#FFF'} />

            {/* Contato - Sessão final */}
            <SessaoFinal refSessaoFinal={refSessaoFinal} corFundo={'#FFF'} />
        </Fragment >
    )
}
