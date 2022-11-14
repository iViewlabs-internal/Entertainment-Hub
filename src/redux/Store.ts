import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { entertainmentApi } from './services/entertainment';
import rootReducer from './reducers';

const store = configureStore({
    reducer:{
        [entertainmentApi.reducerPath] : entertainmentApi.reducer,
        // rootReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entertainmentApi.middleware),
})
export default store;
setupListeners(store.dispatch)

// for typescript defining types for store useSelector and useDispatch
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch