
import { Typography, Grid2, Box } from "@mui/material";

import { BpFormItem } from "@components";

function Index(props) {

    const { preHeader = "", field = [], size = {}, children = (<></>), sx = {}, ...itemProps } = props;


    // Props For Item
    const _spacing= {
        xs: 1, 
        sm: 2,
        ...size
    };

    const renderItem = (obj) => {

        // Complete Pre-Header
        const _name = [preHeader, obj.name].filter(x => x.length > 0).join(".");

        const _xs = 12 / (_spacing.xs || 1);
        const _sm = 12 / (_spacing.sm || 1);

        const _size = {
            xs: _xs,
            sm: _sm,
        }

        return (
            <BpFormItem size={_size} {...obj} name={_name} {...itemProps}  />
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
