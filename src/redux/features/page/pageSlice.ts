import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  value: number;
}

const initialState: PageState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;