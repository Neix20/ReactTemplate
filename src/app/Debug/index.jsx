
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
            },
            {
                "name": "scammer_type",
                "type": "dropdown",
                "selection": [
                    {
                        "label": "Seller",
                        "value": "Seller"
                    },
                    {
                        "label": "Buyer",
                        "value": "Buyer"
                    }
                ]
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
                total_amount: z.number().min(1, "Total Amount is required"),
                scammer_type: z.object({
                    label: z.any(),
                    value: z.enum(["Seller", "Buyer"])
                }),
            }))
        })
    },
    report: {
        key: "report",
        field: [
            {
                "name": "name",
                "type": "text"
            },
            {
                "name": "scammer_type",
                "type": "multi-dropdown",
                "selection": [
                    {
                        "label": "Seller",
                        "value": "Seller"
                    },
                    {
                        "label": "Buyer",
                        "value": "Buyer"
                    }
                ]
            }
        ],
        initial: {
            name: "",
            scammer_type: null,
            payment: null
        },
        schema: z.object({
            name: z.string().min(1, "Name is required"),
            scammer_type: z.object({
                label: z.any(),
                value: z.enum(["Seller", "Buyer"])
            }),
            payment: z.object({
                label: z.any(),
                value: z.enum(["Seller", "Buyer"])
            }),
        })
    }
}

function ExampleForm(props) {

    const { key, field, control, handleSubmit, resetData, isDirty } = useForm(Models.Sample);

    const onSubmit = (data) => {

        // const _data = { ...data };

        // for (const { name: _key } of field.filter(x => x.type === "dropdown")) {
        //     _data[_key] = _data[_key].value;
        // }

        alert("For Real: " + JSON.stringify(data));
    };

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={GlobalStyles.bordered}>
            <BpForm hasLabel={true} field={field} control={control} />
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

    // Function Chaining
    const onSubmit = (data) => {

        // const _data = {
        //     [key]: data[key].map(x => {
        //         const _obj = { ...x };

        //         for (const { name: _key } of field.filter(x => x.type === "dropdown")) {
        //             _obj[_key] = _obj[_key].value;
        //         }

        //         return _obj;
        //     })
        // };

        alert(JSON.stringify(data));
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

function CuSelect(props) {

    const selection = [
        {
            "label": "Seller",
            "value": "Seller"
        },
        {
            "label": "Buyer",
            "value": "Buyer"
        }
    ];

    const template = {
        key: "custom",
        field: [
            {
                "name": "custom",
                "type": "multi-dropdown",
                "selection": selection
            }
        ],
        schema: z.object({
            custom: z.array(z.object({
                label: z.any(),
                value: z.enum(["Seller", "Buyer"])
            })).min(1)
        })
    }

    const { field, control, handleSubmit } = useForm(template);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <BpForm hasLabel={true} field={field} control={control} />
            <Button type={"submit"} variant={"contained"}>Kill the Demon Lord</Button>
        </Box>
    )
}

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { FormControl, FormLabel, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

import { BpImageUpload, BpImageGallery } from "@components";

function ExampleFormDataLs(props) {

    const templ = {
        report: {
            key: "images",
            schema: z.object({
                images: z.array(z.object({
                    fileName: z.string(),
                    fileData: z.string(),
                    fileType: z.string(),
                    fileSize: z.number()
                })).min(1),
            }),
            initial: {
                images: []
            }
        }
    }

    const { key: term, control, handleSubmit, resetData } = useForm(templ.report);
    const { data: imgAsset, append: onAdd, remove: onDelete } = useFormDataLs({ key: term, control });

    const addImgAsset = (item) => onAdd(item);
    const deleteImgAsset = (idx) => onDelete(idx);

    const onSubmit = (data) => {
        alert("Success");
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Grid2 container flexDirection={"column"} spacing={1}>
                <Controller
                    name={term}
                    control={control}
                    render={({ fieldState: { error } }) => {
                        return (
                            <>
                                <BpImageUpload onAdd={addImgAsset} error={error} />
                                <BpImageGallery data={imgAsset} onDelete={deleteImgAsset} />
                            </>
                        )
                    }}
                />
                <Grid2 container>
                    <Button variant={"contained"} onClick={resetData}>Reset</Button>
                    <Button type={"submit"} variant={"contained"}>Submit</Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

function Index(props) {

    const user = useSelector(Selectors.userSelect);

    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            <Typography>{JSON.stringify(user)}</Typography>
            {/* <CuSelect /> */}
            {/* <ExampleForm /> */}
            {/* <ExampleDataTable /> */}
            {/* <MultipleForm /> */}
            <ExampleFormDataLs />
        </Grid2>
    )
}

export default Index;

