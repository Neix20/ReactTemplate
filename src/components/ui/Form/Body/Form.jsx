
import { Typography, Grid2, Box } from "@mui/material";

import { BpFormItem } from "@components";

import { clsUtility } from "@utility";

function Index(props) {

    const { idx: key = "", field = [] } = props;
    const { children = (<></>), sx = {}, size = {} } = props;

    const { data = {}, onUpdate = () => { }, hasLabel = false } = props;

    const _spacing= {
        xs: 1, 
        sm: 2,
        ...size
    };

    const renderItem = (obj) => {
        const { name = "" } = obj;

        const idx = `${key}-${name}`;

        const _xs = 12 / _spacing.xs;
        const _sm = 12 / _spacing.sm;

        const _size = {
            xs: _xs,
            sm: _sm,
        }

        return (
            <BpFormItem key={idx} idx={idx}
                value={data[name]} onChange={onUpdate}
                hasLabel={hasLabel} size={_size}
                {...obj} />
        )
    };

    const style = {
        main: {},
        ...sx
    };

    return (
        <Grid2 container flexWrap={"wrap"} spacing={_spacing} 
            alignItems={"flex-start"} sx={style.main}>
            {field.filter(x => x.show !== false).map(renderItem)}
            {children}
        </Grid2>
    );
}

export default Index;