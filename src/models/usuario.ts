export interface Usuario {
    idUsuario: string,
    nombre: string,
    correo: string,
    rol: string,
    activo: boolean;
    token: string
};

export interface RespuestaLogin {
  respuesta: string;
  token: string;
  datos: Usuario;
}

