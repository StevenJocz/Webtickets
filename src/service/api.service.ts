import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { servicio } from '../models/servicio';

const URL_API = servicio.api;

export const api = {

    solicitud: async <T>(
        metodo: string,
        ruta: string,
        datos?: any,
        configuracion?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        const url = `${URL_API}/${ruta}`;

        try {
            return await axios.request<T>({
                method: metodo,
                url,
                data: datos,
                ...configuracion
            });
        } catch (error) {
            throw error;
        }
    },


    obtener: async <T>(
        ruta: string,
        parametros?: any,
        configuracion?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        const url = `${URL_API}/${ruta}`;
        const queryParams = new URLSearchParams(parametros).toString();
        const urlFinal = queryParams ? `${url}?${queryParams}` : url;

        try {
            return await axios.get<T>(urlFinal, configuracion);
        } catch (error) {
            throw error;
        }
    },

    crear: async <T>(
        ruta: string,
        datos?: any,
        configuracion?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> =>
        api.solicitud<T>('post', ruta, datos, configuracion),

    actualizar: async <T>(
        ruta: string,
        datos?: any,
        configuracion?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> =>
        api.solicitud<T>('put', ruta, datos, configuracion),

    eliminar: async <T>(
        ruta: string,
        configuracion?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> =>
        api.solicitud<T>('delete', ruta, undefined, configuracion)
};
