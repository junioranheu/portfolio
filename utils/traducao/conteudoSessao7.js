function conteudoSessao7(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Entre em contato comigo',
            'Para me contatar, envie um e-mail para:',
            'Outros links para contato:',
            ' e',
            'Veja todos meus projetos pessoais em meu ',
            'Obrigado por chegar até aqui.',
            'Tenha '
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Get in touch',
            'Mail me at:',
            'Other links:',
            ', and',
            'Check out all my personal projects: ',
            'Cheers.',
            'Have '
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Ponte en contacto conmigo',
            'Envíame un e-mail para:',
            'Otros links:',
            ' y',
            'Échale un vistazo a mis proyectos personales en mi ',
            '¡Gracias por tu aténcion!',
            'Que tengas un buen '
        ];
    }

    return conteudo;
}

export default conteudoSessao7;