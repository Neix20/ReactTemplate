
import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card, alertTitleClasses } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";

import { ColorModeIconDropdown, BpForm, BpInput, BpDataTable } from "@components";

import { clsUtility } from "@utility";

import { useForm, useFormDataLs } from "@hooks";
import { GlobalStyles, Models, SampleData } from "@config";

import { z } from "zod";

const template = {
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
    },
    report: {
        key: "report",
        field: [
            {
                "name": "platform",
                "type": "text"
            },
            {
                "name": "post_url",
                "type": "text"
            }
        ],
        initial: {
            post: {}
        },
        schema: z.object({
            post: z.object({
                platform: z.string().min(1, "Platform is required"),
                post_url: z.string().min(1, "Post URL is required"),
            })
        })
    }
}

function ExampleForm(props) {

    const { field, control, handleSubmit, resetData, loadData, isDirty } = useForm(Models.Sample);

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

    const { key, field, control } = useForm(template.standard);

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
        <BpForm 
            control={control} 
            preHeader={`${key}.${ind}`} 
            hasLabel={false} 
            field={field} 
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

    const { key, field, control, handleSubmit, resetData, isDirty } = useForm(template.report);

    const onSubmit = (data) => {
        console.log(data);
    };

    const selection = [
        {
            "name": "Tan Xuan Qing",
            "value": "SCAMMER-0c3535ad-b583-4fa4-b6a8-e7b243f64777"
        },
        {
            "name": "Tan Xi En",
            "value": "SCAMMER-5fd8eb8f-a9ce-4f26-bf3b-452001133295"
        },
        {
            "name": "Pang Siang Cheng",
            "value": "SCAMMER-7db83672-c528-4baf-97d9-bd67d5c55ecf"
        },
        {
            "name": "Captain America",
            "value": "SCAMMER-fba6f1b4-8535-444d-93b5-0f2a99b4c187"
        }
    ];

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={GlobalStyles.bordered}>
            <BpForm preHeader={"post"} control={control} field={field} />
            <Grid2 container spacing={2} sx={{ mt: 1 }}>
                <Button type="submit" variant="contained" color="primary" disabled={!isDirty}>
                    Submit New
                </Button>
                <Button onClick={resetData} variant={"contained"} color={"error"}>Reset</Button>
            </Grid2>
        </Box>
    )

}

function Index(props) {
    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            {/* <ExampleFormDataLs /> */}
            {/* <ExampleForm /> */}
            {/* <ExampleDataTable /> */}
            {/* <MultipleForm /> */}
            <ExampleReport />
        </Grid2>
    )
}

export default Index;

