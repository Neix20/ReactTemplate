import { useState } from "react";
import { Grid2, Modal, Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";

import { useToggle } from "@hooks";

import ImagePreview from "./components/ImagePreview";
import ImagePreviewWithDelete from "./components/ImagePreviewWithDelete";

function Index(props) {

    const { data = [], onDelete = () => { }, readOnly = false } = props;

    if (data.length == 0) {
        return (<></>)
    }

    const { flag: open, open: setOpenTrue, close: setOpenFalse } = useToggle(false);

    const [curIdx, setCurIdx] = useState(0);

    const handleOpen = (index) => {
        setCurIdx(index);
        setOpenTrue();
    };

    const handleClose = () => {
        setOpenFalse();
    };

    const handleNext = () => {
        setCurIdx((prevIdx) => (prevIdx + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurIdx((prevIdx) => (prevIdx - 1 + data.length) % data.length);
    };

    const style = {
        modalImg: {
            width: { xs: "280px", sm: "320px" },
            height: "100%",
            objectFit: "contain"
        },
        closeBtn: {
            position: "absolute",
            top: 8,
            right: 8
        },
        handlerBtn: {
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        dots: {
            width: 10,
            height: 10,
            borderRadius: "50%",
            cursor: "pointer",
        },
        navPanel: {
            position: "absolute",
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)",
        },
        modalMain: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            maxWidth: "90vw",
            maxHeight: "90vh",
            padding: 3,
            backgroundColor: "background.paper"
        }
    }

    const renderImg = (img, ind) => {

        const onImgClick = () => handleOpen(ind);
        const onImgDelete = () => onDelete(ind);

        if (readOnly) {
            return (
                <ImagePreview key={`img-asset-${ind}`}
                    onClick={onImgClick}
                    {...img} />
            );
        }

        return (
            <ImagePreviewWithDelete key={`img-asset-${ind}`}
                onClick={onImgClick}
                onDelete={onImgDelete}
                {...img}
            />
        )
    }

    const renderPaginationDots = (_, ind) => {
        const onClick = () => setCurIdx(ind);
        return (
            <Box key={`dots-${ind}`}
                onClick={onClick}
                sx={{
                    ...style.dots,
                    bgcolor: curIdx === ind ? "primary.main" : "grey.400",
                }}
            />
        )
    }

    return (
        <>
            {/* Image Gallery */}
            <Grid2 container flexWrap={"wrap"} spacing={2}>
                {data.map(renderImg)}
            </Grid2>

            {/* Modal for Image Viewer */}
            <Modal open={open} onClose={handleClose}>
                <Grid2 container
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={2}
                    sx={style.modalMain}>
                    {/* Close Button */}
                    <IconButton onClick={handleClose} sx={style.closeBtn}>
                        <Close />
                    </IconButton>

                    {/* Image Display */}
                    <Box component="img" src={data[curIdx]?.fileData} alt={data[curIdx]?.fileName} sx={style.modalImg} />

                    {/* Navigation Controls */}
                    <Grid2 container
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={style.navPanel}>
                        {/* Previous Button */}
                        <IconButton onClick={handlePrevious} sx={style.handlerBtn}>
                            <ArrowBack />
                        </IconButton>

                        {/* Next Button */}
                        <IconButton onClick={handleNext} sx={style.handlerBtn}>
                            <ArrowForward />
                        </IconButton>
                    </Grid2>

                    {/* Pagination Dots */}
                    <Grid2 container spacing={1}>
                        {data.map(renderPaginationDots)}
                    </Grid2>
                </Grid2>
            </Modal>
        </>
    );
}

export default Index;