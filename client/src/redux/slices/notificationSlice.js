import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  error: null,
  success: null,
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    setSuccess: (state, action) => {
      state.success = action.payload
    },
    clearError: () => {
      return initialState
    },
  },
})

export const { setError, clearError, setSuccess } = notificationSlice.actions

export const selectErrorMessage = (state) => state.notification.error
export const selectSuccessMessage = (state) => state.notification.success

export default notificationSlice.reducer
