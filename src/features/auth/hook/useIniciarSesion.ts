import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/servicio.auth';
import { useDispatch, useSelector } from 'react-redux';
import { crearUsuario } from '../../../redux/estado/Usuario';
import type { RootState } from '../../../redux/configuracionEstado';
import { RutasPrivadas } from '../../../models/routes';

interface LoginValores {
    correo: string;
    contraseña: string;
}

export const useIniciarSesion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cargando, setCargando] = useState(false);
    const [msg, setMsg] = useState('');

    const usuario = useSelector((state: RootState) => state.usuario);

    useEffect(() => {
        if (usuario.idUsuario && usuario.token) {
            navigate(RutasPrivadas.home);
        }
    }, [usuario, navigate]);

    const handleIniciar = async (values: LoginValores) => {
        setCargando(true);
        setMsg('');

        try {
            const response = await login(values.correo, values.contraseña);

            if (!response.data.respuesta) {
                setMsg("Usuario o contraseña incorrectos");
                return;
            }

            const usuario = response.data.datos;
            const token = response.data.token;

            dispatch(crearUsuario({ ...usuario, token }));

            navigate(RutasPrivadas.home);

        } catch {
            setMsg("Error al conectar con el servidor");
        } finally {
            setCargando(false);
        }
    };

    return {
        cargando,
        msg,
        handleIniciar,
    };
};
