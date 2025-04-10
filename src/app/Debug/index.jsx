
import { Container, Grid2, Typography, Button, IconButton, Box, Tooltip, Paper, Card } from "@mui/material";

import { ColorModeIconDropdown, BpForm, BpInput, BpDataTable } from "@components";

import { FormControl, Select, MenuItem } from "@mui/material";

import { Models, SampleData } from "@config";

import { clsUtility } from "@utility";
import { useFormDataLs } from "@hooks";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Delete, Add } from "@mui/icons-material";

function ExampleFormDataLs(props) {

    const { register, control, handleSubmit, reset, formState: { errors, isDirty } } = useForm({});

    const { fields: data, append, remove } = useFieldArray({ control, name: "social_media" });

    const itemProps = { register, control, errors };

    const renderItem = (item, ind) => {

        const onDeleteItem = () => remove(ind);

        return (
            <Grid2 container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                <Grid2 item size={3} sx={{ display: "flex" }}>
                    <BpInput name={`social_media.${ind}.platform`} type={"dropdown"}
                        placeholder={"Platform"}
                        selection={SampleData.Platform} {...itemProps} />
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
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <BpForm field={field} hasLabel={true} {...itemProps}>
            </BpForm>
            <Grid2 container spacing={2}>
                <Button type="submit" variant="contained" color="primary"
                    disabled={!isDirty}>
                    Submit New
                </Button>
                <Button onClick={() => reset()} variant={"contained"} color={"error"}>Reset</Button>
            </Grid2>
        </Box>
    )
};

import BpExampleDataTable from "@components/ui/DataTable/example.jsx";

const template = {
    basic: {
        key: "basic",
        field: [
            {
                name: "name",
                type: "text"
            },
            {
                name: "birthday",
                type: "date"
            }
        ]
    }
}

function ExampleDataTable(props) {

    const { field } = template.basic;

    const { register, control, handleSubmit, reset, formState: { errors, isDirty } } = useForm({});

    const { fields: data, append, remove } = useFieldArray({ control, name: "basic" });

    const preAddUser = ({ table }) => {
        table.setCreatingRow(true);
    }

    const addUser = ({ values, table }) => {
        append(values);
        table.setCreatingRow(null);
    }

    const updateUser = ({ row, table }) => {
        table.setEditingRow(row);
    }

    const posUpdateUser = ({ values, table }) => {
        reset(values);
        table.setEditingRow(null);
    }

    const onDelete = ({ row }) => {
        remove(row.original.idx);
    }

    const onDebug = () => {
        console.log(data);
    }

    return (
        <Grid2 container flexDirection={"column"} spacing={1} sx={{ mt: 1 }}>
            <BpDataTable
                data={data}
                field={field}
                enableRowAction={true}
                enableTopAction={true}
                onPreAdd={preAddUser}
                onAdd={addUser}
                onUpdate={updateUser}
                onPosUpdate={posUpdateUser}
                onDelete={onDelete} 
            />
            <Button variant={"contained"} onClick={onDebug}>Debug</Button>
        </Grid2>
    )
}

function Index(props) {
    return (
        <Grid2 sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            {/* <ExampleFormDataLs /> */}
            {/* <ExampleForm /> */}
            <ExampleDataTable />
        </Grid2>
    )
}

export default Index;

