
import { Box } from "@mui/material";

function Index(props) {

    const { imgName = "", imgData = "", onClick = () => {}, sx = {} } = props;

    const style = {
        main: {
            width: 40,
            height: 40,
            borderRadius: 2,
            transition: "transform 0.2s",
            cursor: "pointer",
            "&:hover": {
                transform: "scale(1.05)",
            },
        },
        ...sx
    }

    return (
        <Box component={"img"} onClick={onClick} src={imgData} alt={imgName} sx={style.main} />
    )
}

export default Index;