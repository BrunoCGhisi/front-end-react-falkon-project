import { useState } from "react";

export function useProdutos() {
    const [openModal, setOpenModal] = useState(false);

    const [selectedProduct, setSelectedProduct] =
        useState(null);

    const [formData, setFormData] = useState({
        nome: "",
        categoria: "",
        preco: "",
        estoque: "",
        nota: "",
    });

    const handleCreate = () => {
        setSelectedProduct(null);

        setFormData({
            nome: "",
            categoria: "",
            preco: "",
            estoque: "",
            nota: "",
        });

        setOpenModal(true);
    };

    const handleEdit = (produto) => {
        setSelectedProduct(produto);

        setFormData({
            nome: produto.nome ?? "",
            categoria: produto.categoria ?? "",
            preco: produto.preco ?? "",
            estoque: produto.estoque ?? "",
            nota: produto.nota ?? "",
        });

        setOpenModal(true);
    };

    const handleDelete = (produto) => {
        console.log("Excluir", produto);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleSave = () => {
        if (selectedProduct) {
            console.log("Editar", formData);
        } else {
            console.log("Criar", formData);
        }

        setOpenModal(false);
    };

    return {
        openModal,
        selectedProduct,
        formData,
        setFormData,

        handleCreate,
        handleEdit,
        handleDelete,
        handleClose,
        handleSave,
    };
}