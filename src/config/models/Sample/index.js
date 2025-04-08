
const obj = {
    key: "Sample",
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
            "name": "background",
            "type": "color"
        },
        {
            "name": "post_date",
            "type": "date"
        },
        {
            "name": "email",
            "type": "email"
        },
        {
            "name": "password",
            "type": "password"
        },
        {
            "name": "quantity",
            "type": "int"
        },
        {
            "name": "total_amount",
            "type": "decimal"
        },
        {
            "name": "profile",
            "type": "image"
        },
        {
            "name": "file",
            "type": "file"
        },
    ]
}

export default obj;