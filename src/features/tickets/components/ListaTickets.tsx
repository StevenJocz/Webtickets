import { useEffect } from "react";
import { useConsultarTickets } from "../hook/useConsultarTickets";
import styles from "../style/crearTicket.module.css";

const ListaTickets = () => {
    const { tickets, msg, handleConsultarTickets } = useConsultarTickets();

    useEffect(() => {
        handleConsultarTickets();
    }, []);

    return (
        <div className={styles.contenedor_lista_tickets}>
            {msg && <p>{msg}</p>}

            {tickets.map(ticket => (
                <div key={ticket.idTicket} className={styles.div_ticket}>
                    <h3>🎫 Ticket {ticket.codigo}</h3>
                    <p><b>Área:</b> {ticket.areaId}</p>
                    <p><b>Estado:</b> {ticket.estadoId}</p>
                    <p><b>Prioridad:</b> {ticket.prioridadId}</p>
                    <p><b>Fecha creación:</b> {new Date(ticket.fechaCreacion).toLocaleString()}</p>
                    <p><b>Fecha actualización:</b> {new Date(ticket.fechaActualizacion).toLocaleString()}</p>
                    <p><b>Título:</b> {ticket.titulo}</p>
                    <p><b>Descripción:</b> {ticket.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default ListaTickets;
