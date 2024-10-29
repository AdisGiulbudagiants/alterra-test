import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectUsersData,
  getAllContacts,
} from "../../redux/slices/contactsSlice"
import Contact from "./Contact"

const ContactsList = () => {
  const dispatch = useDispatch()
  const contactsData = useSelector(selectUsersData)

  useEffect(() => {
    dispatch(getAllContacts())
  }, [dispatch])

  return (
    <div className="w-[320px] min-h-[250px] bg-white border border-white rounded-[4px] shadow-md">
      <div className="pl-[25px] h-[60px] border-b border-[#eee] flex items-center">
        <h1>Список контактов</h1>
      </div>
      <div>
        {contactsData.length === 0 ? (
          <div className=" mt-5 flex justify-center items-center">
            <p>Пусто пока что...</p>
          </div>
        ) : (
          contactsData.map((contact) => (
            <Contact
              key={contact.id}
              name={contact.full_name}
              phone={contact.phone}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ContactsList
