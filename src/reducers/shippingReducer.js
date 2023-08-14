import {createSlice} from '@reduxjs/toolkit'

const shippingReducer = createSlice({
    name:'shippingReducer',
    initialState:{

    },
    reducers:{
        updateShippingReducer(state, action){
            state.value = action.payload
        }
    }
})

export const {updateShippingReducer} = shippingReducer.actions
export default shippingReducer.reducer