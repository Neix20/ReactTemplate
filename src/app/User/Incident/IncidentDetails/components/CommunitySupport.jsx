import { useState } from "react";
import { Avatar, Box, Button, Checkbox, Divider, TextField, Typography, Card } from "@mui/material";

import { useParams } from "react-router-dom";

import style from "./style";

import { useToggle, useForm } from "@hooks";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { z } from "zod";
import { Controller } from "react-hook-form";
import { FormControl, FormLabel, FormHelperText } from "@mui/material";

const template = {
    comment: {
        initial: {
            comment: ""
        },
        schema: z.object({
            comment: z.string().min(1, "Comment is required")
        })
    }
}


const CommunityDiscussions = (props) => {

    const { PK: userId } = useSelector(Selectors.userSelect);
    const { IncidentId = "" } = useParams();

    const { comments = [], onComment = () => {} } = props;

    const { control, handleSubmit, resetData } = useForm(template.comment);

    const onSubmit = (data) => {
        const _data = {
            userId,
            incidentId: IncidentId,
            comment: data.comment
        };

        onComment(_data);
        resetData();
    }

    return (
        <>
            <Card sx={style.card}>
                <Typography sx={style.cardTitle}>
                    Community Discussions
                </Typography>
                {
                    comments.map((comment, index) => (
                        <Box key={index}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                                <Avatar sx={{ bgcolor: "gray" }} />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                        <Typography sx={(theme) => ({ color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment.reported_by}</Typography>
                                        <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>{comment.date}</Typography>
                                    </Box>
                                    <Typography sx={(theme) => ({ mb: 1, color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment.comment}</Typography>
                                </Box>
                            </Box>
                            {index < comments.length - 1 && <Divider sx={{ borderColor: "gray", my: 1 }} />}
                        </Box>
                    ))
                }
            </Card >

            {/* Share Your Thoughts */}
            <Card sx={style.card}>
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <Typography sx={style.cardTitle}>
                        Share Your Thoughts
                    </Typography>
                    <Controller
                        name={"comment"}
                        control={control}
                        render={({ field, fieldState: { error } }) => {
                            return (

                                <>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        placeholder="Share your experience, advice, or support for other victims..."
                                        {...field}
                                        error={error}
                                        sx={{ borderRadius: 2 }}
                                    />
                                    <FormHelperText sx={{ color: "error.main" }}>{error?.message}</FormHelperText>
                                </>
                            )
                        }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                        <Button variant="contained" type={"submit"}>
                            Post Comment
                        </Button>
                    </Box>
                </Box>
            </Card >
        </>
    );
};

export default CommunityDiscussions;
