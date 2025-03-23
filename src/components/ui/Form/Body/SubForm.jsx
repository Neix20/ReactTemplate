
import { Button, Typography, Grid2, IconButton, Tooltip } from "@mui/material";

import BpForm from "./Form";

import { clsUtility } from "@utility";
import { Cancel, CheckCircle } from "@mui/icons-material";

function Index(props = {}) {

    const { idx: key = "", data = {}, field = [] } = props;
    const { onAdd = () => { }, onUpdate = () => { }, onDelete = () => { }, onSubmit = () => {} } = props;
    const { numForms = 2, sx = {} } = props;

    // Changes to Check If Item has been modified

    const style = {
        bordered: {
            padding: 2,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "background.border",
        },
        btnAdd: {
            backgroundColor: "primary.main"
        },
        btnSubmit: {
            backgroundColor: "success.main"
        },
        btnDelete: {
            backgroundColor: "danger.main"
        }
    }

    const size = Math.floor(12 / numForms);

    const renderItem = (item, ind) => {

        const { idx = "" } = item;

        const onUpdateItem = (evt) => onUpdate(evt, idx);
        const onDeleteItem = () => onDelete(idx);

        const onSubmitItem = () => onSubmit(item);

        return (
            <Grid2 size={size} container spacing={2} sx={style.bordered}>
                <Grid2 sx={{ width: "calc(100% - 60px)" }}>
                    <BpForm key={`${idx}-${ind}`} idx={key}
                        data={item} field={field}
                        hasLabel={false} numCols={1}
                        onUpdate={onUpdateItem} />
                </Grid2>
                <Grid2 container flexDirection={"column"}>
                    <Tooltip title={"Delete"}>
                        <IconButton onClick={onDeleteItem}>
                            <Cancel />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Submit"}>
                        <IconButton onClick={onSubmitItem}>
                            <CheckCircle />
                        </IconButton>
                    </Tooltip>
                </Grid2>
            </Grid2>
        )
    };

    const lbl = clsUtility.capitalize(key);

    return (
        <Grid2 container spacing={1} flexDirection={"column"} sx={{
            width: "100%",
            ...sx
        }}>
            <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                <Typography variant="h4" sx={{ color: "#FFF"}}>{lbl}</Typography>
                <Button variant={"contained"} onClick={onAdd} sx={style.btnAdd}>Add New</Button>
            </Grid2>
            <Grid2 container flexWrap={"wrap"}>
                {data.map(renderItem)}
            </Grid2>
        </Grid2>
    )
}

export default Index;