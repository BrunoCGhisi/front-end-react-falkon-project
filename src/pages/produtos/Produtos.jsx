import { useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import {
    CustomDataGrid,
    TitleSection,
} from "../../shared/components/page";

import {
    FormDialog,
} from "../../shared/components";

import ProdutoForm from "./ProdutoForm";

import { getColumns } from "./columns";

import { useProdutos } from "../../shared/hooks";

export default function Produtos() {

    const {
        produtos,
        loading,
        createProduto,
        updateProduto,
        deleteProduto,
    } = useProdutos();

    const [openModal, setOpenModal] =
        useState(false);

    const [selectedProduct, setSelectedProduct] =
        useState(null);

    const emptyProduct = {
        nome: "",
        categoria: "",
        preco: "",
        estoque: "",
        nota: "",
    };

    const [formData, setFormData] =
        useState(emptyProduct);

    const handleCreate = () => {

        setSelectedProduct(null);

        setFormData(emptyProduct);

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedProduct(row);

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete = async (row) => {

        const confirmed =
            window.confirm(
                `Deseja excluir ${row.nome}?`
            );

        if (!confirmed) {
            return;
        }

        await deleteProduto(row.id);
    };

    const handleSave = async () => {

        if (selectedProduct) {

            await updateProduto(
                selectedProduct.id,
                formData
            );

        } else {

            await createProduto(
                formData
            );
        }

        setOpenModal(false);
    };

    const columns = getColumns(
        handleEdit,
        handleDelete
    );

    return (
        <>
            <TitleSection
                titleText="Produtos"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={handleCreate}
            />

            <CustomDataGrid
                rows={produtos}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedProduct
                        ? "Editar Produto"
                        : "Novo Produto"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >
                <ProdutoForm
                    formData={formData}
                    setFormData={setFormData}
                />
            </FormDialog>
        </>
    );
}