import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({rows, columns, loading = false,}) {
    return (
        <Box sx={{ height: 600, maxWidth: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                pageSizeOptions={[5, 10, 20]}
                sx={{
                    "& .MuiDataGrid-columnHeader": {
                        color: "primary.main"
                    },

                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: 700,
                    },
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                disableRowSelectionOnClick
            />
        </Box>
    );
}