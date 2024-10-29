import AddContact from "./components/addContactForm/addContact"
import Notification from "./components/Notification"

function App() {
  return (
    <div className="w-full h-screen bg-[#eceff4] flex justify-center items-center">
      <AddContact />
      <Notification />
    </div>
  )
}

export default App
