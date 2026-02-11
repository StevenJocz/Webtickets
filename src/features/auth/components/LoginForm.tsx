import { Formik, Form } from 'formik';
import InputFormik from '../../../shared/InputFormik';
import Boton from '../../../shared/Boton';
import { validarLogin } from '../hook/Validacion';
import { useIniciarSesion } from '../hook/useIniciarSesion';


interface LoginValores {
    correo: string;
    contraseña: string;
}
const LoginFormulario = () => {
    const { cargando, msg, handleIniciar } = useIniciarSesion();

    return (
        <Formik<LoginValores>
            initialValues={{
                correo: '',
                contraseña: '',
            }}
            validate={validarLogin}
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
                </Form>
            )}
        </Formik>
    );
};

export default LoginFormulario;
