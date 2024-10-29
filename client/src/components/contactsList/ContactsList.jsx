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
    <div className="w-[20rem] min-h-[15.625rem] bg-white border border-white rounded-[0.25rem] shadow-md">
      <div className="pl-[1.563rem] h-[3.75rem] border-b border-[#eee] flex items-center">
        <h1>Список контактов</h1>
      </div>
      <div>
        {contactsData.length === 0 ? (
          <div className="mt-5 flex justify-center items-center">
            <p>Пусто пока что...</p>
          </div>
        ) : (
          contactsData.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
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
