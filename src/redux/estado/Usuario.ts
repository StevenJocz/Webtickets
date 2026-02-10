import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Usuario } from '../../models/usuario';


export const EstadoUsuarioVacio: Usuario = {
    idUsuario:  '',
    nombre: '',
    correo: '',
    rol:  '',
    activo: false,
    token: ''
};

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: { ...EstadoUsuarioVacio },
    reducers: {
        //Crear usuario (login)
        crearUsuario: (_estado, action: PayloadAction<Usuario>) => {
            return action.payload;
        },

        //  Actualizar usuario
        actualizarUsuario: (estado, action: PayloadAction<Partial<Usuario>>) => {
            const resultado = { ...estado, ...action.payload };
            return resultado;
        },

        //  Cerrar sesión
        resetearUsuario: () => {
            return EstadoUsuarioVacio;
        }
    }
});

export const { crearUsuario, actualizarUsuario, resetearUsuario } =
    usuarioSlice.actions;

export default usuarioSlice.reducer;
