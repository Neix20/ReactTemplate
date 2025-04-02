const data = {
    main: {
        height: "100%",
        width: "100%"
    },
    debug: {
        backgroundColor: "#F00"
    },
    bordered: {
        padding: 2,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: (theme) => theme.palette.grey[200],
    },
    body: {
        height: "90%",
        width: "100%"
    },
    topBar: {
        height: "10%",
        width: "100%",
        borderRadius: 0,
        paddingX: 2,
        marginBottom: .25,
    },
    topBarRow: {
        height: "50%",
        width: "100%"
    }
};

export default data;