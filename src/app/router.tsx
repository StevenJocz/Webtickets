import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home";
import Login from "../features/auth/page/Login";
export default function Router() {
    return (
        <div className="Layout">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<h1>Admin</h1>} />
                <Route path="/cliente" element={<h1>Cliente</h1>} />
            </Routes>
        </div>
    );
}