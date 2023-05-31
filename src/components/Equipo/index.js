import './Equipo.css'
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //*Destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos;    
    const { colaboradores,eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>
        { 
        colaboradores.length > 0 && //*Esto es para condicionar si aparece un equipo si es que tiene elementos
            <section className="equipo" style={obj}> 
                <input 
                className='color' 
                type='color' 
                value={colorPrimario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}>
                
                
                </input>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario = {colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>  
            </section>
        }
    </>
}

export default Equipo;