
import { z } from "zod";

const schema = z.object({
    title: z.string(),
    scammer_type: z.enum(["Seller", "Buyer"]),
    subtitle: z.string(),
    description: z.string(),
    post_date: z.string().date("Invalid date"), // If date string, keep as string
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, "Password is required"),
    quantity: z.number().int(),
    total_amount: z.number(),
    background: z.string(), // color as string (e.g., hex code),
    profile: z.any().refine((file) => file?.size <= 100, `Max image size is 5MB.`), // image upload (handle separately)
    file: z.any().refine((file) => file?.size <= 100, `Max image size is 5MB.`), // file upload (handle separately)
});

const obj = {
    key: "Sample",
    field: [
        {
            "name": "title",
            "type": "text"
        },
        {
            "name": "scammer_type",
            "type": "dropdown",
            "selection": [
                {
                    "name": "Seller",
                    "value": "Seller"
                },
                {
                    "name": "Buyer",
                    "value": "Buyer"
                }
            ]
        },
        {
            "name": "subtitle",
            "type": "textarea"
        },
        {
            "name": "description",
            "type": "textarea"
        },
        {
            "name": "post_date",
            "type": "date"
        },
        {
            "name": "email",
            "type": "email"
        },
        {
            "name": "password",
            "type": "password"
        },
        {
            "name": "quantity",
            "type": "int"
        },
        {
            "name": "total_amount",
            "type": "decimal"
        },
        {
            "name": "background",
            "type": "color",
        },
        {
            "name": "profile",
            "type": "image"
        },
        {
            "name": "file",
            "type": "file"
        }
    ],
    initial: {
        "title": "",
        "scammer_type": "",
        "subtitle": "",
        "description": "",
        "post_date": "",
        "email": "",
        "password": "",
        "quantity": "",
        "total_amount": "",
        "background": "",
        "profile": "",
        "file": ""
    },
    sample: {
        "title": "asdf",
        "scammer_type": "Buyer",
        "subtitle": "asdf",
        "description": "asdf",
        "post_date": "2025-04-17",
        "email": "txen2000@gmail.com",
        "password": "asdf",
        "quantity": 123,
        "total_amount": 123,
        "background": "#833434"
    },
    schema
};

export default obj;
