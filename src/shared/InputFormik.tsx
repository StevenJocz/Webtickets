import { Field, ErrorMessage } from 'formik';
import style from '../styles/InputFormik.module.css';

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    esTextarea?: boolean;
    rows?: number;
}

const InputFormik = ({
    label,
    name,
    type = "text",
    placeholder,
    esTextarea = false,
    rows = 4
}: Props) => {
    return (
        <div className={style.div__input}>
            <label htmlFor={name} className={style.div__label}>
                {label}
            </label>

            <Field
                id={name}
                as={esTextarea ? "textarea" : "input"}
                name={name}
                type={!esTextarea ? type : undefined}
                placeholder={placeholder}
                rows={esTextarea ? rows : undefined}
                className={style.input}
            />

            <ErrorMessage
                name={name}
                component="div"
                className={style.div__input__error}
            />
        </div>
    );
};

export default InputFormik;
