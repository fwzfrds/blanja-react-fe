const initialState = {
    products: {},
    isLoading: false
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_PRODUCT_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case 'DETAIL_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DETAIL_PRODUCT_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case 'UPDATE_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case 'DELETE_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }

        default:
            return state
    }

    // if (action.type === 'GET_PRODUCTS_PENDING') {
    //     return {
    //         ...state,
    //         isLoading: true
    //     }
    // } else if (action.type === 'GET_PRODUCTS_SUCCESS') {
    //     return {
    //         ...state,
    //         products: action.payload,
    //         isLoading: false
    //     }
    // } else if (action.type === 'ADD_PRODUCT_PENDING') {
    //     return {
    //         ...state,
    //         isLoading: true
    //     }
    // } else if (action.type === 'ADD_PRODUCT_SUCCESS') {
    //     return {
    //         ...state,
    //         products: action.payload,
    //         isLoading: false
    //     }
    // } else if (action.type === 'UPDATE_PRODUCT_PENDING') {
    //     return {
    //         ...state,
    //         isLoading: true
    //     }
    // } else if (action.type === 'UPDATE_PRODUCT_SUCCESS') {
    //     return {
    //         ...state,
    //         products: action.payload,
    //         isLoading: false
    //     }
    // }

    // else {
    //     return state
    // }
}

export default productsReducer