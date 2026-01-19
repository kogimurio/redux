import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from'../features/cake/cakeSlice'
import iceCreamReducer from'../features/icecream/iceCreamSlice'
import userReducer from'../features/users/userSlice'


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store


