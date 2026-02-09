import styles from '../styles/imagenInicio.module.css'
import imagen from '../assets/img/imgan.svg';
import imagenDos from '../assets/img/borde.svg';

const ImagenInicio = () => {
    return (
        <div  className={styles.imagenInicio__info}>
            <img src={imagen} alt="imagen" />
            <img src={imagenDos} alt="imagenDos" className={styles.imagenInicio__image_border} />
        </div>
    )
}

export default ImagenInicio