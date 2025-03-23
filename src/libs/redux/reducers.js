
const initialState = {
    theme: "bootstrapTheme",
    user: {
        isLogin: false,
        lastSession: ""
    }

};

function setReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "SET_THEME":
            return {
                ...state,
                theme: action.theme,
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

export default setReducer;