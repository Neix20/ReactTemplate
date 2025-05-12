import React, { useState, useEffect, useRef } from "react";
import { TextField, Box, Grid2, Button, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import { Search, Add, Undo, Close, ExpandMore, Cancel, Clear } from "@mui/icons-material";

import { fetchIncidentQuery } from "@api";
import { BpLoading, BpInput } from "@components";
import { useToggle, useForm } from "@hooks";

import { SampleData } from "@config";

import { DateTime } from 'luxon';

function genDateRange(term, dateRange = {}) {
    const now = DateTime.now();
    const dict = {
        "Last 24 Hours": {
            start: now.minus({ hours: 24 }).toISODate(),
            end: now.toISODate(),
        },
        "Last 7 Days": {
            start: now.minus({ days: 7 }).toISODate(),
            end: now.toISODate(),
        },
        "Last 30 Days": {
            start: now.minus({ days: 30 }).toISODate(),
            end: now.toISODate(),
        },
        "Last 6 Months": {
            start: now.minus({ months: 6 }).toISODate(),
            end: now.toISODate(),
        },
        "Last Year": {
            start: now.minus({ years: 1 }).toISODate(),
            end: now.toISODate(),
        },
        "Custom Range": dateRange,
    };

    return dict[term] ?? { start: null, end: null };
}

function App(props) {

    const { updateIncident = _ => { } } = props;

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);

    const [currentFilter, setCurrentFilter] = useState(null);
    const [showAddFilter, setShowAddFilter] = useState(false);

    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [showDateDialog, setShowDateDialog] = useState(false);

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

    // todo: Get From General API
    const filterOptions = [
        { id: "platform", label: "Platform", options: SampleData.Platform.map(x => x.value) },
        { id: "category", label: "Category", options: ["Seller Scam", "Buyer Scam", "Alert" ] },
        { id: "time", label: "Time", options: ["Last 24 Hours", "Last 7 Days", "Last 30 Days", "Last 6 Months", "Last Year", "Custom Range"] }
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
    };

    const onSubmit = () => {

        const { platform = "", time = "", category = "" } = selectedFilters;

        const _data = {
            query: searchTerm,
            date_range: genDateRange(time, dateRange),
            platform,
            category
        };

        setLoadingTrue();
        fetchIncidentQuery(_data)
        .then(res => {
            setLoadingFalse();

            const { data = {} } = res;
            updateIncident(data);
        })
        .catch(err => {
            setLoadingFalse();
            console.error(err);
        });


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

    const onClearSearch = () => {
        setSearchTerm(_ => "");
    }

    return (
        <>
            <BpLoading loading={loading} />
            <Grid2 container flexDirection={"column"} spacing={1.5}>
                <Grid2 container spacing={1}>
                    <TextField
                        variant="outlined"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        slotProps={{
                            input: {
                              endAdornment: (searchTerm && (
                                <IconButton onClick={onClearSearch}>
                                    <Clear />
                                </IconButton>
                              )),
                            },
                          }}
                        sx={{ flex: .8, flexGrow: 1 }}
                    />
                    <Button variant={"contained"} startIcon={<Search />}
                        onClick={onSubmit}
                        sx={{ flex: .2, maxWidth: "100px", minWidth: "100px" }}>Search</Button>
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
                    <Grid2 container spacing={1} sx={{ mb: 1 }}>
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
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
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
                                setSelectedFilters((prev) => ({ ...prev, time: "Custom Range" }));
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
