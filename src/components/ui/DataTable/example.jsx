
import { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";

import { useForm, useFormDataLs } from "@hooks";
import { BpForm, BpSubForm, BpDataTable, UserLayout } from "@components";

import Models from "@models";

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

function Index(props) {

    const { key, data, field, addData, updateData, deleteData } = useFormDataLs(Models.Product);

    useEffect(() => {
        console.log(data);
    }, [data.length])

    const preAddUser = ({ table }) => {
        table.setCreatingRow(true);
    }

    const addUser = ({ values, table }) => {
        addData(values);
        table.setCreatingRow(null);
    }

    const updateUser = ({ row, table }) => {
        table.setEditingRow(row);
    }

    const posUpdateUser = ({ values, table }) => {
        updateData(values);
        table.setEditingRow(null);
    }

    const onDelete = ({ row }) => {
        deleteData(row.original.idx);
    }

    return (
        <UserLayout>
            <Grid2 container flexDirection={"column"} spacing={2} sx={{ margin: 2 }}>
                <BpDataTable key={key} data={data} field={field} 
                    enableRowAction={true} enableTopAction={true}
                    onPreAdd={preAddUser}
                    onAdd={addUser}
                    onUpdate={updateUser}
                    onPosUpdate={posUpdateUser}
                    onDelete={onDelete} />
            </Grid2>
        </UserLayout>
    )
}

export default Index;