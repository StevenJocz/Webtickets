export interface CrearTicket {
    titulo: string;
    descripcion: string;
    usuarioId: string;
    areaId: number;
    prioridadId: number;
    estadoId: number;
}

export interface ConsultarTicketCodigo {
    codigo: string;
}

export interface ConsultarTicket {
    id: string;
    estadoId: number;
}