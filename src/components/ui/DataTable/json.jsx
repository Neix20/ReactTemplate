
import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";

import { GlobalStyles } from "@config";

import { MaterialReactTable, useMaterialReactTable } from "material-react-table";

import { clsUtility } from "@utility";

function Index(props) {

    const { data = {} } = props;

    const arr = Object.entries(data).map(([key, value]) => ({ key: clsUtility.capitalize(key), value }));

    const columns = [
        {
            accessorKey: "key", // Key column
            header: "Field",
            size: 150,
        },
        {
            accessorKey: "value", // Value column
            header: "Value",
            size: 150
        }
    ];

    const tblOption = {
        columns: columns,
        data: arr,
        enableTopToolbar: false,
        enablePagination: false,
        muiTablePaperProps: { sx: GlobalStyles.main },
        enableTableHead: false,
        enableBottomToolbar: false,
        muiTableBodyRowProps: {
            hover: false,
          }
    }

    const tbl = useMaterialReactTable(tblOption);

    return (
        <MaterialReactTable table={tbl} />
    )
}

export default Index;