import { Form, Formik, type FormikValues } from "formik"
import Boton from "../../../shared/Boton"
import InputFormik from "../../../shared/InputFormik"
import { useState } from "react";


const Formulario = () => {
  const [cargando, setCargando] = useState(false);
  const [msg, setMsg] = useState('');

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

  const handleIniciar = async (values: FormikValues) => {
          setCargando(true);
  
          try {
             
  
          } catch (error) {
              console.error("Error crear ticket:", error);
              setMsg("Error al conectar con el servidor");
          } finally {
              setCargando(false);
          }
      };

  return (
    <Formik<LoginValores>
      initialValues={{
        correo: '',
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

          
          <p>{msg}</p>
          <Boton
            texto="Registrar Ticket"
            tipo="danger"
            isSubmitting={isSubmitting}
            cargando={cargando}
          />

        </Form>
      )}
    </Formik>
  )
}

export default Formulario