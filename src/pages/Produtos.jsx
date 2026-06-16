import Typography from "@mui/material/Typography";

import {CustomDataGrid} from "../shared/components/page";
import { useApi } from "../shared/hooks/useApi";

export default function Produtos() {

    const { data, loading } = useApi("produtos");

    const columns = [
        {
            field: "nome",
            headerName: "Produto",
            flex: 1,
            maxWidth: 1000
        },
        {
            field: "categoria",
            headerName: "Categoria",
            width: 150,
            maxWidth: 150,
        },
        {
            field: "preco",
            headerName: "Preço",
            width: 120,
            maxWidth: 120
        },
        {
            field: "estoque",
            headerName: "Estoque",
            width: 150,
            maxWidth:150,
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
            width: 100,
            maxWidth: 150,
        },
    ];

    return (
        <>
            <Typography variant="h4" mb={2}>
                Produtos
            </Typography>

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}