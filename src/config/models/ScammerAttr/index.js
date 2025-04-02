const obj = {

    key: "Scammer Attribute",
    field: [
        {
            "name": "name",
            "type": "text"
        },
        {
            "name": "value",
            "type": "text"
        },
        {
            "name": "category",
            "type": "dropdown",
        },
        {
            "name": "type",
            "type": "dropdown",
            "selection": [
                {
                    "name": "string",
                    "value": "string"
                },
                {
                    "name": "file",
                    "value": "file"
                },
                {
                    "name": "others",
                    "value": "others"
                }
            ]
        }
    ]

}

export default obj;