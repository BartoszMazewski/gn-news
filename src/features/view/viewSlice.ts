import { createSlice } from "@reduxjs/toolkit";


interface ViewState {
  isList: Boolean
}

const initialState: ViewState = {
  isList: true,
}

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toogle(state) {
      state.isList = !state.isList
    }
  }
})

export const viewActions = viewSlice.actions;
export default viewSlice.reducer;