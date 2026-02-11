import { useState } from "react";
import { crearTicket } from "../service/servicio.ticket";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/configuracionEstado";
import type { FormikHelpers } from "formik";
import type { CrearTicket } from "../../../models/ticket";


export const useCrearTicket = () => {

    const [cargando, setCargando] = useState(false);
    const [msg, setMsg] = useState('');
    const usuario = useSelector((state: RootState) => state.usuario);

    const handleCrearTicket = async (values: CrearTicket,  { resetForm }: FormikHelpers<CrearTicket>) => {
        setCargando(true);
        setMsg('');

        try {
            const payload = {
                ...values,
                usuarioId: usuario.idUsuario
            };
            
            const response = await crearTicket(payload, usuario.token);

            if (!response.data.respuesta) {
                setMsg(response.data.mensaje);
                return;
            }
            setMsg(response.data.mensaje + " Número de ticket: " + response.data.ticket);
            resetForm();

        } catch (error) {
            console.error("Error crear ticket:", error);
            setMsg("Error al conectar con el servidor");
        }
        finally {
            setCargando(false);
        }
    };

    return {
        cargando,
        msg,
        handleCrearTicket
    };
};
