// FormDialog.jsx

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";

export default function FormDialog({open, title, children, onClose, onSave }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle>
                {title}
            </DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    onClick={onSave}
                >
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
}