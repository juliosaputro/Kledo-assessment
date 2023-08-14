import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../reducers/userReducer'
import shippingReducer from '../reducers/shippingReducer'

const store = configureStore({
    reducer:{
        userReducer,
        shippingReducer
    }
})

export default store