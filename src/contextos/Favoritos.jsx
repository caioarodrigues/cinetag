import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }){
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(el =>
            el.id === novoFavorito.id);

        const novaLista = [ ...favorito ];

        if(!favoritoRepetido){
            novaLista.push(novoFavorito);

            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);

        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    };
}