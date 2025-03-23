
import { useState, useEffect } from "react";

import { Grid2, Typography, Button, IconButton, Box, Tooltip } from "@mui/material";
import { MRT_Table, MRT_EditActionButtons, MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { clsUtility } from "@utility";
import { GlobalStyles } from "@config";

import { Add } from "@mui/icons-material";

function generateColumns(field = [], style = {}) {

    const _arr = [];

    // Factory Method Using Dictionary
    const colDict = {
        "text": ({ name = "" }) => ({
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
        "date": ({ name = "" }) => ({
            accessorFn: (row) => new Date(row[name]),
            id: name,
            header: clsUtility.capitalize(name),
            filterVariant: 'date',
            filterFn: 'lessThan',
            sortingFn: 'datetime',
            Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
            muiEditTextFieldProps: {
                type: "date"
            }
        }),
        "dropdown": ({ name = "", selection = [] }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            editVariant: "select",
            editSelectOptions: selection
        }),
        "image": ({ name = "" }) => ({
            accessorKey: name,
            header: clsUtility.capitalize(name),
            Cell: ({ cell }) => (
                <img src={cell.getValue()} style={style.tableImg} />
            ),
            enableEditing: false
        })
    }

    for (const obj of field) {

        const { type = "" } = obj;

        const factoryMethod = colDict[type];
        const _obj = factoryMethod(obj);

        _arr.push(_obj);
    }

    return _arr;
}

function AddItemBtn(props) {
    const { table, onPreAdd = null } = props;

    if (onPreAdd == null) {
        return (<Box />)
    }

    return (
        <Button variant={"outlined"} 
            startIcon={<Add />}
            onClick={_ => onPreAdd({ table })}>
            New
        </Button>
    )
}

function Index(props) {

    const { data = [], field = [], hideField = [], fieldOrder = [], } = props;
    const { enableRowAction = false, enableTopAction = false } = props;
    const { onPreAdd = null, onPosUpdate = () => { } } = props;
    const { onAdd = () => { }, onUpdate = () => { }, onDelete = () => { } } = props;
    const { sx = {} } = props;

    const style = {
        tableImg: {
            width: 40,
            height: 40
        },
        dialog: { 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem' 
        },
        tblPaper: {
            ...GlobalStyles.main
        },
        tblContainer: {
            height: "80%" 
        },
        tblTop: { alignItems: "center" },
        tblBottom: { height: 80 },
        ...sx
    }

    const columns = generateColumns(field, style);

    // #region Render Functions
    const renderRowActions = ({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip title={"Edit"}>
                <IconButton onClick={_ => onUpdate({ row, table })}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Delete"}>
                <IconButton onClick={_ => onDelete({ row, table })}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );

    const renderCreateModal = ({ table, row, internalEditComponents }) => (
        <>
            <DialogTitle variant="h3">Create New User</DialogTitle>
            <DialogContent sx={style.dialog}>
                {internalEditComponents}
            </DialogContent>
            <DialogActions>
                <MRT_EditActionButtons variant="text" table={table} row={row} />
            </DialogActions>
        </>
    )

    const renderUpdateModal = ({ table, row, internalEditComponents }) => (
        <>
            <DialogTitle variant="h3">Update User</DialogTitle>
            <DialogContent sx={style.dialog}>
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
        onCreatingRowSave: ({ values, table }) => onAdd({ values, table }),
        onEditingRowSave: ({ values, table }) => onPosUpdate({ values, table }),
        renderCreateRowDialogContent: renderCreateModal,
        renderEditRowDialogContent: renderUpdateModal,
        renderTopToolbarCustomActions: ({ table }) => (<AddItemBtn table={table} onPreAdd={onPreAdd} />),
        muiTablePaperProps: { sx: style.tblPaper },
        muiTopToolbarProps: { sx: style.tblTop },
        muiTableContainerProps: { sx: style.tblContainer },
        muiBottomToolbarProps: { sx: style.tblBottom },
        initialState: { 
            columnOrder: fieldOrder, // Must Be Full, Otherwise Wont Work
            columnVisibility: hideField.reduce((res, item) => { res[item] = false; return res; }, {})
        }
    }

    const table = useMaterialReactTable(tblOption);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MaterialReactTable table={table} />
        </LocalizationProvider>
    )
}

export default Index;