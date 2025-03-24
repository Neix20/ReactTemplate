
const obj = {
    key: "Product",
    field: [
        {
            "name": "title",
            "type": "text"
        },
        {
            "name": "password",
            "type": "password"
        },
        {
            "name": "description",
            "type": "textarea"
        },
        {
            "name": "quantity",
            "type": "int"
        },
        {
            "name": "price",
            "type": "decimal"
        },
        {
            "name": "created_date",
            "type": "date"
        },
        {
            "name": "status",
            "type": "dropdown",
            "selection": [
                {
                    "name": "Pending",
                    "value": "Pending"
                },
                {
                    "name": "Active",
                    "value": "Active"
                },
                {
                    "name": "Inactive",
                    "value": "Inactive"
                }
            ]
        },
        {
            "name": "image",
            "type": "image",
        }
    ]
};

export default obj;