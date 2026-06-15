import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";

import {Cupons, Pedidos, Produtos, Usuarios} from "../pages/index.js";

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