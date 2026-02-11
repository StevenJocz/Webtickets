import { Form, Formik } from 'formik'
import InputFormik from '../../../shared/InputFormik'
import Boton from '../../../shared/Boton'
import type { ConsultarTicketCodigo } from '../../../models/ticket'
import { useConsultarTicketCodigo } from '../hook/useConsultarTicketCodigo'
import { validarCodigo } from '../hook/Validacion'
import styles from '../style/crearTicket.module.css'


const FormularioConsultar = () => {
    const { cargando, ticket, handleConsultarTicket } = useConsultarTicketCodigo();

    return (
        <div>
            <Formik<ConsultarTicketCodigo>
                initialValues={{
                    codigo: '',
                }}
                validate={validarCodigo}
                onSubmit={handleConsultarTicket}
            >
                {({ isSubmitting }) => (
                    <Form>

                        <InputFormik
                            label='Codigo del Ticket'
                            name="codigo"
                            type="text"
                            placeholder="Introduce el codigo del ticket"
                        />

                        <Boton
                            texto="Consultar Ticket"
                            tipo="danger"
                            isSubmitting={isSubmitting}
                            cargando={cargando}
                        />

                    </Form>
                )}
            </Formik>

            {ticket && (
                <div className={styles.div_ticket}>
                    <h3>Ticket encontrado</h3>
                    <p><b>Código:</b> {ticket.codigo}</p>
                    <p><b>Área:</b> {ticket.area}</p>
                    <p><b>Estado:</b> {ticket.estado}</p>
                    <p><b>Fecha actualizacion:</b> {new Date(ticket.fechaActualizacion).toLocaleString()}</p>
                    <p><b>Prioridad:</b> {ticket.prioridad}</p>
                    <p><b>Fecha creación:</b> {new Date(ticket.fechaCreacion).toLocaleString()}</p>
                    <p><b>Título:</b> {ticket.titulo}</p>
                    <p><b>Descripción:</b> {ticket.descripcion}</p>
                </div>
            )}
        </div>

    )
}
export default FormularioConsultar