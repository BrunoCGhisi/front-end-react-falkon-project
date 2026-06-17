import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { useApi } from "../../shared/hooks/useApi";

import {
    CustomDataGrid,
    TitleSection,
} from "../../shared/components/page";

import {
    FormDialog,
} from "../../shared/components";

import ProdutoForm from "./ProdutoForm";

import { getColumns } from "./columns.jsx";

import { useProdutos } from "./hooks/useProdutos.js";

export default function Produtos() {
    const { data, loading } =
        useApi("produtos");

    const {
        openModal,
        selectedProduct,
        formData,
        setFormData,
        handleCreate,
        handleEdit,
        handleDelete,
        handleClose,
        handleSave,
    } = useProdutos();

    const columns = getColumns(
        handleEdit,
        handleDelete
    );

    return (
        <>
            <TitleSection
                titleText="Produtos"
                buttonText="Adicionar"
                IconName={AddCircleOutlineOutlinedIcon}
                onButtonClick={handleCreate}
            />

            <CustomDataGrid
                rows={data}
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
                onClose={handleClose}
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