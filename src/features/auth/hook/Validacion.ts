
interface LoginValores {
    correo: string;
    contraseña: string;
}

export const validarLogin = (values: LoginValores) => {
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
