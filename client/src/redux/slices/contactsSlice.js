import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { setError, setSuccess } from "./notificationSlice"

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3000/contacts", data)
      return thunkAPI.dispatch(setSuccess(response.data.message))
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = { usersData: null, isLoading: false }

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addContact.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false
      state.usersData = action.payload
    })
    builder.addCase(addContact.rejected, (state) => {
      state.isLoading = false
      state.usersData = null
    })
  },
})

export const selectIsLoading = (state) => state.contacts.isLoading
export const selectUsersData = (state) => state.contacts.usersData

export default contactsSlice.reducer
