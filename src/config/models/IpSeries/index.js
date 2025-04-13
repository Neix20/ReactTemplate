
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    launch_date: z.string().min(1, "Launch date is required"),
    parent: z.any(),
    image: z.any()
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
            "name": "launch_date",
            "type": "date"
        },
        {
            "name": "parent",
            "type": "dropdown",
            "show": false
        },
        {
            "name": "image",
            "type": "image",
        }
    ],
    initial: {
        name: "",
        description: "",
        launch_date: "",
        parent: "",
        image: ""
    },
    schema
};

export default obj;