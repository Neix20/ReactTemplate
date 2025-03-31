
import { Typography, Grid2, Box } from "@mui/material";

import { BpFormItem } from "@components";

import { clsUtility } from "@utility";

function Wrapper(props) {
    const { children = (<></>), sx = {} } = props;

    const style = {
        main: {},
        ...sx
    }

    return (
        <Grid2 container flexWrap={"wrap"} spacing={{xs: 1, sm: 2}} alignItems={"flex-start"} sx={style.main}>
            {children}
        </Grid2>
    )
}

function Index(props) {

    const { idx: key = "", field = [], children = (<></>) } = props;
    const { sx = {} } = props;

    const { data = {}, onUpdate = () => { }, hasLabel = false } = props;

    const renderItem = (obj) => {
        const { name = "", show = false } = obj;

        return (
            <BpFormItem key={`${key}-${name}`} idx={`${key}-${name}`}
                value={data[name]} onChange={onUpdate}
                hasLabel={hasLabel}
                {...obj} />
        )
    }

    return (
        <Wrapper sx={sx}>
            {field.filter(x => x.show !== false).map(renderItem)}
            {children}
        </Wrapper>
    )
}

export default Index;