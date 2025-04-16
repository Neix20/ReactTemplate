
import { useState, useEffect, useMemo } from "react";

import { Grid2, Typography, Button, IconButton, Box, Tooltip, Icon, TextField, } from "@mui/material";
import { MRT_Table, MRT_EditActionButtons, MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Add, Edit, Delete } from '@mui/icons-material';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { clsUtility } from "@utility";

// Fix Generate Columns
function generateColumns(field = []) {

    const _arr = [];

    // Factory Method Using Dictionary
    const colDict = {
        "text": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
        }),
        "email": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
        }),
        "password": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            muiEditTextFieldProps: {
                type: "password"
            }
        }),
        "textarea": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name)
        }),
        "int": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            muiEditTextFieldProps: {
                type: "number"
            }
        }),
        "date": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            muiEditTextFieldProps: {
                type: "date"
            }
        }),
        "decimal": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            muiEditTextFieldProps: {
                type: "number",
                slotProps: {
                    input: {
                        inputProps: {
                            step: "0.01"
                        }
                    }
                }
            }
        }),
        "dropdown": ({ name = "", selection = [] }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            editVariant: "select",
            editSelectOptions: selection
        }),
        "file": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            Cell: ({ cell }) => (<></>),
            enableEditing: false
        }),
        "image": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            Cell: ({ cell }) => (
                <img src={cell.getValue()} style={{ width: 40, height: 40 }} />
            ),
            enableEditing: false
        })
    }

    for (const obj of field) {

        const { type = "" } = obj;

        if (type in colDict) {
            const factoryMethod = colDict[type];
            const _obj = factoryMethod(obj);
            _arr.push(_obj);
        }

    }

    return _arr;
}

function AddItemBtn(props) {
    const { table, enableDefaultAdd = false, onClick = null } = props;

    if (!enableDefaultAdd) {
        return (<Box />)
    }

    const _onClick = onClick == null ? () => (table.setCreatingRow(true)) : onClick;

    return (
        <Button variant={"outlined"}
            onClick={_onClick} 
            startIcon={<Add />} >
            New
        </Button>
    )
}

function Index(props) {

    const { idx: key = "", data = [], field = [], hideField = [], fieldOrder = [], } = props;
    const { enableRowAction = false, enableTopAction = false } = props;
    const { enableDefaultAdd = false, enableDefaultUpdate = false } = props;
    const { onBtnAdd = null, onAdd = () => { }, onUpdate = () => { }, onDelete = () => { } } = props; 

    const columns = useMemo(_ => generateColumns(field), [field]);
    const name = clsUtility.capitalize(key);

    // #region Render Functions
    const renderRowActions = ({ table, row, values}) => {

        const onSelectUpdate = ({ table, row, values}) => {
            table.setEditingRow(row);
        }

        const _update = enableDefaultUpdate ? _ => onSelectUpdate({ table, row, values }) : _ => onUpdate({ table, row, values });
        const _delete = _ => onDelete({ row, table });

        return (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title={"Edit"}>
                    <IconButton onClick={_update}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Delete"}>
                    <IconButton onClick={_delete}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box>
        )
    };
    // #endregion

    // #region We Could Make Custom
    const renderCreateModal = ({ table, row, internalEditComponents }) => {
        return (
            <>
                <DialogTitle variant="h3">Create New {name}</DialogTitle>
                <DialogContent>
                    {internalEditComponents}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        )
    }

    const renderUpdateModal = ({ table, row, internalEditComponents }) => (
        <>
            <DialogTitle variant="h3">Update {name}</DialogTitle>
            <DialogContent>
                {internalEditComponents}
            </DialogContent>
            <DialogActions>
                <MRT_EditActionButtons variant="text" table={table} row={row} />
            </DialogActions>
        </>
    )
    // #endregion

    const tblOption = {
        data: data,
        columns: columns,
        createDisplayMode: 'modal', // ('modal', and 'custom' are also available)
        editDisplayMode: 'modal', // ('modal', 'cell', 'table', and 'custom' are also available)
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        enableStickyHeader: true,
        enableStickyFooter: true,
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableGrouping: false,
        enableColumnPinning: true,
        enableFacetedValues: true,
        enableRowSelection: false,
        enableTopToolbar: enableTopAction,
        enableEditing: enableRowAction,
        enableRowActions: enableRowAction,
        renderRowActions: renderRowActions,
        onCreatingRowSave: ({ table, row, values }) => onAdd({ table, row, values }),
        onEditingRowSave: ({ table, row, values }) => onUpdate({ table, row, values }),
        renderCreateRowDialogContent: renderCreateModal,
        renderEditRowDialogContent: renderUpdateModal,
        renderTopToolbarCustomActions: ({ table }) => (<AddItemBtn table={table} enableDefaultAdd={enableDefaultAdd} onClick={onBtnAdd} />),
        initialState: {
            columnOrder: fieldOrder, // Must Be Full, Otherwise Wont Work
            columnVisibility: hideField.reduce((res, item) => { res[item] = false; return res; }, {}),
            columnPinning: {
                left: ["mrt-row-actions"]
            }
        }
    };

    const table = useMaterialReactTable(tblOption);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MaterialReactTable table={table} />
        </LocalizationProvider>
    )
}

export default Index;
