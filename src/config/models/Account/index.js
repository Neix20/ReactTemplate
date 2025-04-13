
import { z } from "zod";

const schema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});

const obj = {
    key: "account",
    field: [
        {
            "name": "username",
            "type": "text"
        },
        {
            "name": "password",
            "type": "password"
        }
    ],
    initial: {
        username: "",
        password: ""
    },
    schema
}

export default obj;