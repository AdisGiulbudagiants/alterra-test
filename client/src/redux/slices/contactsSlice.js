import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { setError, setSuccess } from "./notificationSlice"

//Добавление контакта
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

//Получение всех контактов
export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3000/contacts")
      return response.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//Удаление контакта
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete("http://localhost:3000/contacts", {
        data: { id: data },
      })
      thunkAPI.dispatch(setSuccess(response.data.message))
      thunkAPI.dispatch(getAllContacts())
      return response.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  usersData: [],
  isLoading: false,
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Добавление контакта
    builder.addCase(addContact.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addContact.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(addContact.rejected, (state) => {
      state.isLoading = false
    })
    //Получение всех контактов
    builder.addCase(getAllContacts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      state.isLoading = false
      state.usersData = action.payload
    })
    builder.addCase(getAllContacts.rejected, (state) => {
      state.isLoading = false
    })
    //Удаление контакта
    builder.addCase(deleteContact.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(deleteContact.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectIsLoading = (state) => state.contacts.isLoading
export const selectUsersData = (state) => state.contacts.usersData

export default contactsSlice.reducer
