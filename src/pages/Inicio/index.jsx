import Banner from '../../components/Banner';
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import React, { useEffect, useState } from "react";
import styles from './Inicio.module.css'

export default function Inicio(){
    const url = 'https://my-json-server.typicode.com/caioarodrigues/cinetag-api/videos';
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setVideos)
    }, []);

    return (
        <React.Fragment>
            <Banner imagem='home'/>
            <Titulo>
                Um lugar seguro para guardar seus videos e filmes!
            </Titulo>
            <section className={styles.container}>
                {videos.map(video =>
                    <Card {...video} key={video.id}/>)}
            </section>
        </React.Fragment>
    )
}