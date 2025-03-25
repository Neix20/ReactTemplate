import React, { useState, useEffect, useRef } from "react";
import { Button, TextField, Chip, Menu, MenuList, MenuItem, Paper, Typography, Box, IconButton, Tooltip, Grid2 } from "@mui/material";

import { Add, Close, Search, Cancel } from "@mui/icons-material";

import { useToggle } from "@hooks";

function useFilterData(val) {
    const [data, setData] = useState([]);

    const handleAddData = (scammer) => {
        if (!data.includes(scammer)) {
            setData([...data, scammer]);
        }
    };

    const handleRemoveData = (obj) => {
        setData(data.filter((s) => s !== obj));
    };

    return {
        data, handleAddData, handleRemoveData
    }
}

const Index = (props) => {

    const { selection = [], sx = {} } = props;

    const { data, handleAddData, handleRemoveData } = useFilterData();
    const [searchTerm, setSearchTerm] = useState("");

    const { flag, open, close } = useToggle(false);

    const filteredData = selection.filter((obj) => obj.toLowerCase().includes(searchTerm.toLowerCase()));

    const renderMenuItem = (obj, index) => {
        const addData = () => {
            handleAddData(obj);
            close();
            setSearchTerm("");
        };
        return (
            <MenuItem key={index} onClick={addData}>
                {obj}
            </MenuItem>
        )
    }

    const renderSelectedMenuItem = (obj, index) => {
        const removeData = () => handleRemoveData(obj);
        return (
            <Chip
                key={index}
                label={obj}
                onDelete={removeData}
                deleteIcon={<Close />}
            />
        )
    }

    const style = {
        main: {
            width: "100%"
        },
        ...sx
    }

    return (
        <Box sx={style.main}>
            <Grid2 container alignItems={"center"} justifyContent={"space-between"}>
                <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", sm: "1.75rem" } }}>
                    Scammers
                </Typography>
                <Button variant="contained" color="primary" startIcon={<Add />} onClick={open}>Scammer</Button>
            </Grid2>

            {/* Scammer Search Dropdown */}
            <MenuList sx={(theme) => (
                {
                    mt: 1,
                    display: flag ? "block" : "none",
                    borderRadius: 2,
                    backgroundColor: theme.palette.grey[200],
                    ...theme.applyStyles("dark", { backgroundColor: "#333" })
                }
            )}>
                <Grid2 container spacing={0}>
                    <TextField
                        variant="standard"
                        placeholder="Search scammers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: <Search style={{ marginRight: "10px" }} />,
                            }
                        }}
                        sx={{
                            py: 1, px: 2, flexGrow: 1
                        }}
                    />
                    <IconButton onClick={close}>
                        <Cancel />
                    </IconButton>
                </Grid2>
                <Box sx={{ overflowY: "auto" }}>
                    {/* Add Menu Item */}
                    {filteredData.map(renderMenuItem)}
                </Box>
            </MenuList>

            {/* Linked Scammers Chips */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {/* Linked Menu Item */}
                {data.map(renderSelectedMenuItem)}
            </Box>
        </Box>
    );
};

export default Index;
