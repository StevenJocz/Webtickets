import type { ConsultarTicketCodigo, CrearTicket } from "../../../models/ticket";

export const validar = (values: CrearTicket) => {
    const errors: Partial<Record<keyof CrearTicket, string>> = {};

    if (!values.titulo?.trim()) {
        errors.titulo = 'El título es obligatorio.';
    } else if (values.titulo.length < 5) {
        errors.titulo = 'El título debe tener al menos 5 caracteres.';
    }

    if (!values.descripcion?.trim()) {
        errors.descripcion = 'La descripción es obligatoria.';
    } else if (values.descripcion.length < 10) {
        errors.descripcion = 'La descripción debe tener al menos 10 caracteres.';
    }

    if (!values.areaId || values.areaId <= 0) {
        errors.areaId = 'Debes seleccionar un área.';
    }

    if (!values.prioridadId || values.prioridadId <= 0) {
        errors.prioridadId = 'Debes seleccionar una prioridad.';
    }

    if (!values.estadoId || values.estadoId <= 0) {
        errors.estadoId = 'Debes seleccionar un estado.';
    }
    return errors;
};


export const validarCodigo = (values: ConsultarTicketCodigo) => {
    const errors: Partial<Record<keyof ConsultarTicketCodigo, string>> = {};

    if (!values.codigo?.trim()) {
        errors.codigo = 'El código es obligatorio.';
    } 

    return errors;
};