function conteudoSessao2(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Sobre',
            'Me chamo Junior.',
            (new Date().getFullYear() - 1997) + ' anos.',
            'Dev .NET fullstack.',
            'Lorena, São Paulo.',
            'Brasil.',
            'Iniciei minha carreira como dev em 2017. Atualmente trabalho no IPPLAN — Instituto de Pesquisa e Planejamento de São José dos Campos.',
            'Adoro programar e, também, despertar o gosto para a programação em outras pessoas.',
            'Veja todos meus projetos em meu <a href="https://github.com/junioranheu" target="_blank" rel="noreferrer" className={Styles.link}>Github</a>, e o meu perfil no <a href="https://www.linkedin.com/in/junioranheu/" target="_blank" rel="noreferrer" className={Styles.link}>Linkedin</a>.'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'About me',
            'I\'m Junior.',
            (new Date().getFullYear() - 1997) + ' yo.',
            '.NET fullstack dev.',
            'Lorena, São Paulo.',
            'Brazil.',
            'I started my career as a dev in 2017. I currently work at IPPLAN - Research and Planning Institute of São José dos Campos.',
            'I love coding and encouraging other people to code as well.',
            'Check out all my personal projects on my <a href="https://github.com/junioranheu" target="_blank" rel="noreferrer" className={Styles.link}>Github</a> page, and see also my <a href="https://www.linkedin.com/in/junioranheu/" target="_blank" rel="noreferrer" className={Styles.link}>Linkedin</a> profile.'
        ];
    } else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Sobre mi',
            'Soy Junior.',
            (new Date().getFullYear() - 1997) + ' años.',
            'Desarrollador fullstack .NET',
            'Lorena, São Paulo.',
            'Brasil.',
            'Empecé mi carrera como desarrolador en 2017. Actualmente trabajo en IPPLAN - Instituto de Investigación y Planificación de São José dos Campos.',
            'Me encanta programar y también incentivar a otras personas a hacerlo.',
            'Echale un vistazo a todos mis proyectos en mi <a href="https://github.com/junioranheu" target="_blank" rel="noreferrer" className={Styles.link}>Github</a>, y en mi perfil de <a href="https://www.linkedin.com/in/junioranheu/" target="_blank" rel="noreferrer" className={Styles.link}>Linkedin</a>.'
        ];
    }

    return conteudo;
}

export default conteudoSessao2;
