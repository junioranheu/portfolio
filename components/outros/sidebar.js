import React, { useContext } from 'react';
import Styles from '../../styles/sidebar.module.css';
import { IdiomaContext, IdiomaStorage } from '../../utils/context/idiomaContext';
import BR from '../svg/brasil';
import ESP from '../svg/espanha';
import EUA from '../svg/usa';

export default function Sidebar() {
    const [idiomaContext, setIdiomaContext] = useContext(IdiomaContext);

    function handleIdioma(e) {
        var id = e.currentTarget.id;
        // console.log(id);

        // Salvar no Context e no localStorage;
        IdiomaStorage.set(id);
        setIdiomaContext(id);
    }

    return (
        <nav className={Styles.side}>
            <div className={Styles.side__inner}>
                <div className={Styles.top}>
                    <span className={Styles.bandeira} title='Traduzir para português' id='1' onClick={(e) => handleIdioma(e)}>
                        <BR width='16px' />
                    </span>

                    <span className={Styles.bandeira} title='Translate to english' id='2' onClick={(e) => handleIdioma(e)}>
                        <EUA width='16px' />
                    </span>
        
                    <span className={Styles.bandeira} title='Traducir para español' id='3' onClick={(e) => handleIdioma(e)}>
                        <ESP width='16px' />
                    </span>

                    <span>@junioranheu</span>
                </div>

                <div className={Styles.bottom}>
                    <a href='https://github.com/junioranheu' target='_blank' rel='noreferrer'>Github</a>
                    <a href='https://www.linkedin.com/in/junioranheu/' target='_blank' rel='noreferrer'>Linkedin</a>
                    <a href='https://www.instagram.com/junioranheu/' target='_blank' rel='noreferrer'>Instagram</a>
                    <a href='https://www.facebook.com/JuniorAnheu' target='_blank' rel='noreferrer'>Facebook</a>
                    <a href='mailto:junioranheu@gmail.com'>E-mail</a>
                </div>
            </div>
        </nav>
    )
}
