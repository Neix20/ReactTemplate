import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip, Modal, Card as MuiCard } from "@mui/material";

import { Authenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from "@aws-amplify/auth";

import '@aws-amplify/ui-react/styles.css';

import { styled } from "@mui/material";

import { ColorModeIconDropdown, BpInput, BpLoading } from "@components";
import { useForm, useToggle } from "@hooks";

import { Controller } from "react-hook-form";
import { FormControl, FormLabel, FormHelperText } from "@mui/material";
import ReactSelect from "@components/ui/Form/Item/components/Dropdown/Multi";

const BpContainer = styled(Container)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: '100%',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'linear-gradient(180deg, rgba(80,150,209, 0.2) 0%, rgba(255,255,255,1) 75%)',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const formFields = {
    signUp: {
        email: {
            order: 1
        },
        name: {
            order: 2
        },
        username: {
            order: 3
        },
        password: {
            order: 4
        },
        confirm_password: {
            order: 5
        }
    }
}

const Card = styled(MuiCard)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(4),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

import ProfilePhoto from "./components/ProfilePhoto";

function ProfilePhotoPage(props) {

    const { name = "", control = null, images = [] } = props;

    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant={"h2"}>
                    Add a photo 📷
                </Typography>
                <Typography variant={"body1"}>
                    Add a profile photo so that your friend know it's you!
                </Typography>
            </Box>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <ProfilePhoto images={images} {...field} />
                )}
            />
        </>
    )
};

import { Male, Female } from "@mui/icons-material";

function CuGenderSelect(props) {

    const { name = "", control = null } = props;
    const { label = "", placeholder = "", selection = [], sx = {} } = props;

    const formatOptionLabel = ({ label, icon }) => {
        return (
            <Grid2 container spacing={1}>
                {icon}
                <Typography>{label}</Typography>
            </Grid2>
        );
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return (
                    <FormControl fullWidth errors={error} sx={sx}>
                        <FormLabel>{label}</FormLabel>
                        <ReactSelect
                            isMulti={false}
                            placeholder={placeholder}
                            selection={selection}
                            error={error}
                            {...field}
                            formatOptionLabel={formatOptionLabel} />
                        <FormHelperText sx={{ color: "error.main" }}>{error?.message}</FormHelperText>
                    </FormControl>
                )
            }}
        />
    )
}

function NamePage(props) {
    const { control = null } = props;

    const gender = [
        {
            "label": "Male",
            "value": "Male",
            "icon": <Male sx={{ color: "lightblue" }} />
        },
        {
            "label": "Female",
            "value": "Female",
            "icon": <Female sx={{ color: "pink" }} />
        }
    ];

    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant={"h2"}>
                    What's your name? ✍️
                </Typography>
                <Typography variant={"body1"}>
                    Tell us your name so that we can personalize your experience.
                </Typography>
            </Box>
            <BpInput
                name={"name"} type={"text"}
                hasLabel={true} label={"Name"}
                control={control}
                placeholder={"Enter Your Name"}
                sx={{ mt: 1 }}
            />
            <CuGenderSelect
                name={"gender"} label={"Gender"}
                control={control} selection={gender}
                placeholder={"Select Gender"}
                sx={{ mt: 1 }}
            />
            <BpInput
                name={"birthday"} type={"date"}
                hasLabel={true} label={"Birthday"}
                control={control}
                sx={{ mt: 1 }}
            />
        </>
    )
}

import { CheckCircle, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTimer } from "@hooks";

function CompletePage(props) {

    const { seconds = -1 } = props;

    {/* Add Redirect Here */ }
    return (
        <Grid2 container
            flexDirection={"column"}
            alignItems={"center"}
            spacing={2}>
            <Grid2 container flexDirection={"column"} alignItems={"center"} spacing={0}>
                <Typography variant="h2">
                    All done!
                </Typography>
                <Typography variant="body1">
                    Redirecting in {seconds} Seconds ...
                </Typography>
            </Grid2>
            <CheckCircle
                sx={{
                    fontSize: 100,
                    color: 'success.main',
                }}
            />
        </Grid2>
    )
}


function useStep() {
    const [step, setStep] = useState(0);

    const add = () => setStep(pVal => pVal + 1);
    const minus = () => setStep(pVal => pVal - 1);

    return {
        step, add, minus
    }
}

import { z } from "zod";

