const style = {
    card: (theme) => ({
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        color: "#000",
        backgroundColor: theme.palette.primary["A700"],
        ...theme.applyStyles('dark', {
            color: "#FFF",
            backgroundColor: "#1E293B",
        })
    }),
    cardTitle: {
        fontSize: "1.2rem",
        fontWeight: 600,
        color: "#5096d1"
    },
    cardSubTitle: {
        fontSize: "0.875rem",
        fontWeight: 400,
        color: "gray"
    },
    cardBody: (theme) => ({ 
        backgroundColor: theme.palette.primary["A700"],
        ...theme.applyStyles('dark', { backgroundColor: "#1E293B" }) 
    })
}

export default style;