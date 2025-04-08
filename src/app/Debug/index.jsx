
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField, Button, Box } from "@mui/material";
import { FormControl, FormLabel, FormHelperText } from "@mui/material";

// 1. Zod schema for validation
const UserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
});

// 2. React component with Material UI + React Hook Form
const Index = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(UserSchema) });

    console.log(register("name"))

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ maxWidth: 400, mx: "auto", mt: 5 }}
        >
            <FormControl fullWidth error={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <TextField {...register("name")} error={!!errors.name} />
                <FormHelperText>{errors.name?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth error={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <TextField {...register("email")} error={!!errors.email} />
                <FormHelperText>{errors.email?.message}</FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Box>
    );
};

import OldForm from "./OldForm";

export default Index;

// export default Index;
