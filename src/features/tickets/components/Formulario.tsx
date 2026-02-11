import { Form, Formik } from "formik"
import Boton from "../../../shared/Boton"
import InputFormik from "../../../shared/InputFormik"
import type { CrearTicket } from "../../../models/ticket";
import SelectFormik from "../../../shared/SelectFormik";
import { validar } from "../hook/Validacion";
import { useCrearTicket } from "../hook/useCrearTicket ";
import { useAreas, usePrioridades } from "../hook/useCatalogo";


const Formulario = () => {
  const { cargando, msg, handleCrearTicket } = useCrearTicket();
  const { areas } = useAreas();
  const { prioridades } = usePrioridades();

  return (
    <Formik<CrearTicket>
      initialValues={{
        titulo: '',
        descripcion: '',
        usuarioId: '',
        areaId: 0,
        prioridadId: 0,
        estadoId: 1
      }}
      validate={validar}
      onSubmit={handleCrearTicket}
    >
      {({ isSubmitting }) => (
        <Form>

          <InputFormik
            label='Asunto'
            name="titulo"
            type="text"
            placeholder="Introduce el asunto del ticket"
          />

          <SelectFormik
            label="Área"
            name="areaId"
            placeholder="Seleccione un área"
            opciones={areas.map(a => ({
              valor: a.id,
              texto: a.nombre
            }))}
          />

          <SelectFormik
            label="Prioridad"
            name="prioridadId"
            placeholder="Seleccione una prioridad"
            opciones={prioridades.map(p => ({
              valor: p.id,
              texto: p.nombre
            }))}
          />

          <InputFormik
            label="Descripción"
            name="descripcion"
            placeholder="Describe el problema"
            esTextarea
            rows={3}
          />
          <p className="texto__mesaje">{msg}</p>

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