import type { FormikHelpers } from "formik";
import { useState } from "react";
import type { ConsultarTicketCodigo } from "../../../models/ticket";
import { consultarTicketCodigo } from "../service/servicio.ticket";

export const useConsultarTicketCodigo = () => {

    const [cargando, setCargando] = useState(false);
    const [msg, setMsg] = useState('');
    const [ticket, setTicket] = useState<any | null>(null); 

    const handleConsultarTicket = async (
        values: ConsultarTicketCodigo,
        { resetForm }: FormikHelpers<ConsultarTicketCodigo>
    ) => {
        setCargando(true);
        setMsg('');

        try {
            const response = await consultarTicketCodigo(values.codigo);

            if (!response) {
                setMsg("Ticket no encontrado");
                return;
            }

            setTicket(response); 
            resetForm();

        } catch (error) {
            console.error("Error consultar ticket:", error);
            setMsg("Error consultando el ticket");
        }
        finally {
            setCargando(false);
        }
    };

    return {
        cargando,
        msg,
        ticket, 
        handleConsultarTicket
    };
};
