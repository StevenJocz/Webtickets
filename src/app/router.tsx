import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home";
import Login from "../features/auth/page/Login";
import { Provider } from 'react-redux';
import configuracionEstado from "../redux/configuracionEstado";
import Autenticacion from "../guards/Autenticacion";

export default function Router() {
    return (
        <div className="Layout">
            <Provider store={configuracionEstado}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<Autenticacion validacionPrivada={true} />}>
                        <Route path="/admin" element={<h1>Admin</h1>} />
                        <Route path="/cliente" element={<h1>Cliente</h1>} />
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}