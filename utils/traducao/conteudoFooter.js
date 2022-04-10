function conteudoFooter(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Feito por junioranheu'
        ];
    } else {
        conteudo = [
            'Made by junioranheu'
        ];
    }

    return conteudo;
}

export default conteudoFooter;