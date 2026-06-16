import Typography from "@mui/material/Typography";

import {CustomDataGrid} from "../shared/components/page";
import { useApi } from "../shared/hooks/useApi";
import Box from "@mui/material/Box";

export default function Produtos() {

    const { data, loading } = useApi("produtos");

    const columns = [
        {
            field: "nome",
            headerName: "Produto",
            flex: 5
        },
        {
            field: "categoria",
            headerName: "Categoria",
            flex: 2
        },
        {
            field: "preco",
            headerName: "Preço",
            flex: 2

        },
        {
            field: "estoque",
            headerName: "Estoque",
            flex: 2,
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
            maxWidth: 300
        },
    ];

    return (
        <>
            <Box sx={{ ml: 3, width: "90%" }}>
                <Typography variant="h4" mb={2}>
                    Produtos
                </Typography>

                <CustomDataGrid
                    rows={data}
                    columns={columns}
                    loading={loading}

                />
            </Box>
        </>
    );
}