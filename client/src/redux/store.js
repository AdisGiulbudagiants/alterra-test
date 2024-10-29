import { configureStore } from "@reduxjs/toolkit"
import ContactsReducer from "./slices/contactsSlice.js"
import notificationReducer from "./slices/notificationSlice.js"

const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    notification: notificationReducer,
  },
})

export default store
