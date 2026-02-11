import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../redux/configuracionEstado";
import { RutasPrivadas, RutasPublicas } from "../models/routes";

interface Props {
  validacionPrivada: boolean;
}

export const Autenticacion = ({ validacionPrivada }: Props) => {
  const usuario = useSelector((state: RootState) => state.usuario);

  const estaAutenticado = !!usuario.idUsuario && !!usuario.token;

  if (!estaAutenticado) {
    return <Navigate to={RutasPublicas.login} replace />;
  }

  return validacionPrivada ? <Outlet /> : <Navigate to={RutasPrivadas.home} replace />;
};

export default Autenticacion;