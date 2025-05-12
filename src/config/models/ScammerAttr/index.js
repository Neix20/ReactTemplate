
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    value: z.string().min(1, "Value is required"),
    category: z.enum(["social_media", "payment_methods", "others"]),
    type: z.enum(["string", "file", "others"]),
});

const obj = {
    key: "Scammer Attribute",
    field: [
        {
            "name": "name",
            "type": "text"
        },
        {
            "name": "value",
            "type": "text"
        },
        {
            "name": "category",
            "type": "dropdown",
            "selection": [
                {
                    "label": "social_media",
                    "value": "social_media"
                },
                {
                    "label": "payment_methods",
                    "value": "payment_methods"
                },
                {
                    "label": "others",
                    "value": "others"
                }
            ]
        },
        {
            "name": "type",
            "type": "dropdown",
            "selection": [
                {
                    "label": "string",
                    "value": "string"
                },
                {
                    "label": "file",
                    "value": "file"
                },
                {
                    "label": "others",
                    "value": "others"
                }
            ]
        }
    ],
    initial: {
        "name": "",
        "value": "",
        "category": "",
        "type": ""
    },
    schema
}

export default obj;