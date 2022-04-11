function conteudoFooter(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'feito por junioranheu'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'made by junioranheu'
        ];
    } else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'hecho por junioranheu'
        ];
    }

    return conteudo;
}

export default conteudoFooter;