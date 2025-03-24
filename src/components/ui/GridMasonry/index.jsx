
import { useState, useEffect } from "react";
import { Grid2, Typography, Box } from "@mui/material";

import { clsUtility } from "@utility";

// Change Strategy to Using Partition or Filter
function filterStrategy(arr, numCols, ind) {
    return arr.filter((_, jnd) => jnd % numCols == ind);
}

function partitionStrategy(arr, sz, ind) {
    return arr.slice(ind * sz, (ind + 1) * sz)
}

function Index(props) {

    const { children = [], numCols = 3 } = props;
    const { strategy = "filter" } = props;

    const sz = Math.floor(12 / numCols);
    const groupSz = Math.ceil(children.length / numCols);

    const strategyDict = {
        "filter": (arr, ind) => filterStrategy(arr, numCols, ind),
        "partition": (arr, ind) => partitionStrategy(arr, groupSz, ind)
    }

    const strategyMethod = strategyDict[strategy];

    // Render Column Then Space
    const renderCol = (_, ind) => (
        <Grid2 size={sz}>
            <Grid2 container spacing={2}>
                {strategyMethod(children, ind)}
            </Grid2>
        </Grid2>
    )

    return (
        <Grid2 container spacing={2}>
            {Array.from({ length: numCols }).map(renderCol)}
        </Grid2>
    )
}

export default Index;