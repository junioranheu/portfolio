function conteudoSessao4(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Carreira',
            'Minha carreira'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Career',
            'My career'
        ];
    } else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Carrera',
            'Mi carrera'
        ];
    }

    return conteudo;
}

export default conteudoSessao4;