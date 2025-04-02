import { useState, useEffect } from "react";

import { Container, Grid2, Typography, Button, Paper, IconButton, Box, Tooltip } from "@mui/material";
import { GlobalStyles } from "@config";



import { BpForm, BpLoading } from "@components";
import { useForm } from "@hooks";

import { Amplify } from "@libs/auth";

const template = {
    login: {
        key: "Login",
        field: [
            {
                "name": "username",
                "type": "email"
            },
            {
                "name": "password",
                "type": "password"
            }
        ]
    }
}

function Index(props) {

    const { key, data, field, updateDataHtml, resetData } = useForm(template.login);

    const [loading, setLoading] = useState(false);

    const onLogin = () => { }
    const onRegister = () => { }

    return (
        <>
            <BpLoading loading={loading} />
            <Container maxWidth={"xl"} sx={{ padding: 2 }}>
                <Box sx={GlobalStyles.bordered}>
                    <BpForm size={{ xs: 1, sm: 1 }}
                        hasLabel={true}
                        key={key} idx={key}
                        data={data} field={field}
                        onUpdate={updateDataHtml} />
                    <Box sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onLogin}>Login</Button>
                    </Box>
                </Box>
                <Box sx={{ mt: 2, ...GlobalStyles.bordered }}>
                    <BpForm size={{ xs: 1, sm: 1 }}
                        hasLabel={true}
                        key={key} idx={key}
                        data={data} field={field}
                        onUpdate={updateDataHtml} />
                    <Box sx={{ mt: 2 }}>
                        <Button variant={"contained"} onClick={onRegister}>Register</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Index;