import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Usuario } from '../../models/usuario';

// Estado vacío
export const EstadoUsuarioVacio: Usuario = {
    idUsuario: '',
    nombre: '',
    correo: '',
    rol: '',
    activo: false,
    token: ''
};


const usuarioGuardado = localStorage.getItem("usuario");

const estadoInicial: Usuario = usuarioGuardado
    ? JSON.parse(usuarioGuardado)
    : EstadoUsuarioVacio;

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: estadoInicial,
    reducers: {


        crearUsuario: (_estado, action: PayloadAction<Usuario>) => {
            localStorage.setItem("usuario", JSON.stringify(action.payload));
            return action.payload;
        },

        actualizarUsuario: (estado, action: PayloadAction<Partial<Usuario>>) => {
            const resultado = { ...estado, ...action.payload };
            localStorage.setItem("usuario", JSON.stringify(resultado));
            return resultado;
        },

        resetearUsuario: () => {
            localStorage.removeItem("usuario");
            return EstadoUsuarioVacio;
        }
    }
});

export const { crearUsuario, actualizarUsuario, resetearUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;
