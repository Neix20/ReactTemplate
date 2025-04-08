import { useState, useEffect } from "react";

import { Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { GlobalStyles, Models } from "@config";

import { BpForm, ColorModeIconDropdown } from "@components";
import { useForm } from "@hooks";

function Index(props) {

    const { key, data, field, updateDataHtml, resetData, isChanged, loadData, } = useForm(Models.Sample);

    return (
        <Grid2 sx={{ padding: 2 }}>
            <ColorModeIconDropdown />
            <Box sx={{
                ...GlobalStyles.bordered,
                mt: 1
            }}>
                <BpForm hasLabel={true}
                    key={key} idx={key}
                    data={data} field={field}
                    onUpdate={updateDataHtml} />
            </Box>

        </Grid2>
    )
}

export default Index;