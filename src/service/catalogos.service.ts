import type { Area, Prioridad } from "../models/catalogos";
import { api } from "./api.service";

export const GetAreas = async (): Promise<Area[]> => {
    try {
        const response = await api.obtener<Area[]>('catalogos/areas');
        return response.data;
    } catch (error) {
        console.error("Error obteniendo áreas:", error);
        throw error;
    }
};


export const GetPrioridades = async (): Promise<Prioridad[]> => {
    try {
        const response = await api.obtener<Prioridad[]>('catalogos/prioridades');
        return response.data;
    } catch (error) {
        console.error("Error obteniendo prioridades:", error);
        throw error;
    }
};