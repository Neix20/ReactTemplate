import React, { useState, useEffect, useRef } from "react";
import { TextField, Box, Grid2, Button, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import { Search, Add, Undo, Close, ExpandMore, Cancel } from "@mui/icons-material";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);

    const [currentFilter, setCurrentFilter] = useState(null);
    const [showAddFilter, setShowAddFilter] = useState(false);

    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [showDateDialog, setShowDateDialog] = useState(false);

    const filterOptions = [
        { id: "platform", label: "Platform", options: ["Facebook", "Instagram", "Twitter", "LinkedIn", "WhatsApp"] },
        { id: "time", label: "Time", options: ["Last 24 Hours", "Last 7 Days", "Last 30 Days", "Last 6 Months", "Last Year", "Custom Range"] },
        { id: "type", label: "Type", options: ["Phishing", "Identity Theft", "Investment Fraud", "Romance Scam", "Tech Support Scam"] },
    ];

    const handleFilterSelect = (filterId, option) => {
        if (option === "Custom Range" && filterId === "time") {
            setShowDateDialog(true);
        } else {
            setSelectedFilters((prev) => ({ ...prev, [filterId]: option }));
        }
        setAnchorEl(null);
    };

    const onDeleteFilter = (id) => {
        const _obj = { ...selectedFilters };
        delete _obj[id];

        setSelectedFilters(_ => _obj);
    }

    const renderFilterBtn = ([filterId, value]) => {
        return (
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                    key={filterId}
                    variant="outlined"
                    endIcon={<ExpandMore />}
                    onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                        setCurrentFilter(filterId);
                    }}
                    sx={{ fontSize: { xs: "0.72rem", sm: "0.8rem" } }}
                >
                    {value}
                </Button>
                <IconButton size={"small"} onClick={_ => onDeleteFilter(filterId)}>
                    <Close />
                </IconButton>
            </Box>
        )
    }

    const renderFilterDialogItem = (filter) => (
        <Button
            key={filter.id}
            fullWidth
            variant="contained"
            disabled={selectedFilters[filter.id]}
            onClick={() => {
                setSelectedFilters((prev) => ({ ...prev, [filter.id]: filter.options[0] }));
                setShowAddFilter(false);
            }}
            sx={{ mb: 1 }}
        >
            {filter.label}
        </Button>
    )

    return (
        <>
            <Grid2 container flexDirection={"column"} spacing={1.5}>
                {/* Normal Section */}
                {/* <Grid2 container spacing={1}>
                    <TextField
                        variant="outlined"
                        placeholder="Search by scammer name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ flexGrow: 1 }}
                    />
                    <Button variant={"contained"} startIcon={<Search />}>Search</Button>
                </Grid2> */}
                {/* Mobile Section */}
                <Grid2 container spacing={1}>
                <TextField
                        variant="outlined"
                        placeholder="Search by scammer name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ flex: .8, flexGrow: 1 }}
                    />
                    <Button variant={"contained"} startIcon={<Search />} sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
                </Grid2>
                
                {/* Normal Section */}
                <Grid2 container flexWrap={"wrap"} spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => setShowAddFilter(true)}
                    >
                        Add Filter
                    </Button>
                    {Object.keys(selectedFilters).length > 0 && (
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<Undo />}
                            onClick={() => setSelectedFilters({})}
                        >
                            Reset All
                        </Button>
                    )}
                    {Object.entries(selectedFilters).map(renderFilterBtn)}
                </Grid2>
                {/* Mobile Section */}
                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                    <Grid2 container spacing={1}>
                        <Grid2 item size={6}>
                            <Button fullWidth
                                variant="contained"
                                startIcon={<Add />}
                                onClick={() => setShowAddFilter(true)}
                            >
                                Add Filter
                            </Button>
                        </Grid2>
                        <Grid2 item size={6}>
                            {Object.keys(selectedFilters).length > 0 && (
                                <Button fullWidth
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Undo />}
                                    onClick={() => setSelectedFilters({})}
                                >
                                    Reset All
                                </Button>
                            )}
                        </Grid2>
                    </Grid2>
                    <Grid2 container flexWrap={"wrap"} spacing={0.5}>
                        {Object.entries(selectedFilters).map(renderFilterBtn)}
                    </Grid2>
                </Box>
            </Grid2>
            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {filterOptions.find((f) => f.id === currentFilter)?.options.map((option) => (
                    <MenuItem key={option} onClick={() => handleFilterSelect(currentFilter, option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
            {/* Add Filter Dialog */}
            <Dialog open={showAddFilter} onClose={() => setShowAddFilter(false)}>
                <DialogTitle>Add Filter</DialogTitle>
                <DialogContent>
                    {filterOptions.map(renderFilterDialogItem)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowAddFilter(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
            {/* Date Range Dialog */}
            <Dialog open={showDateDialog} onClose={() => setShowDateDialog(false)}>
                <DialogTitle>Select Date Range</DialogTitle>
                <DialogContent>
                    <Grid2 container spacing={2} sx={{ m: 1 }}>
                        <TextField
                            fullWidth
                            type="date"
                            placeholder="Start Date"
                            value={dateRange.start}
                            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            type="date"
                            placeholder="Start Date"
                            value={dateRange.end}
                            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        />
                    </Grid2>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowDateDialog(false)}>Cancel</Button>
                    <Button
                        onClick={() => {
                            if (dateRange.start && dateRange.end) {
                                setSelectedFilters((prev) => ({ ...prev, time: `${dateRange.start} to ${dateRange.end}` }));
                                setShowDateDialog(false);
                            }
                        }}
                        color="primary"
                    >
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default App;
