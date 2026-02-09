import { Routes, Route } from "react-router-dom";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/admin" element={<h1>Admin</h1>} />
            <Route path="/cliente" element={<h1>Cliente</h1>} />
        </Routes>
    );
}