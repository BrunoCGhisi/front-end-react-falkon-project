import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";

import Produtos from "../pages/Produtos.jsx";
import Pedidos from "../pages/Pedidos.jsx";
import Cupons from "../pages/Cupons.jsx";
import Usuarios from "../pages/Usuarios.jsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <DrawerMenu>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/cupons" element={<Cupons />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                </Routes>
            </DrawerMenu>
        </BrowserRouter>
    );
};