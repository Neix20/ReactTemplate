
import { Typography, Grid2, Box } from "@mui/material";

import { BpFormItem } from "@components";

import { clsUtility } from "@utility";

function Index(props) {

    const { field = [], size = {}  } = props;
    const { children = (<></>), sx = {}, ...itemProps } = props;

    // Props For Item
    const _spacing= {
        xs: 1, 
        sm: 2,
        ...size
    };

    const renderItem = (obj) => {

        const _xs = 12 / _spacing.xs;
        const _sm = 12 / _spacing.sm;

        const _size = {
            xs: _xs,
            sm: _sm,
        }

        return (
            <BpFormItem size={_size} {...obj} {...itemProps}  />
        )
    };

    const style = {
        main: {},
        ...sx
    };

    return (
        <Grid2 container flexWrap={"wrap"} spacing={{ xs: 1 }} 
            alignItems={"flex-start"} sx={style.main}>
            {field.filter(x => x.show !== false).map(renderItem)}
            {children}
        </Grid2>
    );
}

export default Index;
