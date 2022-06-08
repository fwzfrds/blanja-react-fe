import {combineReducers} from 'redux'
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    products: productsReducer
})

export default rootReducer