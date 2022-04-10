function conteudoSessao4(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Carreira',
            'Minha carreira'
        ];
    } else {
        conteudo = [
            'Career',
            'My career'
        ];
    }

    return conteudo;
}

export default conteudoSessao4;