const template = {
    login: {
        key: "login",
        field: [
            {
                "name": "profile",
                "type": "image"
            },
            {
                "name": "name",
                "type": "text"
            },
            {
                "name": "gender",
                "type": "dropdown"
            },
            {
                "name": "birthday",
                "type": "date"
            },
        ],
        initial: {
            profile: {},
            name: "",
            gender: null,
            birthday: ""
        },
        schema: z.object({
            profile: z.any().optional(),
            name: z.string(),
            gender: z.object({
                label: z.string(),
                value: z.string()
            }),
            birthday: z.string().date("Invalid Date")
        })
    }
};

import { fetchSignIn, fetchSignUp } from "@api";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

function Main(props) {

    const { user = {} } = props;

    const { userId = "" } = user;

    const { step, add, minus } = useStep();

    const navigate = useNavigate();

    const onTimerDone = () => {
        navigate("/");
    }
    const { value: seconds, setValue: setSeconds } = useTimer(onTimerDone);

    const { control, handleSubmit, resetData } = useForm(template.login);

    // Not New Login
    // const user_arr = [];

    // Get List of User Ids from Here?
    // Make an API to check if it exists
    const images = [
        {
            "fileName": "bgStock01",
            "fileData": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-01.jpg"
        },
        {
            "fileName": "bgStock02",
            "fileData": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-02.jpg"
        },
        {
            "fileName": "bgStock03",
            "fileData": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-03.jpg"
        },
        {
            "fileName": "bgStock04",
            "fileData": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-04.jpg"
        },
        {
            "fileName": "bgStock05",
            "fileData": "https://order-cart-app-01.s3.us-east-1.amazonaws.com/stock-05.jpg"
        }
    ];

    const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);
    const { flag: firstTime, open: setFirstTimeTrue, close: setFirstTimeFalse } = useToggle(false);

    const dispatch = useDispatch();

    const signIn = (data) => {
        setLoadingTrue();
        fetchSignIn(data)
            .then(res => {
                setLoadingFalse();

                const { data = {} } = res;
                dispatch(Actions.onChangeUser(data));

                setSeconds(_ => 3);
            })
            .catch(err => {
                setLoadingFalse();
                setFirstTimeTrue();
            })
    }


    const signUp = (data) => {
        setLoadingTrue();
        fetchSignUp(data)
            .then(res => {
                setLoadingFalse();

                // Set In Redux
                dispatch(Actions.onChangeUser(data));

                add();
                setSeconds(_ => 3);
            })
            .catch(err => {
                setLoadingFalse();
                console.error(err);
            })
    }

    const onSubmit = (data) => {

        const _data = {
            id: userId,
            ...data,
            gender: data["gender"].value
        };

        signUp(_data);
    }

    useEffect(() => {
        signIn({ id: userId });
    }, [userId]);

    if (!firstTime) {
        return (
            <></>
        );
    }

    return (
        <Card sx={{ padding: 2 }}>
            <BpLoading loading={loading} />
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <Box hidden={step !== 0}>
                    <ProfilePhotoPage images={images}
                        name={"profile"} control={control} />
                </Box>
                <Box hidden={step !== 1}>
                    <NamePage control={control} />
                </Box>
                <Box hidden={step !== 2}>
                    <CompletePage seconds={seconds} />
                </Box>
                <Grid2 container alignItems={"center"} justifyContent={"space-between"}
                    sx={{ display: step < 2 ? "flex" : "none", mt: 2 }}>
                    <Button type={"button"} variant={"outlined"} onClick={minus} sx={{ visibility: step < 1 ? "hidden" : "visible" }}>Previous</Button>
                    <Grid2 container spacing={1} sx={{ display: step == 1 ? "flex" : "none" }}>
                        <Button type={"button"} onClick={resetData} variant={"contained"} color={"error"}>Reset</Button>
                        <Button type={"submit"} variant={"contained"}>Submit</Button>
                    </Grid2>
                    <Button type={"button"} variant={"contained"} onClick={add} sx={{ display: step < 1 ? "block" : "none" }}>Next</Button>
                </Grid2>
            </Box>
        </Card>
    )
}

function Index(props) {

    return (
        <BpContainer maxWidth={"xl"}>
            <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Authenticator
                formFields={formFields}
                socialProviders={['google']}
                signUpAttributes={['email', 'name']}>
                {({ user }) => (
                    <Main user={user} />
                )}
            </Authenticator>
        </BpContainer>
    )
}

export default Index;