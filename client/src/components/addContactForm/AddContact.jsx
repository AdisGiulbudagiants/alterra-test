import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsLoading,
  addContact,
  getAllContacts,
} from "../../redux/slices/contactsSlice"

const AddContact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(addContact({ name, phone }))
    dispatch(getAllContacts()) // Обновляем список контактов после добавления
    setName("")
    setPhone("")
  }

  return (
    <div className="w-[20rem] h-[15.625rem] mt-[1.25rem] bg-white border border-white rounded-[0.25rem] shadow-md">
      <div className="pl-[1.563rem] h-[3.75rem] border-b border-[#eee] flex items-center">
        <h1>Добавить контакт</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="gap-[0.625rem] grid mt-[1.25rem] px-[1.563rem]">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="pl-[0.938rem] h-[2.5rem] rounded-[0.25rem] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="text"
          placeholder="Имя"
          required
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="pl-[0.938rem] h-[2.5rem] rounded-[0.25rem] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="tel"
          placeholder="Телефон"
          required
        />
        <div className="flex justify-end">
          <button
            className="mt-[0.938rem] w-[6.063rem] h-[2.5rem] rounded-[0.25rem] bg-[#4d59a1] text-white hover:-translate-y-1 active:bg-[#626fc1] transition ease-in-out"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Добавить"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddContact
