import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home";
import Login from "../features/auth/page/Login";
import { Provider } from 'react-redux';
import configuracionEstado from "../redux/configuracionEstado";
import Autenticacion from "../guards/Autenticacion";
import { RutasPublicas , RutasPrivadas} from "../models/routes";

export default function Router() {
    return (
        <div className="Layout">
            <Provider store={configuracionEstado}>
                <Routes>
                    <Route path={RutasPublicas.home} element={<Home />} />
                    <Route path={RutasPublicas.login} element={<Login />} />
                    <Route path={RutasPublicas.crearTicket} element={<h1>Crear Ticket</h1>} />
                    <Route path={RutasPublicas.consultarTicket} element={<h1>Consultar Ticket</h1>} />
                    <Route element={<Autenticacion validacionPrivada={true} />}>
                        <Route path={RutasPrivadas.admin} element={<h1>Admin</h1>} />
                        <Route path={RutasPrivadas.cliente} element={<h1>Cliente</h1>} />
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}