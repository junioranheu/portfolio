import { createContext, useState } from 'react';

// Criar o contexto para usar no provider abaixo;
export const IdiomaContext = createContext();

// Provider: para 'segurar' uma informação e passar para todos os componentes 'child';
export const IdiomaProvider = props => {
    // https://stackoverflow.com/questions/68189273/referenceerror-localstorage-is-not-defined-using-local-storage-in-nextjs
    if (typeof window !== 'undefined') {
        const [idiomaContext, setIdiomaContext] = useState(localStorage.getItem('idiomaContext') == 'undefined' ? {} : JSON.parse(localStorage.getItem('idiomaContext')));

        return (
            <IdiomaContext.Provider value={[idiomaContext, setIdiomaContext]}>
                {props.children}
            </IdiomaContext.Provider>
        );
    } else {
        return null;
    }
}

// Funções para salvar em localStorage;
export const IdiomaStorage = {
    set(data) {
        // console.log(data);
        let parsedData = JSON.stringify(data);
        localStorage.setItem('idiomaContext', parsedData);
    },

    get() {
        let data = localStorage.getItem('idiomaContext');

        if (!data) {
            return null;
        }

        let dataJson = JSON.parse(data);
        // console.log(dataJson);
        return dataJson;
    },

    delete() {
        localStorage.removeItem('idiomaContext');
    }
}
