import { Formik, Form, type FormikValues } from 'formik';
import InputFormik from '../../../shared/InputFormik';
import { useNavigate } from 'react-router-dom';
import Boton from '../../../shared/Boton';
import { useEffect, useState } from 'react';
import { login } from '../hook/servicio.auth';
import { useDispatch, useSelector } from 'react-redux';
import { crearUsuario } from '../../../redux/estado/Usuario';
import type { RootState } from '../../../redux/configuracionEstado';


interface LoginValores {
    correo: string;
    contraseña: string;
}

const LoginFormulario = () => {
    const dispatch = useDispatch();
    const navigacion = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const usuario = useSelector((state: RootState) => state.usuario);

    useEffect(() => {
        if (usuario.idUsuario && usuario.token) {
            navigate("/admin");
        }
    }, [usuario, navigate]);

    const handleIniciar = async (values: FormikValues) => {
        setCargando(true);

        try {
            const response = await login(values.correo, values.contraseña);
            console.log("Respuesta del login:", response);
            if (!response.data.respuesta) {
                setMsg("Usuario o contraseña incorrectos");
                return;
            }

            const usuario = response.data.datos;
            const token = response.data.token;

            dispatch(
                crearUsuario({
                    ...usuario,
                    token,
                })
            );
            dispatch(crearUsuario({ ...usuario, token }));
            navigate('/admin');

        } catch (error) {
            console.error("Error login:", error);
            setMsg("Error al conectar con el servidor");
        } finally {
            setCargando(false);
        }
    };

    const validar = (values: LoginValores) => {
        const errors: Partial<LoginValores> = {};
        if (!values.correo) {
            errors.correo = 'Rellena este campo obligatorio.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
            errors.correo = 'Correo inválido';
        }
        if (!values.contraseña) {
            errors.contraseña = 'Rellena este campo obligatorio.';
        }
        return errors;
    };

    return (
        <Formik<LoginValores>
            initialValues={{
                correo: '',
                contraseña: '',
            }}
            validate={validar}
            onSubmit={handleIniciar}
        >
            {({ isSubmitting }) => (
                <Form>

                    <InputFormik
                        label='Correo'
                        name="correo"
                        type="email"
                        placeholder="Introduce tu correo electrónico"
                    />

                    <InputFormik
                        label='contraseña'
                        name="contraseña"
                        type="password"
                        placeholder="Introduce tu contraseña"
                    />
                    <p>{msg}</p>
                    <Boton
                        texto="Iniciar sesión"
                        tipo="danger"
                        isSubmitting={isSubmitting}
                        cargando={cargando}
                    />
                    <Boton
                        texto="Volver"
                        tipo="primary"
                        onClick={() => navigacion("/")}
                    />

                </Form>
            )}
        </Formik>
    );
};

export default LoginFormulario;
