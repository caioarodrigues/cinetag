import styles from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { json, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NaoEncontrada from 'pages/NaoEncontrada';

export default function Player(){
    const url = 'https://my-json-server.typicode.com/caioarodrigues/cinetag-api/videos';
    const parametro = useParams();
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(url + `?id=${parametro.id}`)
        .then(res => res.json())
        .then(dados => setVideo(...dados));
    }, []);

    if(!video)
        return ( <NaoEncontrada/> );
        
    return(
        <>
            <Banner imagem='player'/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    );
}