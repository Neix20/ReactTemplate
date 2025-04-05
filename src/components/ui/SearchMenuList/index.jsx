import React, { useState, useEffect, useRef } from "react";
import { Button, TextField, Chip, Menu, MenuList, MenuItem, Paper, Typography, Box, IconButton, Tooltip, Grid2 } from "@mui/material";

import { Add, Close, Search, Cancel } from "@mui/icons-material";

import { useToggle } from "@hooks";

import { clsUtility } from "@utility";

const Index = (props) => {

    const { searchField = "", selection = [], sx = {} } = props;
    const { data = [], handleAddData = () => {}, handleRemoveData = () => {} } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const { flag, open, close } = useToggle(false);

    const filteredData = selection.filter((obj) => obj.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const renderMenuItem = (obj, index) => {
        const addData = () => {
            handleAddData(obj);
            close();
            setSearchTerm("");
        };
        return (
            <MenuItem key={index} onClick={addData}>
                {obj.name}
            </MenuItem>
        )
    }

    const renderSelectedMenuItem = (obj, index) => {
        const removeData = () => handleRemoveData(obj);
        return (
            <Chip
                key={index}
                label={obj.name}
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
                    {clsUtility.capitalize(searchField)}
                </Typography>
                <Button variant="contained" color="primary" startIcon={<Add />} onClick={open}>{clsUtility.capitalize(searchField)}</Button>
            </Grid2>

            {/* Search Dropdown */}
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
                        placeholder={`Search ${searchField}...`}
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
