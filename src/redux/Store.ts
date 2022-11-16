import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import pageReducer from "./features/page/pageSlice";
import languageReducer from "./features/language/languageSlice";
import { entertainmentApi } from "./services/entertainment";

const store = configureStore({
  reducer: {
    [entertainmentApi.reducerPath]: entertainmentApi.reducer,
    page: pageReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(entertainmentApi.middleware),
});
export default store;
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;