import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home";
import Login from "../features/auth/page/Login";
import { Provider } from 'react-redux';
import configuracionEstado from "../redux/configuracionEstado";
import Autenticacion from "../guards/Autenticacion";
import { RutasPublicas, RutasPrivadas } from "../models/routes";
import CrearTicket from "../features/tickets/pages/CrearTicket";
import ConsultarTicket from "../features/tickets/pages/ConsultarTicket";
import VerTickets from "../features/tickets/pages/VerTickets";

export default function Router() {
    return (
        <div className="Layout">
            <Provider store={configuracionEstado}>
                <Routes>
                    <Route path={RutasPublicas.login} element={<Login />} />
                    <Route element={<Autenticacion validacionPrivada={true} />}>
                        <Route path={RutasPrivadas.home} element={<Home />} />
                        <Route path={RutasPrivadas.crearTicket} element={<CrearTicket />} />
                        <Route path={RutasPrivadas.consultarTicket} element={<ConsultarTicket />} />
                        <Route path={RutasPrivadas.verTickets} element={<VerTickets/>} />
                        <Route path={RutasPrivadas.misTickets} element={<h1>Mis Tickets</h1>} />
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}