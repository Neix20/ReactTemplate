
import { z } from "zod";

const schema = z.object({
    name: z.string(),
    gender: z.enum(["Male", "Female"]),
    birthday: z.string().date("Invalid date"),
    profile: z.any(),
    role: z.enum(["Admin", "User"]),
});

const obj = {
    key: "User",
    field: [
        {
            "name": "name",
            "type": "text"
        },
        {
            "name": "gender",
            "type": "dropdown",
            "selection": [
                {
                    "label": "Male",
                    "value": "Male",
                },
                {
                    "label": "Female",
                    "value": "Female",
                }
            ]
        },
        {
            "name": "birthday",
            "type": "date"
        },
        {
            "name": "profile",
            "type": "image"
        },
        {
            "name": "role",
            "type": "dropdown",
            "selection": [
                {
                    "label": "Admin",
                    "value": "Admin",
                },
                {
                    "label": "User",
                    "value": "User",
                }
            ]
        }
    ],
    initial: {
        name: "",
        gender: "",
        birthday: "",
        profile: null,
        role: "",
    },
    schema
}

export default obj;