import { configureStore } from '@reduxjs/toolkit';
import type { Usuario } from '../models/usuario';
import { usuarioSlice } from './estado/Usuario';


export interface RootState {
    usuario: Usuario;
}

export default configureStore<RootState>({
    reducer: {
        usuario: usuarioSlice.reducer
    }
});