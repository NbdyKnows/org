import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) =>{
    const {registrarColaborador, crearEquipo } = props;

    //*-----------------------REGISTRAR COLABORADOR-----------------------
    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    
    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envío")
        let datosAEnviar = {
            nombre,
            puesto: puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    //*-------------------------------------------------------------------

    //*-----------------------REGISTRAR EQUIPO----------------------------
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo: titulo,colorPrimario: color})
    }
    //*-------------------------------------------------------------------


    return <section className="formulario">

        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                encabezado="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                encabezado="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                encabezado="Foto" 
                placeholder="Ingresar enlace de foto"
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                encabezado="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                encabezado="Color" 
                placeholder="Ingresar el color en Hexadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario;