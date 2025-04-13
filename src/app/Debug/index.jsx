
import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card } from "@mui/material";

import { ColorModeIconDropdown, BpForm, BpInput, BpDataTable } from "@components";

import { FormControl, Select, MenuItem } from "@mui/material";

import { GlobalStyles, Models, SampleData } from "@config";

import { clsUtility } from "@utility";
import { useFormDataLs } from "@hooks";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Delete, Add } from "@mui/icons-material";

import { z } from "zod";

function ExampleFormDataLs(props) {

    const { register, control, handleSubmit, reset, formState: { errors, isDirty } } = useForm({
        resolver: zodResolver(z.object({
            platform: z.string().min(1, "Platform is required"),
            post_url: z.string().min(1, "Post URL is required")
        }))
    });

    const { fields: data, append, remove } = useFieldArray({ control, name: "social_media" });

    const itemProps = { register, control, errors };

    const renderItem = (item, ind) => {

        const onDeleteItem = () => remove(ind);

        return (
            <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                <Grid2 item size={3} sx={{ display: "flex" }}>
                    <BpInput name={`social_media.${ind}.platform`} type={"dropdown"}
                        placeholder={"Platform"} selection={SampleData.Platform}
                        {...itemProps} />
                </Grid2>
                <Grid2 item size={9} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <BpInput name={`social_media.${ind}.post_url`} type={"text"} placeholder={"Enter username / Profile URL"} {...itemProps} />
                    <IconButton onClick={onDeleteItem} sx={{ backgroundColor: "error.main" }}>
                        <Delete />
                    </IconButton>
                </Grid2>
            </Grid2>
        )
    }

    const onSubmit = (data) => {
        console.log(data)
    };

    const onAdd = () => (append({}));

    return (
        <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography>Social Media</Typography>
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
                {data.map(renderItem)}
                <Button startIcon={<Add />} onClick={onAdd} variant={"contained"} sx={{ mt: 1 }}>Add Social Media</Button>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                    Submit Form Data
                </Button>
            </Box>
        </Grid2>
    )
}

function ExampleForm(props) {

    const { field, schema } = Models.Sample;

    const { register, control, handleSubmit, reset, formState: { errors, isDirty } } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema)
    });

    const itemProps = { register, control, errors };

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={GlobalStyles.bordered}>
            <BpForm field={field} hasLabel={true} {...itemProps}>
            </BpForm>
            <Grid2 container spacing={2} sx={{ mt: 1 }}>
                <Button type="submit" variant="contained" color="primary"
                    disabled={!isDirty}>
                    Submit New
                </Button>
                <Button onClick={() => reset()} variant={"contained"} color={"error"}>Reset</Button>
            </Grid2>
        </Box>
    )
};

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

function ExampleDataTable(props) {

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

import { BpSearchMenuList } from "@components";

function useFilterData() {
    const [data, setData] = useState([]);

    const handleAddData = (_data) => {
        setData((prevData) => {
            if (!prevData.includes(_data)) {
                return [...prevData, _data];
            }
            return prevData;
        });
    };

    const handleRemoveData = (obj) => {
        setData((prevData) => prevData.filter((s) => s !== obj));
    };

    return {
        data, setData, handleAddData, handleRemoveData
    }
}

const scammerSelection = [
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

]
function ExampleItemSelect(props) {

    const { 
        data: scammer, 
        setData: setScammer, 
        handleAddData: handleAddScammer, 
        handleRemoveData: handleRemoveScammer 
    } = useFilterData();

    return (
        <BpSearchMenuList
            data={scammer} searchField={"scammer"} selection={scammerSelection}
            handleAddData={handleAddScammer} handleRemoveData={handleRemoveScammer}
        />
    )
}

function Index(props) {
    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            <ExampleFormDataLs />
            {/* <ExampleForm /> */}
            {/* <ExampleDataTable /> */}
            <ExampleItemSelect />
        </Grid2>
    )
}

export default Index;

