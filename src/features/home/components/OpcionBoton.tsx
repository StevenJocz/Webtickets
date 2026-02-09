import styles  from '../style/Home.module.css'

interface Props {
  icono: string;
  texto: string;
  onClick?: () => void;
}

const OpcionBoton = ({ icono, texto, onClick }: Props) => {


  return (
    <div className={styles.opciones__boton} onClick={onClick}>
      <span className="material-symbols-outlined">
        {icono}
      </span>
      <p>{texto}</p>
    </div>
  );
};

export default OpcionBoton;