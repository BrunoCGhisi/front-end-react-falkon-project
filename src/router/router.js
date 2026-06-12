import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/DrawerMenu";

import Produtos from "../pages/Produtos";
import Pedidos from "../pages/Pedidos";
import Cupons from "../pages/Cupons";
import Usuarios from "../pages/Usuarios";

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