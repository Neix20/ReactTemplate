
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
});

const obj = {
    key: "Scammer",
    field: [
        {
            "name": "name",
            "type": "text"
        }
    ],
    initial: {
        name: ""
    },
    schema
};

export default obj;