import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Inicio/Favoritos";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/Container";
import FavoritosProvider from "./contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase/PaginaBase";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="favoritos" element={<Favoritos/>}></Route>
                    <Route path=":id" element={<Player/>}></Route> 
                    <Route path="*" element={<NaoEncontrada/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}