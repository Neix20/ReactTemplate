
import { Grid2, Typography, Modal } from "@mui/material";

import Lottie from "react-lottie";

import { Animation, GlobalStyles } from "@config";

function Index(props) {

    const { loading = true } = props;

    const animOption = {
        loop: true,
        autoplay: true,
        animationData: Animation.Loading
    };

    const style = {
        main: {
            width: 400
        }
    }

    return (
        <Modal open={loading}>
            <Grid2 container alignItems={"center"} justifyContent={"center"} sx={GlobalStyles.main}>
                <Grid2 container flexDirection={"column"} spacing={2} alignItems={"center"} sx={style.main}>
                    <Lottie options={animOption} />
                    <Typography variant={"h2"}>Loading ...</Typography>
                </Grid2>
            </Grid2>
        </Modal>
    );
}

export default Index;