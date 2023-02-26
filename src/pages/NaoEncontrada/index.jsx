import styles from './NaoEncontrada.module.css';
import React from 'react';

export default function NaoEncontrada(){
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteudo que voce procura nao foi econtrado!</p>
        </section>
    )
}