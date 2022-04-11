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
    } else if (idioma === '2' || idioma === 2) {
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
    } else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Hola',
            'Hola, ¿que tal? :)',
            'Bienvenido a mi portafolio',
            'Sobre mi',
            '#2 ¿Quien soy?',
            'Skills',
            '#3 Mis conocimientos',
            'Carrera',
            '#4 Mi carrera',
            'Proyectos',
            '#5 Proyectos personales',
            'Contacto',
            '#6 Ponte en contacto conmigo'
        ];
    }

    return conteudo;
}

export default conteudoSessao1;