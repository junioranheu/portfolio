function conteudoFooter(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'feito por junioranheu'
        ];
    } else {
        conteudo = [
            'made by junioranheu'
        ];
    }

    return conteudo;
}

export default conteudoFooter;