
const onChangeTheme = (theme) => {
    return {
        type: "SET_THEME",
        theme: theme,
    }
};

const onChangeUser = (user) => {
    return {
        type: "SET_USER",
        user: user,
    }
};

export {
    onChangeTheme,
    onChangeUser
}