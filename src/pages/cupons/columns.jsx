export const columns = [
    {
        field: "codigo",
        headerName: "Código",
        flex: 2,
    },
    {
        field: "desconto_porcentagem",
        headerName: "Desconto (%)",
        flex: 1,
    },
    {
        field: "categoria_valida",
        headerName: "Categoria",
        flex: 2,
    },
    {
        field: "ativo",
        headerName: "Ativo",
        flex: 1,

        renderCell: (params) =>
            params.value ? "Sim" : "Não",
    },
];