import { faAngular, faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJsSquare, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faLanguage } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/skills.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import SkillRow from './skillRow';

// https://codepen.io/SAM-O10/pen/JxOeVj
export default function Skills() {
    const [idiomaContext] = useContext(IdiomaContext);

    const [pt, setPt] = useState('');
    const [en, setEn] = useState('');
    const [esp, setEsp] = useState('');
    useEffect(() => {
        // console.log(idiomaContext);
        if (idiomaContext === '1' || idiomaContext === 1 || idiomaContext === null) {
            setPt('Português');
            setEn('Inglês');
            setEsp('Espanhol');
        } else if (idiomaContext === '2' || idiomaContext === 2) {
            setPt('Portuguese');
            setEn('English');
            setEsp('Spanish');
        } else if (idiomaContext === '3' || idiomaContext === 3) {
            setPt('Portugués');
            setEn('Inglés');
            setEsp('Español');
        }
    }, [idiomaContext]);

    return (
        <div className={Styles.browser}>
            <div className={Styles.browserBar}>
                <div className={Styles.options}>
                    <div className={`${Styles.option} ${Styles.close}`} />
                    <div className={`${Styles.option} ${Styles.minimise}`} />
                    <div className={`${Styles.option} ${Styles.expand}`} />
                </div>
            </div>

            <div className={`${Styles.browserContent} ${Styles.addOverflow}`}>
                <SkillRow Icone={faHtml5} item='HTML' qtdEstrelas={7} cor={'#E34F26'} />
                <SkillRow Icone={faCss3Alt} item='CSS' qtdEstrelas={7} cor={'#1B74BA'} />
                <SkillRow Icone={faJsSquare} item='Javascript' qtdEstrelas={8} cor={'#F7E017'} />
                <SkillRow Icone={faCode} item='C#/.NET' qtdEstrelas={9} cor={'#845EC2'} />
                <SkillRow Icone={faCode} item='Pascal/Delphi' qtdEstrelas={3} cor={'#888a75'} />
                <SkillRow Icone={faPhp} item='PHP' qtdEstrelas={2} cor={'#777BB3'} />
                <SkillRow Icone={faPython} item='Python' qtdEstrelas={3} cor={'#FED847'} />

                <SkillRow Icone={faDatabase} item='MySQL' qtdEstrelas={8} cor={'#EA8C10'} />
                <SkillRow Icone={faDatabase} item='SSQL' qtdEstrelas={7} cor={'#304060'} />

                <SkillRow Icone={faReact} item='React.js/Next.js' qtdEstrelas={8} cor={'#61DAFB'} />
                <SkillRow Icone={faAngular} item='Angular' qtdEstrelas={1} cor={'#D82D2F'} />
                <SkillRow Icone={faCode} item='JQuery' qtdEstrelas={8} cor={'#0865A6'} />
                <SkillRow Icone={faBootstrap} item='Bootstrap' qtdEstrelas={6} cor={'#6C10ED'} />
                <SkillRow Icone={faCode} item='Bulma.css' qtdEstrelas={8} cor={'#00D1B2'} />

                <SkillRow Icone={faGitAlt} item='Git' qtdEstrelas={5} cor={'#E94E31'} />

                <SkillRow Icone={faLanguage} item={pt} qtdEstrelas={10} cor={'#58585c'} />
                <SkillRow Icone={faLanguage} item={en} qtdEstrelas={9} cor={'#58585c'} />
                <SkillRow Icone={faLanguage} item={esp} qtdEstrelas={6} cor={'#58585c'} />
            </div>
        </div>
    )
}

