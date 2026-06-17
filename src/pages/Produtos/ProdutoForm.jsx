import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {Grid} from "@mui/material";

export default function ProdutoForm({
                                        formData,
                                        setFormData,
                                    }) {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
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
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
            </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
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
                </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
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
                    </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
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
                        </Grid>
        </Grid>

    );
}