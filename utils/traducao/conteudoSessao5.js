function conteudoSessao5(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Projetos pessoais',
            'Projeto #1 — Spotify',
            'Um clone fiel do Spotify. 🎶',
            'Desenvolvido para praticar React.js, Next.js, .NET no back-end, API Rest, JWT token, e etc.',
            'O mais legal é que o player realmente funciona!'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Personal projects',
            'Project #1 — Spotify',
            'An identical Spotify clone. 🎶',
            'This project has been developed to practice React.js, Next.js, .NET, Rest API, JWT token, etc.',
            'What\'s so great about that is you can really listen to real music!'
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Proyectos personales',
            'Proyecto #1 — Spotify',
            'Clon identico de Spotify. 🎶',
            'Desarrollado para practicar React.js, Next.js, .NET, API Rest, JWT token, etc.',
            '¡Lo más genial es que puedes realmente escuchar las canciones!'
        ];
    }

    return conteudo;
}

export default conteudoSessao5;