import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function ProdutoForm({
                                        formData,
                                        setFormData,
                                    }) {
    return (
        <Stack spacing={2} mt={1}>

            <TextField
                label="Nome"
                value={formData.nome}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        nome: e.target.value,
                    })
                }
            />

            <TextField
                label="Categoria"
                value={formData.categoria}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        categoria:
                        e.target.value,
                    })
                }
            />

            <TextField
                label="Preço"
                value={formData.preco}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        preco:
                        e.target.value,
                    })
                }
            />

            <TextField
                label="Estoque"
                value={formData.estoque}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        estoque:
                        e.target.value,
                    })
                }
            />

            <TextField
                label="Nota"
                value={formData.nota}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        nota:
                        e.target.value,
                    })
                }
            />

        </Stack>
    );
}