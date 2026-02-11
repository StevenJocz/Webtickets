import { useNavigate } from 'react-router-dom';
import styles from '../style/crearTicket.module.css'
import ImagenInicio from '../../../shared/ImagenInicio';
import Boton from '../../../shared/Boton';
import { RutasPrivadas } from '../../../models/routes';
import FormularioConsultar from '../components/FormularioConsultar';

const ConsultarTicket = () => {
    const navigacion = useNavigate();
    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Consultar Ticket</h1>
                <p className={styles.layout__texto}>
                    En esta sección puedes revisar el estado de tus solicitudes o reportes anteriores con el código del ticket.
                </p>
                <div className={styles.layout__opciones}>
                    <FormularioConsultar />
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

export default ConsultarTicket