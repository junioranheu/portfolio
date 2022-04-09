import React, { Fragment, useEffect, useRef } from 'react';
import Sidebar from '../components/outros/sidebar';
import Secao1 from '../components/secoes/secao1';
import Secao2 from '../components/secoes/secao2';
import Secao3 from '../components/secoes/secao3';
import Secao4 from '../components/secoes/secao4';
import Secao5 from '../components/secoes/secao5';
import Secao6 from '../components/secoes/secao6';
import Secao7 from '../components/secoes/secao7';

export default function Index() {

    useEffect(() => {
        document.title = 'Portifólio — @junioranheu';
    }, []);

    const refSessao1 = useRef(null);
    const refSessao2 = useRef(null);
    const refSessao3 = useRef(null);
    const refSessao4 = useRef(null);
    const refSessao5 = useRef(null);
    const refSessao7 = useRef(null);

    function handleScroll(ref) {
        ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }

    return (
        <Fragment>
            <Sidebar />

            {/* Olá */}
            <Secao1
                refSessao1={refSessao1}
                refSessao2={refSessao2}
                refSessao3={refSessao3}
                refSessao4={refSessao4}
                refSessao5={refSessao5}
                refSessao7={refSessao7}
                handleScroll={handleScroll}
                corFundo={'#FDEF52'}
                corTexto={'#181818'}
            />

            {/* Sobre */}
            <Secao2 refSessao2={refSessao2} corFundo={'#FFF'} corTexto={'#181818'} />

            {/* Skills */}
            <Secao3 refSessao3={refSessao3} corFundo={'#DE5F5F'} corTexto={'#FFF'} />

            {/* Carreira */}
            <Secao4 refSessao4={refSessao4} corFundo={'#343436'} corTexto={'#FFF'} />

            {/* Projeto 1 */}
            <Secao5 refSessao5={refSessao5} corFundo={'#3A99D8'} corTexto={'#FFF'} />

            {/* Projeto 2 */}
            <Secao6 corFundo={'orange'} corTexto={'#FFF'} />

            {/* Contato */}
            <Secao7 refSessao7={refSessao7} corFundo={'#FFF'} />
        </Fragment >
    )
}
