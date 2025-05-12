
import { z } from "zod";

import { SampleData } from "@config";

const schema = z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    social_url: z.string().startsWith("https://"),
    post_date: z.string().date("Invalid date"), // If date string, keep as string
    reported_date: z.string().date("Invalid date"), // If date string, keep as string
    trade_method: z.enum(["Shipping"]),
    total_amount: z.number(),
    category: z.enum(["Scam", "Alert", "Others"]),
    subcategory: z.enum(["Seller", "Buyer"]),
    platform: z.string().min(1, "Platform is required"),
    status: z.enum(["Active", "Pending", "Inactive"]),
    tag: z.string()
});

const obj = {
    key: "Incident",
    field: [
        {
            "name": "title",
            "type": "text"
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
            "name": "subcategory",
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
        subtitle: "",
        description: "",
        social_url: "",
        post_date: "",
        reported_date: "",
        trade_method: "",
        total_amount: "",
        category: "",
        subcategory: "",
        platform: "",
        status: ""
    },
    schema
}

export default obj;