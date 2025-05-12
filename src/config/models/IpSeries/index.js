
import { z } from "zod";

import { SampleData } from "@config";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    launch_date: z.string().min(1, "Launch date is required"),
    link: z.string().startsWith("https://"),
    parent: z.any(),
    image: z.any(),
    status: z.string(),
});

const obj = {
    key: "ip_series",
    field: [
        {
            "name": "name",
            "type": "text"
        },
        {
            "name": "description",
            "type": "textarea"
        },
        {
            "name": "link",
            "type": "text"
        },
        {
            "name": "parent",
            "type": "dropdown",
            "show": false
        },
        {
            "name": "variety",
            "type": "text",
        },
        {
            "name": "image",
            "type": "image",
        },
        {
            "name": "status",
            "type": "dropdown",
            "selection": SampleData.Status
        },
    ],
    initial: {
        name: "",
        description: "",
        link: "",
        parent: "",
        variety: "",
        image: "",
        status: ""
    },
    schema
};

export default obj;