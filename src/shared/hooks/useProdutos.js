// hooks/useProdutos.js

import { useEffect, useState } from "react";
import { produtosService } from "../services/produtosService";

export const useProdutos = () => {

    const [loading, setLoading] = useState(true);

    const [produtos, setProdutos] = useState([]);

    const loadProdutos = async () => {

        setLoading(true);

        const data = await produtosService.getAll();

        setProdutos(data);

        setLoading(false);
    };

    useEffect(() => {
        loadProdutos();
    }, []);

    const createProduto = async (produto) => {

        const novoProduto =
            await produtosService.create(produto);

        setProdutos(old => [
            ...old,
            novoProduto,
        ]);
    };

    const updateProduto = async (id, produto) => {

        const atualizado =
            await produtosService.update(
                id,
                produto
            );

        setProdutos(old =>
            old.map(item =>
                item.id === id
                    ? atualizado
                    : item
            )
        );
    };

    const deleteProduto = async (id) => {

        await produtosService.delete(id);

        setProdutos(old =>
            old.filter(item =>
                item.id !== id
            )
        );
    };

    return {
        produtos,
        loading,
        createProduto,
        updateProduto,
        deleteProduto,
    };
};