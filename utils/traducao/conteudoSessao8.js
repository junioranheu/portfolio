function conteudoSessao8(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Projetos pessoais',
            'Projeto #4 — App do Spotify',
            'Um clone fiel do Spotify, agora mobile. 🎶',
            'Desenvolvido para praticar React Native.',
            'Built for both Android quanto iOS!'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Personal projects',
            'Project #4 — Spotify app',
            'An identical Spotify clone, now as an app. 🎶',
            'This project has been developed to practice React Native.',
            'It works on Android and iOS!'
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Proyectos personales',
            'Proyecto #4 — Spotify mobile',
            'Clon identico de Spotify, ahora en version de telefono. 🎶',
            'Desarrollado para practicar React Native.',
            '¡Funciona tanto para Android y para iOS!'
        ];
    }

    return conteudo;
}

export default conteudoSessao8;