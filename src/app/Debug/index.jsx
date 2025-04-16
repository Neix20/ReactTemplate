
import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card, alertTitleClasses } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";

import { ColorModeIconDropdown, BpForm, BpInput, BpDataTable } from "@components";

import { clsUtility } from "@utility";

import { useForm, useFormDataLs } from "@hooks";
import { GlobalStyles, Models, SampleData } from "@config";

import { z } from "zod";

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
        ],
        initial: {
            name: "",
            quantity: 0
        },
        schema: z.object({
            name: z.string().min(1, "Name is required"),
            quantity: z.number().min(1, "Quantity is required")
        })
    },
    standard: {
        key: "standard",
        field: [
            {
                "name": "name",
                "type": "text"
            },
            {
                "name": "description",
                "type": "textarea"
            },
            {
                "name": "quantity",
                "type": "int"
            },
            {
                "name": "total_amount",
                "type": "decimal"
            }
        ],
        initial: {
            standard: []
        },
        schema: z.object({
            standard: z.array(z.object({
                name: z.string().min(1, "Name is required"),
                description: z.string().min(1, "Description is required"),
                quantity: z.number().min(1, "Quantity is required"),
                total_amount: z.number().min(1, "Total Amount is required")
            }))
        })
    }
}

function ExampleForm(props) {

    const { field, control, handleSubmit, resetData, loadData, isDirty } = useForm(template.basic);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={GlobalStyles.bordered}>
            <BpForm hasLabel={true} control={control} field={field} />
            <Grid2 container spacing={2} sx={{ mt: 1 }}>
                <Button type="submit" variant="contained" color="primary" disabled={!isDirty}>
                    Submit New
                </Button>
                <Button onClick={resetData} variant={"contained"} color={"error"}>Reset</Button>
            </Grid2>
        </Box>
    )
};

function ExampleDataTable(props) {

    const { key, field, control } = useForm(template.standard)

    const { data, append, update, remove } = useFormDataLs({ key, control });

    // I don't know how to pass values Here
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
            <BpDataTable 
                idx={key}
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
        </Grid2>
    )
}

function MultipleForm(props) {

    const { key, field, control, handleSubmit, resetData, isDirty } = useForm(template.standard);
    const { data, append, remove } = useFormDataLs({ key, control });

    const onSubmit = (data) => {
        console.log(data);
    };

    const onAdd = () => (append({}));

    const renderItem = (item, ind) => (
        <BpForm hasLabel={false} control={control} 
            preHeader={`${key}.${ind}`} field={field} 
        />
    )

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            {data.map(renderItem)}
            <Grid2 container spacing={1} sx={{ mt: 1 }}>
                <Button type={"button"} onClick={onAdd} variant={"contained"} color={"error"}>
                    Add New
                </Button>
                <Button type={"submit"} variant={"contained"} color={"primary"} disabled={!isDirty}>
                    Submit
                </Button>
                <Button type={"button"} onClick={resetData} variant={"contained"} color={"error"}>
                    Reset
                </Button>
            </Grid2>
        </Box>
    )

}

// Code Example for Report
function ExampleReport(props) {

    // const { key, control, handleSubmit, isDirty }

}

function Index(props) {
    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            {/* <ExampleFormDataLs /> */}
            {/* <ExampleForm /> */}
            <ExampleDataTable />
            {/* <MultipleForm /> */}
            {/* <ExampleItemSelect /> */}
        </Grid2>
    )
}

export default Index;

