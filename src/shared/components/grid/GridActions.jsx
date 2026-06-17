// GridActions.jsx

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
    IconButton,
    Tooltip,
} from "@mui/material";

export default function GridActions({
                                        row,
                                        onEdit,
                                        onDelete,
                                    }) {
    return (
        <>
            <Tooltip title="Editar">
                <IconButton
                    color="primary"
                    onClick={() => onEdit(row)}
                >
                    <EditOutlinedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Excluir">
                <IconButton
                    color="error"
                    onClick={() => onDelete(row)}
                >
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </Tooltip>
        </>
    );
}