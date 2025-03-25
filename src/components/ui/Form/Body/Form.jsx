
import { Typography, Grid2, Box } from "@mui/material";

import { BpFormItem } from "@components";

import { clsUtility } from "@utility";

function Wrapper(props) {
    const { children = (<></>) } = props;
    const { colSpacing = 1, sx = {} } = props;

    return (
        <Grid2 container flexWrap={"wrap"} spacing={colSpacing} alignItems={"flex-start"}>
            {children}
        </Grid2>
    )

    return (
        <Grid2 container spacing={2} flexDirection={"column"} sx={style.main}>
            {hasTitle ? (<Typography variant={"h2"} sx={{ color: "text.primary" }}>{title}</Typography>) : (<></>)}
            <Grid2 container flexWrap={"wrap"} spacing={spacing} alignItems={"flex-start"}>
                {children}
            </Grid2>
        </Grid2>
    )
}

function Index(props) {

    const { idx: key = "", field = [], children = (<></>) } = props;
    const { colSpacing = 1, sx = {} } = props;

    const wrapperProps = {
        colSpacing: colSpacing,
        sx: sx
    }

    const { data = {}, onUpdate = () => { }, hasLabel = false, numCols = 2 } = props;

    const renderItem = (obj) => {
        const { name = "" } = obj;
        return (
            <BpFormItem key={`${key}-${name}`} idx={`${key}-${name}`}
                value={data[name]} onChange={onUpdate}
                hasLabel={hasLabel} size={numCols}
                {...obj} />
        )
    }

    return (
        <Wrapper {...wrapperProps}>
            {field.filter(x => x.editable !== false).map(renderItem)}
            {children}
        </Wrapper>
    )
}

export default Index;