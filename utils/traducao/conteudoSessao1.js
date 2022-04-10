function conteudoSessao1(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Olá',
            'Olá :)',
            'Seja bem-vind@ ao meu portfólio',
            'Sobre',
            '#2 Quem sou eu?',
            'Skills',
            '#3 Minhas habilidades',
            'Carreira',
            '#4 Minha carreira',
            'Projetos',
            '#5 Projetos pessoais',
            'Contato',
            '#6 Me escreva uma mensagem'
        ];
    } else {
        conteudo = [
            'Hello',
            'Hey there :)',
            'Welcome to my portfolio',
            'About me',
            '#2 Who am I?',
            'Skills',
            '#3 My knowledge',
            'Career',
            '#4 My career',
            'Projects',
            '#5 Personal projects',
            'Get in touch',
            '#6 Message me'
        ];
    }

    return conteudo;
}

export default conteudoSessao1;