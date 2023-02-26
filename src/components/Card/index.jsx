import styles from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import iconeFavoritar from './favoritar.png';
import { useFavoritosContext } from '../../contextos/Favoritos';
import iconeDesfavoritar from './desfavoritar.png';

export default function Card({ id, titulo, capa }){
    const { favorito, adicionarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(el => el.id === id);
    const icone = !isFavorito ? iconeFavoritar : iconeDesfavoritar;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}/>
                <h2>{titulo}</h2>            
            </Link>

            <img src={icone} 
                alt='Favoritar filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa });
                }}
                />
        </div>
    );
}