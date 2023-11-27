import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define a type for the slice state
export interface OverlaySlice {
  showOverlay: boolean;
}

// Define the initial state using that type
const initialState: OverlaySlice = {
  showOverlay: false,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    show: (state) => {
      state.showOverlay = true;
    },
    hide: (state) => {
      state.showOverlay = false;
    },
  },
});

export const { show, hide } = overlaySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOverlay = (state: RootState) => state.overlay.showOverlay;

export default overlaySlice.reducer;
