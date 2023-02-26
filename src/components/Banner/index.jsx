import React from "react";
import styles from './Banner.module.css';

const url = '../../../imagens/banner';

export default function Banner({ imagem }){
    return (
        <div className={styles.capa}
            style={{ backgroundImage: `url('${url}-${imagem}.png')` }}>
        </div>
    )
}