import styles from '../style/crearTicket.module.css'
import { useNavigate } from 'react-router-dom';
import Boton from '../../../shared/Boton';
import { RutasPrivadas } from '../../../models/routes';
import ImagenInicio from '../../../shared/ImagenInicio';
import ListaTickets from '../components/ListaTickets';

const VerTickets = () => {
  const navigacion = useNavigate();
    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Tickets</h1>
                <p className={styles.layout__texto}>
                    En esta sección puedes revisar todos los tickets generados.
                </p>
                <div className={styles.layout__opciones}>
                    <ListaTickets />
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

export default VerTickets