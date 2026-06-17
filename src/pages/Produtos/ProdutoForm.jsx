import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function ProdutoForm({
                                        formData,
                                        setFormData,
                                    }) {
    const handleChange = (field) => (event) => {
        setFormData((old) => ({
            ...old,
            [field]: event.target.value,
        }));
    };

    return (
        <Stack spacing={2} mt={1}>
            <TextField
                label="Nome"
                fullWidth
                value={formData.nome}
                onChange={handleChange("nome")}
            />

            <TextField
                label="Categoria"
                fullWidth
                value={formData.categoria}
                onChange={handleChange("categoria")}
            />

            <TextField
                label="Preço"
                type="number"
                fullWidth
                value={formData.preco}
                onChange={handleChange("preco")}
            />

            <TextField
                label="Estoque"
                type="number"
                fullWidth
                value={formData.estoque}
                onChange={handleChange("estoque")}
            />

            <TextField
                label="Nota"
                type="number"
                fullWidth
                value={formData.nota}
                onChange={handleChange("nota")}
            />
        </Stack>
    );
}