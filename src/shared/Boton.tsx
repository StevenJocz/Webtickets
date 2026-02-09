import styles from '../styles/boton.module.css'

interface Props {
    cargando?: boolean;
    texto: string;
    isSubmitting?: boolean;
    tipo?: 'primary' | 'danger' | 'pay';
    onClick?: () => void;
}



const Boton = ({
    cargando = false,
    texto,
    isSubmitting = false,
    tipo = 'primary',
    onClick
}: Props) => {

    return (
        <button
            type="submit"
            onClick={onClick}
            disabled={isSubmitting || cargando}
            className={`${styles.button} ${styles[tipo]}`}>
            {cargando ? (
                <div className={styles.spinner__container}>
                    <div className={styles.spinner}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : texto}

        </button>
    )
}

export default Boton