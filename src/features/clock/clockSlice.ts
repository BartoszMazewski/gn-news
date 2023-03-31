import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ClockState {
  currentTime: string;
}

const initialState: ClockState = {
  currentTime: '',
}

export function fetchCount(amount = '') {
  return new Promise<{ data: string }>((resolve) =>
    setInterval(() => resolve({ data: amount }), 100)
  );
}

export const startClock = createAsyncThunk(
  "clock/startClock",
  async (timer:string) => {
    const response = await fetchCount(timer);
    return response.data
  }
)

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    setTime(state) {
      state.currentTime = new Date().toLocaleTimeString();
    }
  }
})

export const clockActions = clockSlice.actions;
export default clockSlice.reducer;