import styles from '../style/Home.module.css'
import OpcionBoton from '../components/OpcionBoton';
import { useNavigate } from 'react-router-dom';
import ImagenInicio from '../../../shared/ImagenInicio';
import { RutasPrivadas, RutasPublicas } from '../../../models/routes';
import type { RootState } from '../../../redux/configuracionEstado';
import { useDispatch, useSelector } from 'react-redux';
import { resetearUsuario } from '../../../redux/estado/Usuario';

const HomePage = () => {
    const navigacion = useNavigate();
    const usuario = useSelector((state: RootState) => state.usuario);
    const esAdmin = usuario?.rol === 'Admin';
    const dispatch = useDispatch();

    const cerrarSesion = () => {
        dispatch(resetearUsuario());
        navigacion(RutasPublicas.login);
    };

    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Sistema de tickets</h1>
                <p className={styles.layout__texto}>
                    Bienvenido <span>{usuario?.nombre}</span> al Sistema de Tickets. Gestiona solicitudes, reporta incidencias y da seguimiento a cada caso de forma rápida y organizada para ofrecer un mejor servicio
                </p>
                <div className={styles.layout__opciones}>
                    {esAdmin && (
                        <OpcionBoton
                            icono="visibility"
                            texto="Ver Tickets"
                            onClick={() => navigacion(RutasPrivadas.verTickets)}
                        />
                    )}

                    {!esAdmin && (
                        <>
                            <OpcionBoton
                                icono="add_circle"
                                texto="Crear Ticket"
                                onClick={() => navigacion(RutasPrivadas.crearTicket)}
                            />
                        </>
                    )}

                    <OpcionBoton
                        icono="search"
                        texto="Consultar Ticket"
                        onClick={() => navigacion(RutasPrivadas.consultarTicket)}
                    />

                    <OpcionBoton
                        icono="logout"
                        texto="Cerrar Sesión"
                        onClick={cerrarSesion}
                    />

                </div>
            </div>
        </div>
    )
}

export default HomePage


