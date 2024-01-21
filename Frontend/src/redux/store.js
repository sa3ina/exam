import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/Slice'

export const store = configureStore({
    reducer: {
        product: counterReducer,
    },
})

