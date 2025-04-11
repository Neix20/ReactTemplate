
import { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";

import { useForm, useFormDataLs } from "@hooks";
import { BpDataTable, UserLayout } from "@components";

import { Models } from "@config";

const tblOption = {
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowSelection: true,
    initialState: {
        "columnPinning": {
            "left": ["mrt-row-expand", "mrt-row-select"],
            "right": ["mrt-row-actions"]
        }
    },
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTablePaperProps: { sx: { height: "100%", width: "100%" } },
    muiTableContainerProps: { sx: { height: "80%" } },
    muiBottomToolbarProps: { sx: { height: 80 } },
    renderTopToolbarCustomActions: ({ row, table }) => (<></>),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (<></>),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (<></>),
    renderRowActions: ({ row, table }) => (<></>)
}

const template = {
    basic: {
        key: "basic",
        field: [
            {
                name: "name",
                type: "text"
            },
            {
                name: "quantity",
                type: "int"
            }
        ]
    }
}

function Index(props) {

    const { field } = template.basic;

    const { register, control, handleSubmit, reset, formState: { errors, isDirty } } = useForm({});

    const { fields: data, append, update, remove } = useFieldArray({ control, name: "basic" });

    const addUser = ({ table, row, values }) => {
        append(values);
        table.setCreatingRow(null);
    }

    const updateUser = ({ table, row, values }) => {
        update(row.index, values);
        table.setEditingRow(null);
    }

    const deleteUser = ({ row }) => {
        remove(row.index);
    }

    const onDebug = () => {
        console.log(data);
    }

    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ mt: 1 }}>
            <BpDataTable idx={"basic"}
                data={data}
                field={field}
                enableRowAction={true}
                enableTopAction={true}
                enableDefaultAdd={true}
                enableDefaultUpdate={true}
                onAdd={addUser}
                onUpdate={updateUser}
                onDelete={deleteUser} 
            />
            <Button variant={"contained"} onClick={onDebug}>Debug</Button>
        </Grid2>
    )
}

export default Index;
