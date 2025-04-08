
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextField, Button, Box } from "@mui/material";
import { FormControl, FormLabel, FormHelperText } from "@mui/material";

// 1. Zod schema for validation
const schema = z.object({
    title: z.string(),
    scammer_type: z.enum(["Seller", "Buyer"]),
    subtitle: z.string(),
    description: z.string(),
    background: z.string(), // color as string (e.g., hex code)
    post_date: z.string().date("Invalid date"), // If date string, keep as string
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required"),
    quantity: z.number().int(),
    total_amount: z.number(),
    profile: z.any(), // image upload (handle separately)
    file: z.any(),    // file upload (handle separately)
  });

// 2. React component with Material UI + React Hook Form
const Index = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

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
