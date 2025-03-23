
const onChangeUser = (user) => {
    return {
        type: "SET_USER",
        user: user,
    }
};

export {
    onChangeUser
}