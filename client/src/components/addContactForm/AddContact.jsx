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
    setName("")
    setPhone("")
    dispatch(getAllContacts()) // Обновляем список контактов после добавления
  }

  return (
    <div className="w-[320px] h-[250px] mt-[20px] bg-white border border-white rounded-[4px] shadow-md">
      <div className="pl-[25px] h-[60px] border-b border-[#eee] flex items-center">
        <h1>Добавить контакт</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="gap-[10px] grid mt-[20px] px-[25px]">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="pl-[15px] h-[40px] rounded-[4px] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="text"
          placeholder="Имя"
          required
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="pl-[15px] h-[40px] rounded-[4px] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="tel"
          placeholder="Телефон"
          required
        />
        <div className="flex justify-end">
          <button
            className="mt-[15px] w-[97px] h-[40px] rounded-[4px] bg-[#4d59a1] text-white hover:-translate-y-1 active:bg-[#626fc1] transition ease-in-out"
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
