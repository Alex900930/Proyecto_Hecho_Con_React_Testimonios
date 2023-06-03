import './imagenes/imagen-cristina.jpeg'
import '../App.css';
import './Testimonios.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

export default function Testimonios(props){
    return (
        <div className="contenedor-principal-testimonio">
            <div className="componente-imagen">
                <img alt="imagen-cristina"
                     src={require(`./imagenes/imagen-${props.imagen}.jpeg`)}
                     className="estilos-imagen"/>
            </div><br />         
            <div className="testimonio-texto-principal">
                <FontAwesomeIcon icon={faQuoteLeft} className='style-icon' />
                    <h4 className='style-titulo'>{props.titulo}</h4>
                    <div className='testimonio-texto'>
                        <p>
                            <em>
                               
                            "{props.parrafo}" 
                            
                            </em>
                        </p>
                    </div>
                    <div className="nombre-clienta">{props.nombre}</div>
                    <div className="fecha-comentario">{props.fecha}</div>
            </div>                   

        </div>
    )
}