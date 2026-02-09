import { Field, ErrorMessage } from 'formik';
import style from '../styles/InputFormik.module.css'

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
}

const InputFormik = ({
    label,
    name,
    type = "text",
    placeholder
}: Props) => {
    return (
        <div className={style.div__input}>
            <label className={style.div__label} >
                {label}
            </label>

            <Field
                name={name}
                type={type}
                placeholder={placeholder}
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