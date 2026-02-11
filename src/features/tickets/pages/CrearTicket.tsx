import { useNavigate } from 'react-router-dom';
import Boton from '../../../shared/Boton'
import ImagenInicio from '../../../shared/ImagenInicio'
import styles from '../style/crearTicket.module.css'
import { RutasPrivadas } from '../../../models/routes';
import Formulario from '../components/Formulario';

const CrearTicket = () => {
    const navigacion = useNavigate();
    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Crear Ticket</h1>
                <p className={styles.layout__texto}>
                    En esta sección puedes registrar una nueva solicitud o reportar una incidencia.
                    Proporciona la información necesaria para que nuestro equipo pueda atender tu caso de manera rápida y eficiente.
                </p>
                <div className={styles.layout__opciones}>
                    <Formulario/>
                </div>
                <Boton
                        texto="Volver"
                        tipo="primary"
                        onClick={() => navigacion(RutasPrivadas.home)}
                    />
            </div>
        </div>
    )
}

export default CrearTicket