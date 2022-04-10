function conteudoSessao2(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1) {
        conteudo = [
            'Sobre',
            'Me chamo Junior.',
            'anos.',
            'Dev .NET fullstack.',
            'Lorena, São Paulo.',
            'Brasil.',
            'Iniciei minha carreira como dev em 2017. Atualmente trabalho no IPPLAN — Instituto de Pesquisa e Planejamento de São José dos Campos.',
            'Adoro programar e, também, dispertar o gosto para a programação em outras pessoas.',
            'Veja todos meus projetos em meu <a href="https://github.com/junioranheu" target="_blank" rel="noreferrer" className={Styles.link}>Github</a>, e o meu perfil no <a href="https://www.linkedin.com/in/junioranheu/" target="_blank" rel="noreferrer" className={Styles.link}>Linkedin</a>.'
        ];
    } else {
        conteudo = [
            'About me',
            'I\'m Junior.',
            'yo.',
            '.NET fullstack dev.',
            'Lorena, São Paulo.',
            'Brazil.',
            'I started my career as a dev in 2017. I currently work at IPPLAN - Research and Planning Institute of São José dos Campos.',
            'I love coding and encouraging other people to code as well.',
            'Check out all my personal projects on my <a href="https://github.com/junioranheu" target="_blank" rel="noreferrer" className={Styles.link}>Github</a> page, and see also my <a href="https://www.linkedin.com/in/junioranheu/" target="_blank" rel="noreferrer" className={Styles.link}>Linkedin</a> profile.'
        ];
    }

    return conteudo;
}

export default conteudoSessao2;