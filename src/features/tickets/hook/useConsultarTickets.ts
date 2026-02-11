
import { useState } from "react";
import { consultarTickets } from "../service/servicio.ticket";

export const useConsultarTickets = () => {

    const [msg, setMsg] = useState('');
    const [tickets, setTickets] = useState<any[]>([]);

    const handleConsultarTickets = async () => {
        setMsg('');

        try {
            const response = await consultarTickets();

            if (!response || response.length === 0) {
                setMsg("No hay tickets");
                return;
            }

            setTickets(response);

        } catch (error) {
            console.error("Error consultar tickets:", error);
            setMsg("Error consultando tickets");
        }
    };

    return {
        msg,
        tickets, 
        handleConsultarTickets
    };
};
