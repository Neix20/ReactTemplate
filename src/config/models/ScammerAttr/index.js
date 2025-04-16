
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    value: z.string().min(1, "Value is required"),
    category: z.enum(["social_media", "platform", "nickname", "others"]),
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
                    "name": "social_media",
                    "value": "social_media"
                },
                {
                    "name": "platform",
                    "value": "platform"
                },
                {
                    "name": "nickname",
                    "value": "nickname"
                },
                {
                    "name": "others",
                    "value": "others"
                },
            ]
        },
        {
            "name": "type",
            "type": "dropdown",
            "selection": [
                {
                    "name": "string",
                    "value": "string"
                },
                {
                    "name": "file",
                    "value": "file"
                },
                {
                    "name": "others",
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