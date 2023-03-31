import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isVisible: boolean
}

const initialState: PopupState = {
  isVisible: false
}

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    visible(state) {
      state.isVisible = true;
    },
    invisible(state) {
      state.isVisible = false;
    }
  }
})

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;