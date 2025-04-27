
import { z } from "zod";

const schema = z.object({
    profile: z.any(),
    name: z.string(),
    gender: z.enum(["Male", "Female"]),
    birthday: z.string().date("Invalid date"),
    role: z.enum(["Admin", "User"]),
});

const obj = {
    key: "Incident",
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
                    "label": "Seller",
                    "value": "Seller"
                },
                {
                    "label": "Buyer",
                    "value": "Buyer"
                }
            ]
        },
        {
            "name": "tag",
            "type": "text"
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
            "name": "social_url",
            "type": "text"
        },
        {
            "name": "post_date",
            "type": "date"
        },
        {
            "name": "reported_date",
            "type": "date"
        },
        {
            "name": "trade_method",
            "type": "dropdown",
            "selection": [
                {
                    "label": "Shipping",
                    "value": "Shipping"
                }
            ]
        },
        {
            "name": "total_amount",
            "type": "decimal"
        },
        {
            "name": "category",
            "type": "dropdown",
            "selection": [
                {
                    "label": "Scam",
                    "value": "Scam"
                },
                {
                    "label": "Alert",
                    "value": "Alert"
                },
                {
                    "label": "Others",
                    "value": "Others"
                }
            ]
        },
        {
            "name": "platform",
            "type": "dropdown",
            "show": false
        },
        {
            "name": "status",
            "type": "dropdown",
            "selection": SampleData.Status
        },
    ],
    initial: {
        title: "",
        tag: "",
        scammer_type: "",
        subtitle: "",
        description: "",
        social_url: "",
        post_date: "",
        reported_date: "",
        trade_method: "",
        total_amount: "",
        category: "",
        platform: "",
        status: ""
    },
    schema
}

export default obj;