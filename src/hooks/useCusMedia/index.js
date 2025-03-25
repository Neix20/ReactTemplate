
import { useState, useEffect } from "react";

import {useMediaQuery} from "@mui/material";

function useCusMedia(obj) {

    const [value, setValue] = useState(obj["sm"]);

    const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("lg"));

    useEffect(() => {
        if (isXs) {
            setValue(_ => obj["xs"]);
        } else if (isSm) {
            setValue(_ => obj["sm"]);
        } else if (isMd) {
            setValue(_ => obj["md"]);
        } else {
            setValue(_ => obj["lg"]);
        }
    }, [isXs, isSm, isMd]);

    return { value, setValue };
}

export default useCusMedia;