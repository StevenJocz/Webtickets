import ImagenInicio from "../../../shared/ImagenInicio"
import LoginFormulario from "../components/LoginForm"
import styles from '../style/login.module.css'

const Login = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.layout__info}>
                <ImagenInicio />
            </div>
            <div className={styles.layout__opcion}>
                <h1 className={styles.layout__titulo}>Iniciar Sesion</h1>
                <p className={styles.layout__texto}>
                    Ingresa tus credenciales para acceder al sistema y gestionar tus tickets de manera rápida, segura y organizada.
                </p>
                <div className={styles.layout__opciones}>
                    <LoginFormulario />
                </div>
            </div>
        </div>
    )
}

export default Login