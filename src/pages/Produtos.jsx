import {CustomDataGrid, TitleSection} from "../shared/components/page";
import { useApi } from "../shared/hooks/useApi";
import Box from "@mui/material/Box";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function Produtos() {

    const { data, loading } = useApi("produtos");

    const columns = [
        {
            field: "nome",
            headerName: "Produto",
            flex: 5,
            minWidth: 250,

        },
        {
            field: "categoria",
            headerName: "Categoria",
            flex: 3,
            minWidth: 120,

        },
        {
            field: "preco",
            headerName: "Preço",
            flex: 2,
            minWidth: 100,


        },
        {
            field: "estoque",
            headerName: "Estoque",
            flex: 2,
            minWidth: 100,

            renderCell: (params) => {

                if (params.value === 0) {
                    return (
                        <span style={{ color: "red" }}>
                    {params.value}
                </span>
                    );
                }

                if (params.value <= 3) {
                    return (
                        <span style={{ color: "orange" }}>
                    {params.value}
                </span>
                    );
                }

                return params.value;
            }
        },
        {
            field: "nota",
            headerName: "Nota",
            flex: 1,
            minWidth: 80,
        },
    ];

    return (
        <>
            <TitleSection
                titleText="Produtos"
                buttonText="Adicionar"
                IconName={AddCircleOutlineOutlinedIcon}
                onButtonClick={() => {
                    alert("Novo produto");
                }}
            />

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}