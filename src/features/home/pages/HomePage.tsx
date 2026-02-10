import styles from '../style/Home.module.css'
import OpcionBoton from '../components/OpcionBoton';
import { useNavigate } from 'react-router-dom';
import ImagenInicio from '../../../shared/ImagenInicio';
import { RutasPublicas } from '../../../models/routes';

const HomePage = () => {
    const navigacion = useNavigate();
    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Sistema de tickets</h1>
                <p className={styles.layout__texto}>
                    Bienvenido al Sistema de Tickets. Gestiona solicitudes, reporta incidencias y da seguimiento a cada caso de forma rápida y organizada para ofrecer un mejor servicio
                </p>
                <div className={styles.layout__opciones}>
                    
                    <OpcionBoton
                        icono="add_circle"
                        texto="Crear Ticket"
                        onClick={() => navigacion(RutasPublicas.crearTicket)}
                    />
                    <OpcionBoton
                        icono="search"
                        texto="Consultar Ticket"
                        onClick={() => navigacion(RutasPublicas.consultarTicket)}
                    />
                    <OpcionBoton
                        icono="logout"
                        texto="Iniciar Sesión"
                        onClick={() => navigacion(RutasPublicas.login)}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage