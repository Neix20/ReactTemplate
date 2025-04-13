
import { z } from "zod";

const schema = z.object({
    title: z.string(),
    scammer_type: z.enum(["Seller", "Buyer"]),
    subtitle: z.string(),
    description: z.string(),
    social_url: z.string().startsWith("https://"),
    post_date: z.string().date("Invalid date"), // If date string, keep as string
    reported_date: z.string().date("Invalid date"), // If date string, keep as string
    trade_method: z.enum(["Shipping"]),
    total_amount: z.number(),
    category: z.enum(["Scam", "Suspicious", "Others"]),
    platform: z.string().min(1, "Platform is required")
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
                    "name": "Shipping",
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
                    "name": "Scam",
                    "value": "Scam"
                },
                {
                    "name": "Alert",
                    "value": "Alert"
                }
            ]
        },
        {
            "name": "platform",
            "type": "dropdown",
            "show": false
        }
    ],
    initial: {
        title: "",
        scammer_type: "",
        subtitle: "",
        description: "",
        social_url: "",
        post_date: "",
        reported_date: "",
        trade_method: "",
        total_amount: "",
        category: "",
        platform: ""
    },
    schema
}

export default obj;