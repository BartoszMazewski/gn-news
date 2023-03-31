import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import clockReducer from '../features/clock/clockSlice'
import viewReducer from '../features/view/viewSlice'
import popupReducer from '../features/popup/popupSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    clock: clockReducer,
    view: viewReducer,
    popup: popupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;