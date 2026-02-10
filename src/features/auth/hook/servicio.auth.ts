import type { RespuestaLogin } from "../../../models/usuario";
import { api } from "../../../service/api.service";

export const login = async (correo: string, password: string) => {
    return await api.crear<RespuestaLogin>("usuario/login", {
        correo,
        password,
    });
};