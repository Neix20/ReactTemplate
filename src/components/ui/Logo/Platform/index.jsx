
import { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { Images } from "@config";

function Index(props) {

    const { term = "Berupop", sx = {} } = props;

    const style = {
        main: {
            width: 24,
            height: 24,
            ...sx
        },
    }

    const dict = {
        "Berupop": {
            src: Images.BeruPopDark,
            alt: "Berupop"
        },
        "Facebook": {
            src: Images.facebook,
            alt: "Facebook"
        },
        "Instagram": {
            src: Images.instagram,
            alt: "Instagram"
        },
        "XHS": {
            src: Images.xiaohongshu,
            alt: "Xiaohongshu"
        }
    }
    
    if (!(term in dict)) {
        return (
            <Box component="img" src={Images.BeruPopDark} alt="Berupop" sx={style.main} />
        )
    }

    return (
        <Box component="img" {...dict[term]} sx={style.main} />
    )
}

export default Index;