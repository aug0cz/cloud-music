import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import recommendReducer from "./features/recommend/slice";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
