
import { SampleData } from "@config";

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
    ]
}

export default obj;