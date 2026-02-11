import type { Respuesta } from "../../../models/respuesta";
import type { CrearTicket } from "../../../models/ticket";
import { api } from "../../../service/api.service";

export const crearTicket = async (ticket: CrearTicket, token:string) => {
    return await api.crear<Respuesta>(
        "tickets",
        ticket,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const consultarTickets = async () => {
    try {
        const response = await api.obtener<any>(`tickets`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo tickets:", error);
        throw error;
    }
};

export const consultarTicketCodigo = async (codigo: string) => {
    try {
        const response = await api.obtener<any>(`tickets/${codigo}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo ticket:", error);
        throw error;
    }
};

