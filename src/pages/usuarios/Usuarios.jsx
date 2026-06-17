import { useApi } from "../../shared/hooks/useApi";

import { CustomDataGrid } from "../../shared/components/page";

import { columns } from "./columns";
import {TitleText} from "../../shared/components/index.js";

export default function Usuarios() {

    const {
        data,
        loading,
    } = useApi("usuarios");

    return (
        <>
            <TitleText
                titleText="Usuários"
                sx={{mb: 2,}}
            />

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}