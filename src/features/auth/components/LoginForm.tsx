import { Formik, Form, type FormikValues } from 'formik';
import InputFormik from '../../../shared/InputFormik';
import { useNavigate } from 'react-router-dom';


interface LoginValores {
    correo: string;
    contraseña: string;
}

const LoginFormulario = () => {
    const navigate = useNavigate();
    const handlePagar = async (values: FormikValues) => {
        try {
            console.log(values);

        } catch (error) {
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
            onSubmit={handlePagar}
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

                    <button type="submit" disabled={isSubmitting}>
                        Enviar
                    </button>
                    <button onClick={() => navigate("/")}>
                        Volver al inicio
                    </button>

                </Form>
            )}
        </Formik>
    );
};

export default LoginFormulario;
