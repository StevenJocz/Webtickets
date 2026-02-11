import { Field, ErrorMessage } from "formik";
import styles from "../styles/selectFormik.module.css";

interface OpcionSelect {
    valor: number | string;
    texto: string;
}

interface PropsSelectFormik {
    label: string;
    name: string;
    opciones: OpcionSelect[];
    placeholder?: string;
    deshabilitado?: boolean;
}

const SelectFormik = ({
    label,
    name,
    opciones,
    placeholder = "Seleccione una opción",
    deshabilitado = false
}: PropsSelectFormik) => {
    return (
        <div className={styles.div__input}>
            <label className={styles.div__label}>{label}</label>

            <Field name={name}>
                {({ field, form }: any) => (
                    <select
                        {...field}
                        disabled={deshabilitado}
                        onChange={(e) => {
                            const valor = e.target.value;

                            // 👇 evita el clásico error string -> number
                            const valorParseado = isNaN(Number(valor))
                                ? valor
                                : Number(valor);

                            form.setFieldValue(name, valorParseado);
                        }}
                    >
                        <option value="">{placeholder}</option>

                        {opciones.map((opcion) => (
                            <option key={opcion.valor} value={opcion.valor}>
                                {opcion.texto}
                            </option>
                        ))}
                    </select>
                )}
            </Field>

            <ErrorMessage name={name} component="div" className={styles.div__input__error} />
        </div>
    );
};

export default SelectFormik;