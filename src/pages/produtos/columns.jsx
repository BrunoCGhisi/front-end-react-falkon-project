import { GridActions } from "../../shared/components";

export const getColumns =
    (
        handleEdit,
        handleDelete
    ) => [

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
                        <span
                            style={{
                                color: "red",
                            }}
                        >
                        {params.value}
                    </span>
                    );
                }

                if (params.value <= 3) {
                    return (
                        <span
                            style={{
                                color: "orange",
                            }}
                        >
                        {params.value}
                    </span>
                    );
                }

                return params.value;
            },
        },

        {
            field: "nota",
            headerName: "Nota",
            flex: 1,
            minWidth: 80,
        },

        {
            field: "actions",
            headerName: "Ações",
            width: 120,
            sortable: false,
            filterable: false,
            headerAlign: "center",
            align: "center",

            renderCell: (params) => (
                <GridActions
                    row={params.row}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ),
        },
    ];