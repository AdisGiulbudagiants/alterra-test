/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx"
import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/slices/contactsSlice"

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    dispatch(deleteContact(e))
  }

  console.log(id)

  return (
    <div className="h-[70px] px-[25px] flex flex-col justify-center border-b border-[#eee] last:border-0 hover:bg-gray-200 transition ease-in-out">
      <div className="flex items-center">
        <p className="mr-[5px]">{name}</p>
        <button onClick={() => handleDelete(id)} type="button">
          <RxCross2 className="hover:scale-150" />
        </button>
      </div>
      <p className="text-[#858585] text-[13px]">{phone}</p>
    </div>
  )
}

export default Contact
