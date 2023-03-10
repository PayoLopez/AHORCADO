import React from "react";
import { useNavigate } from "react-router-dom";

const Portada = ()=>{
    const navigate=useNavigate();
    return(
    <>
        <h1>BIENVENIDO</h1>
        <button className="boton" onClick={()=>navigate("/Juego")} >Jugar</button>
    </>
    );
}

export default Portada;