import AddContact from "./components/addContactForm/addContact"
import ContactsList from "./components/contactsList/ContactsList"
import Notification from "./components/Notification"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#eceff4] flex flex-col justify-center items-center gap-[20px]">
      <AddContact />
      <ContactsList />
      <Notification />
    </div>
  )
}

export default App
