const initialState = {
    user: {
        fullname: '',
        email: '',
        role: ''
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USER_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                isLoading: false
            }

        case 'USER_REGISTER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                isLoading: false
            }
        case 'USER_REGISTER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        case 'USER_UPDATE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case 'USER_UPDATE_ERROR':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }

    // if(action.type === 'USER_LOGIN_PENDING'){
    //     return {
    //         ...state,
    //         isLoading: true
    //     }
    // }else if(action.type === 'USER_LOGIN_SUCCESS'){
    //     return{
    //         ...state,
    //         user: action.payload,
    //         isLoading: false
    //     }
    // }else{
    //     return state
    // }
}

export default userReducer