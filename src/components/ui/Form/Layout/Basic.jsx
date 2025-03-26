
import { Grid2, Button } from "@mui/material";

import { GlobalStyles } from "@config";

function Index(props = {}) {

    const { children = (<></>), onSubmit = () => { }, onClear = () => {}, sx = {} } = props;

    const style = {
        btnSubmit: {
            backgroundColor: "success.main"
        },
        btnClear: {
            backgroundColor: "danger.main"
        },
        main: {
            margin: 2,
            ...GlobalStyles.bordered
        }
    }

    return (
        <Grid2 container flexDirection={"column"} spacing={2} sx={{
            ...style.main,
            ...sx
        }}>
            {children}
            <Grid2 container>
                <Button variant={"contained"} onClick={onSubmit} sx={style.btnSubmit}>Submit</Button>
                <Button variant={"contained"} onClick={onClear} sx={style.btnClear}>Clear</Button>
            </Grid2>
        </Grid2>
    )
}

export default Index;