const Reducer = (state, action) => {
    switch (action.type) {
        case 'MODAL':
            return {
                ...state,
                isModalVisible: action.payload
            };
        case 'USER_FIREBASE_LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'USER_LOGGED':
            return {
                ...state,
                logged: action.payload
            };
            
        default:
            return state;
    }
};

export default Reducer;