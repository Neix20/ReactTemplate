const style = {
    card: (theme) => ({
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        color: "#000",
        backgroundColor: "#f7fcfc",
        ...theme.applyStyles('dark', {
            color: "#FFF",
            backgroundColor: "#0f172a",
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
        backgroundColor: "#f7fcfc",
        ...theme.applyStyles('dark', { backgroundColor: "#0f172a" }) 
    })
}

export default style;