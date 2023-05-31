import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    //*Método map -> arreglo.map( (x, index) => {
    //*    return <option> </option>
    //*})

    //*FORMA DE USAR EL MAP CUANDO RETORNAS MÁS DE UN ELEMENTO
    /*
    <select name="" id="">
            { equipos.map( (equipo, index) =>{
                return <option key={index}>{equipo}</option>
            } ) }
    </select>
    */ 

    const manejarCambio = (e) =>{
        //console.log("Cambia:",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista_opciones">

        <label htmlFor="">Equipos</label>

        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden> Seleccionar equipo </option>
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}> {equipo} </option>)}
        </select>

    </div>
}

export default ListaOpciones;