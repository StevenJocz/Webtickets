import { Formik, Form, type FormikValues } from 'formik';
import InputFormik from '../../../shared/InputFormik';
import { useNavigate } from 'react-router-dom';
import Boton from '../../../shared/Boton';
import { useState } from 'react';


interface LoginValores {
    correo: string;
    contraseña: string;
}

const LoginFormulario = () => {
    const navigacion = useNavigate();
    const [cargando, setCargando] = useState(false);

    const handleIniciar = async (values: FormikValues) => {
        setCargando(true);
        try {
            console.log(values);
            setCargando(false);
        } catch (error) {
            setCargando(false);
            console.error(error);
        };
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
