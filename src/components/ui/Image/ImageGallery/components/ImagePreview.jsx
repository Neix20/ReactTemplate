
import { Box } from "@mui/material";

function Index(props) {

    const { fileName = "", fileData = "", onClick = () => {}, sx = {} } = props;

    const style = {
        main: {
            width: 128,
            height: 128,
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
        <Box component={"img"} onClick={onClick} src={fileData} alt={fileName} sx={style.main} />
    )
}

export default Index;